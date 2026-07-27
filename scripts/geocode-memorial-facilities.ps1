param(
  [string]$ExcelPath = "C:\Users\emfor\OneDrive\바탕 화면\list_.xls",
  [string]$OutputPath = "assets\memorial-facilities.json",
  [int]$Start = 0,
  [int]$Limit = 0,
  [switch]$ApproxOnly,
  [switch]$SkipGeocode
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.IO.Compression.FileSystem
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Read-ZipEntryText {
  param(
    [System.IO.Compression.ZipArchive]$Zip,
    [string]$Name
  )

  $entry = $Zip.Entries | Where-Object { $_.FullName -eq $Name } | Select-Object -First 1
  if (-not $entry) {
    throw "XLSX entry not found: $Name"
  }

  $reader = New-Object System.IO.StreamReader($entry.Open(), [System.Text.Encoding]::UTF8)
  try {
    return $reader.ReadToEnd()
  } finally {
    $reader.Close()
  }
}

function Get-ColumnIndex {
  param([string]$Reference)

  $letters = ([regex]::Match($Reference, "^[A-Z]+")).Value
  $index = 0
  foreach ($character in $letters.ToCharArray()) {
    $index = ($index * 26) + ([int][char]$character - [int][char]"A" + 1)
  }
  return $index
}

function Get-SharedStringValue {
  param($SharedStringNode)

  $texts = New-Object System.Collections.Generic.List[string]
  if ($SharedStringNode.t) {
    $texts.Add([string]$SharedStringNode.t)
  }
  if ($SharedStringNode.r) {
    foreach ($run in $SharedStringNode.r) {
      if ($run.t) {
        $texts.Add([string]$run.t)
      }
    }
  }

  return ($texts -join "")
}

function Get-CellValue {
  param(
    $Cell,
    [string[]]$SharedStrings
  )

  $value = [string]$Cell.v
  if ($Cell.t -eq "s" -and $value -ne "") {
    return $SharedStrings[[int]$value]
  }
  if ($Cell.t -eq "inlineStr" -and $Cell.is.t) {
    return [string]$Cell.is.t
  }
  return $value
}

function Normalize-Address {
  param([string]$Address)

  if ([string]::IsNullOrWhiteSpace($Address)) {
    return ""
  }

  $value = $Address.Trim()
  $value = $value -replace "\s+", " "
  $value = $value -replace "(특별자치도|특별자치시|특별시|광역시|자치도|도)(?=[가-힣])", '$1 '
  $value = $value -replace "([가-힣]+?(?:시|군|구))(?=[가-힣]+(?:읍|면|동|가|리))", '$1 '
  $value = $value -replace "([가-힣]+?(?:시|군|구))(?=[가-힣0-9]+(?:대로|로|길))", '$1 '
  $value = $value -replace "([가-힣]+?(?:읍|면|동|가|리))(?=[가-힣0-9]+(?:대로|로|길))", '$1 '
  $value = $value -replace "([가-힣]+?(?:읍|면|동|가|리))(?=산?\d)", '$1 '
  return ($value -replace "\s+", " ").Trim()
}

function Remove-Parentheses {
  param([string]$Value)

  return (($Value -replace "\([^)]*\)", " ") -replace "\s+", " ").Trim()
}

function Get-ReversedRoadQuery {
  param([string]$Address)

  $match = [regex]::Match($Address, "([가-힣0-9·\.\-]+(?:대로|로|길))\s*([0-9]+(?:-[0-9]+)?)")
  if (-not $match.Success) {
    return ""
  }

  $prefix = $Address.Substring(0, $match.Index).Trim()
  if ($prefix.Length -eq 0) {
    return ""
  }

  $parts = $prefix -split "\s+" | Where-Object { $_ -ne "" }
  [array]::Reverse($parts)
  $reversedPrefix = [string]::Join(", ", $parts)

  return "$($match.Groups[1].Value) $($match.Groups[2].Value), $reversedPrefix"
}

function Get-ReversedLotQuery {
  param([string]$Address)

  $match = [regex]::Match($Address, "([가-힣0-9·\.\-]+(?:읍|면|동|리|가))\s*(산?\s*[0-9]+(?:-[0-9]+)?)")
  if (-not $match.Success) {
    return ""
  }

  $prefix = $Address.Substring(0, $match.Index).Trim()
  if ($prefix.Length -eq 0) {
    return ""
  }

  $parts = $prefix -split "\s+" | Where-Object { $_ -ne "" }
  [array]::Reverse($parts)
  $reversedPrefix = [string]::Join(", ", $parts)

  return "$($match.Groups[2].Value -replace '\s+', ''), $($match.Groups[1].Value), $reversedPrefix"
}

function Get-AdminQueries {
  param([string]$Address)

  $roadMatch = [regex]::Match($Address, "([가-힣0-9·\.\-]+(?:대로|로|길))")
  $lotMatch = [regex]::Match($Address, "(산?\s*[0-9]+(?:-[0-9]+)?)")
  $cutIndex = -1

  if ($roadMatch.Success) {
    $cutIndex = $roadMatch.Index
  } elseif ($lotMatch.Success) {
    $cutIndex = $lotMatch.Index
  }

  if ($cutIndex -lt 1) {
    return @()
  }

  $admin = $Address.Substring(0, $cutIndex).Trim()
  if ($admin.Length -eq 0) {
    return @()
  }

  $parts = @($admin -split "\s+" | Where-Object { $_ -ne "" })
  $queries = New-Object System.Collections.Generic.List[string]
  $minimumParts = [Math]::Max(2, $parts.Count - 2)

  for ($count = $parts.Count; $count -ge $minimumParts; $count -= 1) {
    $slice = @($parts[0..($count - 1)])
    $normal = "$([string]::Join(' ', $slice)), 대한민국"
    $reversed = @($slice)
    [array]::Reverse($reversed)
    $reversedQuery = "$([string]::Join(', ', $reversed)), 대한민국"

    foreach ($query in @($normal, $reversedQuery)) {
      if (-not $queries.Contains($query)) {
        $queries.Add($query)
      }
    }
  }

  return $queries
}

function Get-BroadCityQueries {
  param([string]$Address)

  $normalized = Normalize-Address (Remove-Parentheses $Address)
  $provinceMatch = [regex]::Match($normalized, "^(서울특별시|부산광역시|대구광역시|인천광역시|광주광역시|대전광역시|울산광역시|세종특별자치시|경기도|강원특별자치도|강원도|충청북도|충청남도|전북특별자치도|전라북도|전라남도|경상북도|경상남도|제주특별자치도)")
  if (-not $provinceMatch.Success) {
    return @()
  }

  $province = $provinceMatch.Groups[1].Value
  $remainder = $normalized.Substring($provinceMatch.Length).Trim()
  $cityMatch = [regex]::Match($remainder, "^([가-힣]+?(?:시|군|구))")
  if (-not $cityMatch.Success) {
    return @()
  }

  $city = $cityMatch.Groups[1].Value
  return @(
    "$city, $province, 대한민국",
    "$province $city, 대한민국"
  )
}

function Get-GeocodeCandidates {
  param(
    [string]$Name,
    [string]$Address
  )

  $normalized = Normalize-Address $Address
  $withoutParentheses = Remove-Parentheses $normalized
  $broadCityQueries = Get-BroadCityQueries $withoutParentheses
  $adminQueries = Get-AdminQueries $withoutParentheses
  $candidates = New-Object System.Collections.Generic.List[string]

  foreach ($candidate in @(
      $withoutParentheses,
      $normalized,
      (Get-ReversedRoadQuery $withoutParentheses),
      (Get-ReversedLotQuery $withoutParentheses),
      "$Name, $withoutParentheses"
    ) + $adminQueries + $broadCityQueries + @(
      "$Name, 대한민국"
    )) {
    if (-not [string]::IsNullOrWhiteSpace($candidate) -and -not $candidates.Contains($candidate)) {
      $candidates.Add($candidate)
    }
  }

  return $candidates
}

function Invoke-NominatimSearch {
  param([string]$Query)

  $encodedQuery = [System.Uri]::EscapeDataString($Query)
  $uri = "https://nominatim.openstreetmap.org/search?format=jsonv2&countrycodes=kr&limit=1&q=$encodedQuery"
  $headers = @{
    "User-Agent" = "gieokharing-ring1/1.0 (ring1-90x.pages.dev)"
  }

  return Invoke-RestMethod -Uri $uri -Headers $headers -TimeoutSec 20
}

function Convert-ExcelRows {
  param([string]$Path)

  $zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path $Path))
  try {
    [xml]$sharedXml = Read-ZipEntryText $zip "xl/sharedStrings.xml"
    $sharedStrings = @()
    foreach ($sharedString in $sharedXml.sst.si) {
      $sharedStrings += (Get-SharedStringValue $sharedString)
    }

    [xml]$sheetXml = Read-ZipEntryText $zip "xl/worksheets/sheet1.xml"
    $rows = @()
    foreach ($row in $sheetXml.worksheet.sheetData.row) {
      $cells = @{}
      foreach ($cell in $row.c) {
        $cells[(Get-ColumnIndex ([string]$cell.r))] = Get-CellValue $cell $sharedStrings
      }
      $rows += [pscustomobject]@{
        Number = [int]$row.r
        Cells = $cells
      }
    }

    $headerRow = $rows |
      Where-Object { $_.Cells.Values -contains "시설명" -and $_.Cells.Values -contains "소재지" } |
      Select-Object -First 1

    if (-not $headerRow) {
      throw "Could not find the header row in $Path"
    }

    $facilities = New-Object System.Collections.Generic.List[object]
    $index = 0
    foreach ($row in $rows | Where-Object { $_.Number -gt $headerRow.Number }) {
      $name = [string]$row.Cells[1]
      $address = [string]$row.Cells[5]
      if ([string]::IsNullOrWhiteSpace($name) -or [string]::IsNullOrWhiteSpace($address)) {
        continue
      }

      $index += 1
      $facilities.Add([ordered]@{
        id = $index
        name = $name.Trim()
        kind = ([string]$row.Cells[2]).Trim()
        theme = ([string]$row.Cells[3]).Trim()
        year = ([string]$row.Cells[4]).Trim()
        address = $address.Trim()
        manager = ([string]$row.Cells[6]).Trim()
        size = ([string]$row.Cells[7]).Trim()
        description = ([string]$row.Cells[8]).Trim()
        lat = $null
        lon = $null
        geocodeStatus = "pending"
        geocodeQuery = ""
        geocodeDisplayName = ""
      })
    }

    return $facilities
  } finally {
    $zip.Dispose()
  }
}

function Save-Facilities {
  param(
    [object[]]$Facilities,
    [string]$Path
  )

  $payload = [ordered]@{
    source = Split-Path $ExcelPath -Leaf
    generatedAt = (Get-Date).ToString("s")
    total = $Facilities.Count
    facilities = $Facilities
  }

  $directory = Split-Path $Path -Parent
  if ($directory -and -not (Test-Path $directory)) {
    New-Item -ItemType Directory -Path $directory | Out-Null
  }

  $payload | ConvertTo-Json -Depth 8 | Set-Content -Path $Path -Encoding UTF8
}

$facilities = if (Test-Path $ExcelPath) {
  Convert-ExcelRows $ExcelPath
} elseif (Test-Path $OutputPath) {
  $existingPayload = Get-Content -Path $OutputPath -Raw -Encoding UTF8 | ConvertFrom-Json
  $loadedFacilities = New-Object System.Collections.Generic.List[object]
  foreach ($facility in $existingPayload.facilities) {
    $loadedFacilities.Add([ordered]@{
      id = $facility.id
      name = $facility.name
      kind = $facility.kind
      theme = $facility.theme
      year = $facility.year
      address = $facility.address
      manager = $facility.manager
      size = $facility.size
      description = $facility.description
      lat = $facility.lat
      lon = $facility.lon
      geocodeStatus = $facility.geocodeStatus
      geocodeQuery = $facility.geocodeQuery
      geocodeDisplayName = $facility.geocodeDisplayName
    })
  }
  $loadedFacilities
} else {
  throw "Neither ExcelPath nor OutputPath exists."
}
$geocodeCache = @{}

if (Test-Path $OutputPath) {
  try {
    $existing = Get-Content -Path $OutputPath -Raw -Encoding UTF8 | ConvertFrom-Json
    $existingByKey = @{}
    foreach ($facility in $existing.facilities) {
      $existingByKey["$($facility.name)|$($facility.address)"] = $facility
    }

    foreach ($facility in $facilities) {
      $key = "$($facility.name)|$($facility.address)"
      if ($existingByKey.ContainsKey($key)) {
        $old = $existingByKey[$key]
        $facility.lat = $old.lat
        $facility.lon = $old.lon
        $facility.geocodeStatus = $old.geocodeStatus
        $facility.geocodeQuery = $old.geocodeQuery
        $facility.geocodeDisplayName = $old.geocodeDisplayName
      }
    }
  } catch {
    Write-Warning "Existing output could not be reused: $($_.Exception.Message)"
  }
}

$end = $facilities.Count
if ($Limit -gt 0) {
  $end = [Math]::Min($facilities.Count, $Start + $Limit)
}

if (-not $SkipGeocode) {
  for ($index = $Start; $index -lt $end; $index += 1) {
    $facility = $facilities[$index]
    if ($facility.lat -ne $null -and $facility.lon -ne $null) {
      continue
    }

    $facility.geocodeStatus = "not_found"
    $broadCityQueries = Get-BroadCityQueries $facility.address
    $adminQueries = Get-AdminQueries (Remove-Parentheses (Normalize-Address $facility.address))
    $queries = if ($ApproxOnly) {
      $broadQueries = @($broadCityQueries | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })
      if ($broadQueries.Count -gt 0) {
        $broadQueries
      } elseif (@($adminQueries).Count -gt 2) {
        @($adminQueries | Select-Object -Last 2)
      } else {
        $adminQueries
      }
    } else {
      Get-GeocodeCandidates $facility.name $facility.address
    }

    foreach ($query in $queries) {
      Write-Host "[$($index + 1)/$($facilities.Count)] $($facility.name) :: $query"
      try {
        if ($geocodeCache.ContainsKey($query)) {
          $result = $geocodeCache[$query]
        } else {
          $result = Invoke-NominatimSearch $query
          $geocodeCache[$query] = $result
          Start-Sleep -Milliseconds 1100
        }
      } catch {
        $facility.geocodeStatus = "error"
        $facility.geocodeQuery = $query
        Write-Warning $_.Exception.Message
        Start-Sleep -Milliseconds 1800
        continue
      }

      if ($result -and $result.Count -gt 0) {
        $match = $result[0]
        $facility.lat = [double]::Parse([string]$match.lat, [Globalization.CultureInfo]::InvariantCulture)
        $facility.lon = [double]::Parse([string]$match.lon, [Globalization.CultureInfo]::InvariantCulture)
        $facility.geocodeStatus = if (($adminQueries -contains $query) -or ($broadCityQueries -contains $query)) { "approx" } else { "ok" }
        $facility.geocodeQuery = $query
        $facility.geocodeDisplayName = [string]$match.display_name
        break
      }
    }

    Save-Facilities $facilities $OutputPath
  }
}

Save-Facilities $facilities $OutputPath

$okCount = ($facilities | Where-Object { $_.lat -ne $null -and $_.lon -ne $null }).Count
$failedCount = $facilities.Count - $okCount
Write-Host "saved: $OutputPath"
Write-Host "total: $($facilities.Count)"
Write-Host "geocoded: $okCount"
Write-Host "missing: $failedCount"











