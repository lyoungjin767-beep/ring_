const quizQuestions = [
  {
    level: 1,
    question: "윤동주의 출생지로 옳은 것은?",
    choices: ["평안남도 평양", "함경북도 회령", "북간도 명동촌", "경기도 수원", "중국 상하이"],
    answer: 2,
    explanation: "정답은 북간도 명동촌입니다. 윤동주는 북간도 명동촌에서 태어났습니다.",
  },
  {
    level: 1,
    question: "윤동주가 재학하며 문학 활동을 했던 학교는?",
    choices: ["배재학당", "오산학교", "숭실학교", "연희전문학교", "대성학교"],
    answer: 3,
    explanation: "정답은 연희전문학교입니다. 윤동주는 연희전문학교 시절 문학 활동을 이어갔습니다.",
  },
  {
    level: 1,
    question: "윤동주의 생애에 대한 설명으로 옳은 것은?",
    choices: [
      "의열단을 조직하였다.",
      "조선어 학회 사건으로 체포되었다.",
      "중국에서 한국광복군에 참여하였다.",
      "일본 유학 중 독립운동 혐의로 체포되었다.",
      "광복 이후 친일 문학을 비판하였다.",
    ],
    answer: 3,
    explanation: "정답은 일본 유학 중 독립운동 혐의로 체포되었다입니다.",
  },
  {
    level: 1,
    question: "윤동주가 일본 유학 당시 사용해야 했던 일본식 이름은?",
    choices: ["가네다 류슈", "히라누마 도주", "마쓰모토 준페이", "다카하시 쇼", "모리카와 기요시"],
    answer: 1,
    explanation: "정답은 히라누마 도주입니다. 창씨개명으로 사용해야 했던 이름입니다.",
  },
  {
    level: 1,
    question: "윤동주의 시 「서시」에 나타난 삶의 태도로 가장 적절한 것은?",
    choices: [
      "현실과 타협하여 안정을 추구하려는 태도",
      "과거의 영광을 되찾으려는 영웅적 태도",
      "부끄러움 없이 양심적으로 살려는 태도",
      "자연으로 돌아가 현실을 외면하려는 태도",
      "무력으로 식민 통치에 저항하려는 태도",
    ],
    answer: 2,
    explanation: "정답은 부끄러움 없이 양심적으로 살려는 태도입니다.",
  },
  {
    level: 2,
    question: "1920년 6월, 만주 봉오동 골짜기에서 일본군을 대파한 전투는 무엇일까요?",
    choices: ["청산리 대첩", "봉오동 전투", "대전자령 전투", "쌍성보 전투"],
    answer: 1,
    explanation: "정답은 봉오동 전투입니다. 홍범도 장군이 이끄는 대한독립군 연합부대의 첫 대규모 승리입니다.",
  },
  {
    level: 2,
    question: "봉오동 전투를 이끈 중심 무장 독립운동 단체는 무엇일까요?",
    choices: ["대한독립군", "조선의용대", "한국광복군", "조선의용군"],
    answer: 0,
    explanation: "정답은 대한독립군입니다. 홍범도 장군을 중심으로 만주에서 결성된 무장 독립군 부대입니다.",
  },
  {
    level: 2,
    question: "봉오동 전투 이후 일제가 만주 지역 한국인들을 학살한 비극적 사건은 무엇일까요?",
    choices: ["간도 참변", "제암리 학살 사건", "105인 사건", "거문도 사건"],
    answer: 0,
    explanation: "정답은 간도 참변입니다. 1920년 일제가 간도 지역 한인 마을을 습격해 학살을 저지른 사건입니다.",
  },
  {
    level: 2,
    question: "독립군 부대들이 러시아 자유시로 이동했다가 큰 피해를 입은 사건은 무엇일까요?",
    choices: ["자유시 참변", "간도 참변", "신간회 해소", "삼원보 참변"],
    answer: 0,
    explanation: "정답은 자유시 참변입니다. 독립군 통합 과정에서 무장 해제를 당하며 일어난 비극입니다.",
  },
  {
    level: 2,
    question: "봉오동 전투 당시 독립군 부대를 구성했던 주요 인물들의 전직 배경으로 옳지 않은 것은?",
    choices: ["포수", "농민", "노동자", "일본군 장교"],
    answer: 3,
    explanation: "정답은 일본군 장교입니다. 산포수, 농민, 노동자 등 민중 출신이 주축이었습니다.",
  },
  {
    level: 3,
    question: "1920년 10월, 백두산 자락에서 독립군 역사상 최대 승리를 거둔 전투는 무엇일까요?",
    choices: ["봉오동 전투", "청산리 대첩", "대전자령 전투", "영릉가 전투"],
    answer: 1,
    explanation: "정답은 청산리 대첩입니다. 김좌진과 홍범도 등이 연합하여 거둔 대승입니다.",
  },
  {
    level: 3,
    question: "청산리 대첩을 주도한 북로군정서의 사상적 바탕이 되었던 종교는 무엇일까요?",
    choices: ["대종교", "천도교", "불교", "개신교"],
    answer: 0,
    explanation: "정답은 대종교입니다. 대종교는 만주 지역 무장 독립운동의 중심 역할을 했습니다.",
  },
  {
    level: 3,
    question: "만주 신민부에서 독립군 간부를 양성하기 위해 세운 전문 사관 교육 기관은?",
    choices: ["신흥무관학교", "사관연성소", "서북군관학교", "한국광복군 훈련소"],
    answer: 1,
    explanation: "정답은 사관연성소입니다. 김좌진 장군이 독립군 정예화를 위해 세운 사관학교입니다.",
  },
  {
    level: 3,
    question: "1920년대 만주 지역 독립운동 단체들이 정비한 3부에 해당하지 않는 것은?",
    choices: ["참의부", "정의부", "신민부", "한인애국부"],
    answer: 3,
    explanation: "정답은 한인애국부입니다. 3부는 참의부, 정의부, 신민부입니다.",
  },
  {
    level: 3,
    question: "북로군정서가 청산리 대첩 당시 사용한 주요 무기의 구입처는 어디였을까요?",
    choices: ["체코 군단", "일본군 재고품", "청나라 조정", "미군 물자"],
    answer: 0,
    explanation: "정답은 체코 군단입니다. 철수하던 체코 군단으로부터 무기를 구입했습니다.",
  },
  {
    level: 4,
    question: "1907년 결성되어 한국 역사상 최초로 공화정 수립을 목표로 한 비밀결사는?",
    choices: ["독립협회", "신민회", "신간회", "근우회"],
    answer: 1,
    explanation: "정답은 신민회입니다. 안창호, 양기탁 등이 중심이 된 애국계몽 단체입니다.",
  },
  {
    level: 4,
    question: "신민회가 민족 산업 육성과 독립운동 자금 마련을 위해 설립한 대표 기업은?",
    choices: ["평양 자기회사", "동양척식주식회사", "경성방직", "유한양행"],
    answer: 0,
    explanation: "정답은 평양 자기회사입니다. 태극서관 등과 함께 민족 자본 육성을 꾀했습니다.",
  },
  {
    level: 4,
    question: "1913년 미국 샌프란시스코에서 창립되어 민족 자립을 강조한 단체는?",
    choices: ["흥사단", "신한청년당", "한인애국단", "의열단"],
    answer: 0,
    explanation: "정답은 흥사단입니다. 도산 안창호 선생이 민족의 실력 양성을 위해 설립했습니다.",
  },
  {
    level: 4,
    question: "신민회가 평양에 세운 민족 교육 기관으로 인재 양성의 요람이었던 학교는?",
    choices: ["대성학교", "배재학당", "이화학당", "오산학교"],
    answer: 0,
    explanation: "정답은 대성학교입니다. 안창호 선생이 민족 의식을 고취하기 위해 설립했습니다.",
  },
  {
    level: 4,
    question: "1911년 일제가 신민회를 해체시키기 위해 지도자들을 날조 체포한 사건은?",
    choices: ["105인 사건", "간도 참변", "제암리 학살 사건", "조봉암 사건"],
    answer: 0,
    explanation: "정답은 105인 사건입니다. 신민회 간부들이 억울하게 유죄 판결을 받은 사건입니다.",
  },
  {
    level: 5,
    question: "윤동주와 함께 일본 경찰에 체포되었으며 그의 고종사촌이자 독립운동가였던 인물은?",
    choices: ["송몽규", "문익환", "장준하", "이상화", "심훈"],
    answer: 0,
    explanation: "정답은 송몽규입니다. 윤동주의 고종사촌이자 함께 체포된 독립운동가입니다.",
  },
  {
    level: 5,
    question: "윤동주의 친필 원고를 보관하여 광복 이후 시집 출간을 가능하게 한 인물은?",
    choices: ["정지용", "이광수", "정병욱", "최남선", "김소월"],
    answer: 2,
    explanation: "정답은 정병욱입니다. 윤동주의 친필 원고를 보관해 시집 출간에 중요한 역할을 했습니다.",
  },
  {
    level: 5,
    question: "윤동주의 시집 『하늘과 바람과 별과 시』가 처음 출간된 시기로 옳은 것은?",
    choices: ["대한 제국 시기", "일제강점기", "광복 이후", "6·25 전쟁 중", "4·19 혁명 이후"],
    answer: 2,
    explanation: "정답은 광복 이후입니다. 윤동주의 시집은 광복 이후 출간되었습니다.",
  },
  {
    level: 5,
    question: "다음 중 윤동주의 시에 등장하는 소재와 가장 거리가 먼 것은?",
    choices: ["별", "하늘", "바람", "거울", "증기 기관차의 발전"],
    answer: 4,
    explanation: "정답은 증기 기관차의 발전입니다. 윤동주의 시 세계와 가장 거리가 먼 소재입니다.",
  },
  {
    level: 5,
    question: "윤동주가 사망한 시점에 대한 설명으로 옳은 것은?",
    choices: [
      "3·1 운동 직전에 사망하였다.",
      "대한민국 임시정부 수립 직후 사망하였다.",
      "광복을 약 6개월 앞두고 옥중에서 사망하였다.",
      "6·25 전쟁 중 피란길에서 사망하였다.",
      "광복 이후 귀국하여 문학 활동을 하다가 사망하였다.",
    ],
    answer: 2,
    explanation: "정답은 광복을 약 6개월 앞두고 옥중에서 사망하였다입니다.",
  },
];

const yunBonggilQuizQuestions = [
  {
    level: 1,
    question: "윤봉길 의사가 중국으로 망명하기 전 농촌 계몽을 위해 조직한 단체는?",
    choices: ["신민회", "월진회", "근우회", "조선어 학회", "조선 민립 대학 기성회"],
    answer: 1,
    explanation: "정답은 월진회입니다. 윤봉길 의사는 농촌 계몽과 문맹 퇴치를 위해 월진회를 조직했습니다.",
  },
  {
    level: 1,
    question: "윤봉길 의사가 농민들의 문맹 퇴치를 위해 저술한 교재는?",
    choices: ["독사신론", "조선혁명선언", "농민독본", "한국통사", "유년필독"],
    answer: 2,
    explanation: "정답은 농민독본입니다. 농민 교육과 문맹 퇴치를 위해 저술한 교재입니다.",
  },
  {
    level: 1,
    question: "윤봉길 의사가 한인 애국단에 가입할 당시 사용한 이름은?",
    choices: ["윤우의", "윤치호", "윤세주", "윤동주", "윤희순"],
    answer: 0,
    explanation: "정답은 윤우의입니다. 윤봉길 의사는 한인애국단 가입 당시 윤우의라는 이름을 사용했습니다.",
  },
  {
    level: 1,
    question: "윤봉길 의사의 훙커우 공원 의거로 중상을 입은 일본군 장성은?",
    choices: ["미우라 고로", "시라카와 요시노리", "데라우치 마사타케", "미나미 지로", "하세가와 요시미치"],
    answer: 1,
    explanation: "정답은 시라카와 요시노리입니다. 훙커우 공원 의거로 중상을 입었습니다.",
  },
  {
    level: 1,
    question: "윤봉길 의사의 훙커우 공원 의거 이후 나타난 영향으로 가장 적절한 것은?",
    choices: [
      "대한민국 임시 정부가 충칭에서 처음 수립되었다.",
      "중국 국민당 정부가 대한민국 임시 정부를 적극 지원하는 계기가 되었다.",
      "조선 총독부가 문화 통치를 처음 시행하였다.",
      "일제가 회사령을 폐지하였다.",
      "한국광복군이 즉시 국내 진공 작전을 실시하였다.",
    ],
    answer: 1,
    explanation: "정답은 중국 국민당 정부가 대한민국 임시 정부를 적극 지원하는 계기가 되었다입니다.",
  },
  {
    level: 2,
    question: "1926년 일제의 대표적 경제 수탈 기관인 동양척식주식회사와 식산은행에 폭탄을 던진 인물은 누구일까요?",
    choices: ["나석주", "김상옥", "윤봉길", "이봉창"],
    answer: 0,
    explanation: "정답은 나석주입니다. 의열단원으로서 일제의 경제 수탈 심장부에 폭탄을 투척했습니다.",
  },
  {
    level: 2,
    question: "나석주 의사가 공격한 동양척식주식회사의 주된 수탈 행위는 무엇이었을까요?",
    choices: ["동양 최대의 토지 수탈 및 소작료 수탈", "우리말 사용 금지", "강제 징용 지휘", "역사책 불태우기"],
    answer: 0,
    explanation: "정답은 동양 최대의 토지 수탈 및 소작료 수탈입니다. 빼앗은 토지를 관리하며 한국 농민들을 수탈했습니다.",
  },
  {
    level: 2,
    question: "나석주 의사가 중국에서 입학하여 군사 훈련을 받고 졸업한 대표적인 독립군 양성 학교는 어디일까요?",
    choices: ["신흥무관학교", "대성학교", "오산학교", "배재학당"],
    answer: 0,
    explanation: "정답은 신흥무관학교입니다. 졸업 후 만주와 중국 본토에서 항일 투쟁에 나섰습니다.",
  },
  {
    level: 2,
    question: "나석주 의사가 대한민국 임시정부에서 맡았던 직책은 무엇일까요?",
    choices: ["경무국 경호원", "총사령관", "외무총장", "의정원 의장"],
    answer: 0,
    explanation: "정답은 경무국 경호원입니다. 김구 선생 아래서 임시정부 경무국 경호원으로 활동했습니다.",
  },
  {
    level: 2,
    question: "나석주 의사가 동양척식주식회사에 투척한 폭탄이 불발되자 취한 연속 행동은 무엇일까요?",
    choices: ["권총으로 식산은행과 동양척식주식회사 간부들을 사살함", "즉시 중국으로 도망침", "현장에서 항복함", "식민지 법원에 항의서를 제출함"],
    answer: 0,
    explanation: "정답은 권총으로 식산은행과 동양척식주식회사 간부들을 사살함입니다.",
  },
  {
    level: 3,
    question: "1927년 민족주의 계열과 사회주의 계열이 합작하여 결성한 일제강점기 최대 규모의 합법적 항일 단체는 무엇일까요?",
    choices: ["신간회", "신민회", "독립협회", "진단학회"],
    answer: 0,
    explanation: "정답은 신간회입니다. 좌우 합작을 통해 결성된 국내 최대의 항일 민족 협동 전선입니다.",
  },
  {
    level: 3,
    question: "신간회의 자매 단체로, 여성의 권리 신장과 항일 투쟁을 위해 결성된 조직은 무엇일까요?",
    choices: ["근우회", "정우회", "유관순열사회", "한국여성동맹"],
    answer: 0,
    explanation: "정답은 근우회입니다. 신간회와 연계하여 여성 운동과 독립운동을 펼친 단체입니다.",
  },
  {
    level: 3,
    question: "1929년 신간회가 진상조사단을 파견하고 민중대회를 기획하며 적극 지원한 운동은 무엇일까요?",
    choices: ["광주 학생 항일 운동", "6·10 만세 운동", "물산장려운동", "민립대학 설립운동"],
    answer: 0,
    explanation: "정답은 광주 학생 항일 운동입니다. 광주에서 시작된 학생 운동이 전국으로 확산되도록 지원했습니다.",
  },
  {
    level: 3,
    question: "독립운동가들을 위해 법정에서 무료로 변호를 맡았던 가인 김병로 선생이 광복 후 맡은 초대 관직은 무엇일까요?",
    choices: ["초대 대법원장", "초대 대통령", "초대 국무총리", "초대 국회의장"],
    answer: 0,
    explanation: "정답은 초대 대법원장입니다. 대한민국 사법부의 기틀을 다졌습니다.",
  },
  {
    level: 3,
    question: "신간회가 내걸었던 3대 강령에 포함되지 않는 내용은 무엇일까요?",
    choices: ["민족의 단결을 도모함", "정치적·경제적 자각을 촉진함", "기회주의를 부인함", "일왕에게 충성을 다함"],
    answer: 3,
    explanation: "정답은 일왕에게 충성을 다함입니다. 신간회는 기회주의를 배격하고 민족의 단결과 자각을 도모했습니다.",
  },
  {
    level: 4,
    question: "1914년 연해주에서 이상설, 이동휘 등이 중심이 되어 결성한 최초의 무장 독립운동 정부 조직은 무엇일까요?",
    choices: ["대한광복군정부", "대한민국 임시정부", "한성정부", "대한국민의회"],
    answer: 0,
    explanation: "정답은 대한광복군정부입니다. 연해주에 세워진 최초의 망명 정부 형태의 무장 독립운동 조직입니다.",
  },
  {
    level: 4,
    question: "1918년 러시아 하바롭스크에서 이동휘 등이 중심이 되어 만든 한국 최초의 사회주의 정당은 무엇일까요?",
    choices: ["한인사회당", "조선공산당", "남조선노동당", "동로당"],
    answer: 0,
    explanation: "정답은 한인사회당입니다. 러시아 지역 한인 독립운동가들이 결성한 최초의 사회주의 정당입니다.",
  },
  {
    level: 4,
    question: "1919년 상하이 대한민국 임시정부가 발족할 때 초대 국무총리로 취임한 인물은 누구일까요?",
    choices: ["이동휘", "이승만", "김구", "안창호"],
    answer: 0,
    explanation: "정답은 이동휘입니다. 무장 투쟁파의 대표격으로 임시정부의 초대 국무총리로 취임했습니다.",
  },
  {
    level: 4,
    question: "이동휘 등이 중심이 되어 함경도와 강화도 일대에서 민족 교육을 펼친 대표적인 학교는 어디일까요?",
    choices: ["보창학교", "대성학교", "신흥학교", "배재학당"],
    answer: 0,
    explanation: "정답은 보창학교입니다. 이동휘 선생이 세워 인재를 양성하고 민족 의식을 심어준 학교입니다.",
  },
  {
    level: 4,
    question: "임시정부 초기 무장 투쟁을 강조하는 파와 외교 중심 활동을 강조하는 파 사이에 벌어진 갈등 노선은 무엇일까요?",
    choices: ["무장투쟁론 vs 외교독립론", "왕정복고론 vs 공화정수립론", "한글보급론 vs 한문교육론", "수도이전론 vs 현상유지론"],
    answer: 0,
    explanation: "정답은 무장투쟁론 vs 외교독립론입니다. 독립운동 방법을 둘러싼 노선 갈등입니다.",
  },
  {
    level: 5,
    question: "1919년 대한민국 임시정부 성립 당시 초대 임시대통령으로 선출된 인물은 누구일까요?",
    choices: ["이승만", "김구", "박은식", "안창호"],
    answer: 0,
    explanation: "정답은 이승만입니다. 미국에서 외교 활동을 펼치던 이승만이 초대 임시대통령으로 선출되었습니다.",
  },
  {
    level: 5,
    question: "대한민국 임시정부가 미국 워싱턴 D.C.에 설치하여 미주 지역 외교와 자금 모금을 담당하게 한 기구는 무엇일까요?",
    choices: ["구미위원부", "파리위원부", "주미 한국대사관", "한인합동회"],
    answer: 0,
    explanation: "정답은 구미위원부입니다. 미국과 서구 강대국을 상대로 외교 독립운동을 펼친 임시정부 외교 기관입니다.",
  },
  {
    level: 5,
    question: "이승만 등이 미주 지역에서 주창했던 독립운동의 주된 방법은 무엇일까요?",
    choices: ["외교독립론", "무장투쟁론", "의열투쟁론", "농촌계몽론"],
    answer: 0,
    explanation: "정답은 외교독립론입니다. 강대국의 외교적 지원과 국제연맹을 통해 독립을 이루고자 했습니다.",
  },
  {
    level: 5,
    question: "1925년 임시정부 의정원이 이승만 대통령을 탄핵하게 된 결정적 원인이 된 청원서는 무엇일까요?",
    choices: ["위임통치 청원서", "파리 강화 회의 독립청원서", "2·8 독립선언서", "파리장서"],
    answer: 0,
    explanation: "정답은 위임통치 청원서입니다. 국제연맹에 한국 위임통치를 청원한 사실이 밝혀져 탄핵되었습니다.",
  },
  {
    level: 5,
    question: "서재필, 이승만 등이 청년 시절 활동하며 만민공동회를 개최했던 애국계몽 단체는 무엇일까요?",
    choices: ["독립협회", "신민회", "신간회", "동학"],
    answer: 0,
    explanation: "정답은 독립협회입니다. 독립문 건립과 만민공동회를 통해 민권 운동과 자주독립 운동을 펼쳤습니다.",
  },
];

const yuGwanSunQuizQuestions = [
  {
    level: 1,
    question: "유관순이 서울에서 다닌 학교로 옳은 것은?",
    choices: ["배재학당", "이화학당", "경신학교", "오산학교", "숭실학교"],
    answer: 1,
    explanation: "정답은 이화학당입니다. 유관순은 서울에서 이화학당에 다녔습니다.",
  },
  {
    level: 1,
    question: "유관순이 고향으로 돌아가 만세 운동을 준비하게 된 직접적인 배경은?",
    choices: [
      "일제가 민족 학교를 모두 폐쇄했기 때문에",
      "고종의 국장이 취소되었기 때문에",
      "3·1 운동 이후 일제가 학교에 휴교령을 내렸기 때문에",
      "대한민국 임시 정부가 학생들을 소집했기 때문에",
      "대한광복회가 국내 활동을 지시했기 때문에",
    ],
    answer: 2,
    explanation: "정답은 3·1 운동 이후 일제가 학교에 휴교령을 내렸기 때문에입니다.",
  },
  {
    level: 1,
    question: "유관순이 만세 운동을 주도한 아우내 장터가 위치한 현재의 지역은?",
    choices: ["충청남도 천안시", "충청북도 제천시", "전라북도 익산시", "경기도 수원시", "황해도 해주시"],
    answer: 0,
    explanation: "정답은 충청남도 천안시입니다. 아우내 장터는 현재 충청남도 천안시에 있습니다.",
  },
  {
    level: 1,
    question: "아우내 장터 만세 운동이 전개된 날짜로 옳은 것은?",
    choices: ["1919년 2월 8일", "1919년 3월 1일", "1919년 4월 1일", "1919년 4월 11일", "1919년 9월 2일"],
    answer: 2,
    explanation: "정답은 1919년 4월 1일입니다. 이날 아우내 장터 만세 운동이 전개되었습니다.",
  },
  {
    level: 1,
    question: "체포된 유관순이 재판에서 받은 형량과 관련하여 옳은 것은?",
    choices: [
      "항소를 거쳐 형량이 3년으로 줄어들었다.",
      "무죄를 선고받고 즉시 석방되었다.",
      "사형을 선고받은 뒤 무기징역으로 감형되었다.",
      "재판 없이 중국으로 강제 추방되었다.",
      "집행 유예를 선고받아 고향으로 돌아갔다.",
    ],
    answer: 0,
    explanation: "정답은 항소를 거쳐 형량이 3년으로 줄어들었다입니다.",
  },
  {
    level: 2,
    question: "1930년대 만주에서 지청천 장군이 이끄는 한국독립군이 중국 호로군과 연합하여 일제를 대파한 전투는 무엇일까요?",
    choices: ["대전자령 전투", "봉오동 전투", "인천상륙작전", "행주대첩"],
    answer: 0,
    explanation: "정답은 대전자령 전투입니다. 한·중 연합 작전으로 일본군의 물자를 대량 포획하고 대승을 거두었습니다.",
  },
  {
    level: 2,
    question: "1930년대 만주에서 독립군과 중국군이 연합 작전을 펼칠 수 있었던 결정적 계기는 무엇일까요?",
    choices: ["일제의 만주 침략", "3·1 운동 발생", "카이로 회담 개최", "8·15 광복"],
    answer: 0,
    explanation: "정답은 일제의 만주 침략입니다. 1931년 만주사변 이후 한·중 연합군이 형성되었습니다.",
  },
  {
    level: 2,
    question: "만주 지역의 독립군 간부를 양성하기 위해 세워져 수많은 독립군 장교를 배출한 학교는 어디일까요?",
    choices: ["신흥무관학교", "연희전문학교", "보성전문학교", "경성제국대학"],
    answer: 0,
    explanation: "정답은 신흥무관학교입니다. 이회영, 이상룡 등이 삼원보에 세운 대표적인 무장 독립군 양성 기관입니다.",
  },
  {
    level: 2,
    question: "1940년 한국광복군 창설 당시 총사령관을 맡아 부대를 이끈 독립운동가는 누구일까요?",
    choices: ["지청천", "김좌진", "홍범도", "안중근"],
    answer: 0,
    explanation: "정답은 지청천입니다. 만주 무장 투쟁 경험을 바탕으로 한국광복군 총사령관이 되었습니다.",
  },
  {
    level: 2,
    question: "한국독립군과 함께 1930년대 만주 혁명군을 이끌며 영릉가 전투에서 승리한 부대는 무엇일까요?",
    choices: ["조선혁명군", "대한독립군", "북로군정서", "한국광복군"],
    answer: 0,
    explanation: "정답은 조선혁명군입니다. 양세봉 장군이 이끄는 조선혁명군이 중국 의용군과 연합하여 승리했습니다.",
  },
  {
    level: 3,
    question: "이회영 6형제를 비롯한 독립운동가들이 전 재산을 바쳐 만주 유하현에 세운 독립운동 기지의 이름은 무엇일까요?",
    choices: ["삼원보", "용정", "연길", "하얼빈"],
    answer: 0,
    explanation: "정답은 삼원보입니다. 경학사와 신흥강습소가 들어선 독립운동 기지입니다.",
  },
  {
    level: 3,
    question: "삼원보에 설립되어 봉오동·청산리 전투와 의열단 활동의 주역들을 배출한 독립군 양성 학교는 어디일까요?",
    choices: ["신흥무관학교", "대성학교", "오산학교", "배재학당"],
    answer: 0,
    explanation: "정답은 신흥무관학교입니다. 무장 독립운동의 요람으로 많은 독립군을 배출했습니다.",
  },
  {
    level: 3,
    question: "이회영 선생 일가처럼 높은 사회적 신분과 재산을 가진 사람들이 솔선수범하여 도덕적 의무를 다하는 것을 뜻하는 용어는 무엇일까요?",
    choices: ["노블레스 오블리주", "페어플레이", "아나키즘", "민족자결주의"],
    answer: 0,
    explanation: "정답은 노블레스 오블리주입니다. 전 재산을 바쳐 독립운동에 헌신한 대표적 사례입니다.",
  },
  {
    level: 3,
    question: "1920년대 이회영 선생 등이 심취하여 민중의 자발적 결사와 폭력 투쟁을 지지했던 사상은 무엇일까요?",
    choices: ["무정부주의", "절대왕정론", "친일 타협론", "입헌군주제"],
    answer: 0,
    explanation: "정답은 무정부주의입니다. 아나키스트 단체를 조직하여 의열 투쟁을 지원했습니다.",
  },
  {
    level: 3,
    question: "신흥무관학교 학생들이 군가로 부르며 독립 의지를 다졌던 대표적인 노래는 무엇일까요?",
    choices: ["신흥무관학교가", "애국가", "봉오동 승전가", "광복군가"],
    answer: 0,
    explanation: "정답은 신흥무관학교가입니다. 독립 정신을 고취한 대표적인 군가입니다.",
  },
  {
    level: 4,
    question: "1922년 한국인 최초로 고국 방문 비행 시범을 보여 겨레에게 큰 자부심과 희망을 준 비행사는 누구일까요?",
    choices: ["안창남", "안창호", "김경오", "신성모"],
    answer: 0,
    explanation: "정답은 안창남입니다. 한국인 최초의 비행사로 여의도 백사장에서 고국 방문 비행을 펼쳤습니다.",
  },
  {
    level: 4,
    question: "안창남 비행사가 고국 방문 비행 시범을 선보일 때 탑승했던 비행기의 이름은 무엇일까요?",
    choices: ["금강호", "한라호", "조선호", "광복호"],
    answer: 0,
    explanation: "정답은 금강호입니다. 한반도 지도 기호를 새긴 금강호를 타고 하늘을 날았습니다.",
  },
  {
    level: 4,
    question: "안창남의 비행 시범이 열렸던 당시 서울의 대표적인 장소는 어디일까요?",
    choices: ["여의도 백사장", "종로 광장", "동대문 운동장", "남산 공원"],
    answer: 0,
    explanation: "정답은 여의도 백사장입니다. 당시 여의도는 비행 시범 장소로 사용되었습니다.",
  },
  {
    level: 4,
    question: "안창남 비행사가 이후 중국으로 건너가 비행관으로 활동하며 준비하고자 했던 분야는 무엇일까요?",
    choices: ["독립군 항공 부대 양성", "외교 청원서 배포", "비밀 신문 출판", "농촌 야학 운동"],
    answer: 0,
    explanation: "정답은 독립군 항공 부대 양성입니다. 독립군 공군 창설을 꿈꿨습니다.",
  },
  {
    level: 4,
    question: "안창남의 고국 방문 비행이 당시 한국 사회에 가져온 문화적 현상으로 옳은 것은 무엇일까요?",
    choices: ["안창남 모자와 비행기 장난감이 대유행함", "모든 학교에 비행학과가 신설됨", "일제가 즉시 비행기 운항을 금지함", "여의도가 국제공항으로 지정됨"],
    answer: 0,
    explanation: "정답은 안창남 모자와 비행기 장난감이 대유행함입니다. 안창남 열풍이 큰 인기를 끌었습니다.",
  },
  {
    level: 5,
    question: "1923년 1월, 일제 탄압의 상징이었던 서울 한복판의 종로경찰서에 폭탄을 던진 의열단원은 누구일까요?",
    choices: ["김상옥", "윤봉길", "이봉창", "강우규"],
    answer: 0,
    explanation: "정답은 김상옥입니다. 종로경찰서에 폭탄을 던져 식민 통치 기관에 타격을 주었습니다.",
  },
  {
    level: 5,
    question: "김상옥 의사가 서울 효제동에서 수백 명의 일본 경찰에 맞서 홀로 권총 격전을 벌인 사건은 무엇일까요?",
    choices: ["효제동 시가 총격전", "서울역 거사", "홍커우 공원 의거", "동양척식주식회사 사건"],
    answer: 0,
    explanation: "정답은 효제동 시가 총격전입니다. 수백 명의 일경에 맞서 치열한 총격전을 벌였습니다.",
  },
  {
    level: 5,
    question: "김상옥 의사가 총격전 끝에 마지막 남은 탄환 한 발로 선택한 결말은 무엇일까요?",
    choices: ["자결", "항복", "일본 총독 처단", "만주 탈출"],
    answer: 0,
    explanation: "정답은 자결입니다. 일경의 손에 잡히지 않겠다는 결의로 순국했습니다.",
  },
  {
    level: 5,
    question: "김상옥 의사가 청년 시절 서울에서 결성하여 비밀 신문을 발행하고 항일 활동을 펼친 단체는 무엇일까요?",
    choices: ["혁신단", "신민회", "한인애국단", "조선물산장려회"],
    answer: 0,
    explanation: "정답은 혁신단입니다. 비밀 신문 혁신공보를 발행하여 민족 의식을 고취했습니다.",
  },
  {
    level: 5,
    question: "일제강점기 종로경찰서가 민중들에게 유독 공포의 대상이었던 이유는 무엇일까요?",
    choices: ["독립운동가들을 체포하고 가혹하게 고문하던 중심 기관이었기 때문", "세금을 거두는 재정 기관이었기 때문", "법원을 겸하던 재판소였기 때문", "군인들을 입대시키는 병무청이었기 때문"],
    answer: 0,
    explanation: "정답은 독립운동가들을 체포하고 가혹하게 고문하던 중심 기관이었기 때문입니다.",
  },
];

const ahnJunggeunQuizQuestions = [
  {
    level: 1,
    question: "안중근 의사가 동지들과 함께 손가락을 잘라 결성한 단체는?",
    choices: ["신민회", "단지동맹", "대한광복회", "한인 애국단", "조선국권회복단"],
    answer: 1,
    explanation: "정답은 단지동맹입니다. 안중근 의사는 동지들과 손가락을 잘라 독립 의지를 다졌습니다.",
  },
  {
    level: 1,
    question: "안중근 의사가 이토 히로부미를 처단한 장소는?",
    choices: ["상하이 훙커우 공원", "도쿄 황궁 앞", "하얼빈역", "서울 남산", "블라디보스토크역"],
    answer: 2,
    explanation: "정답은 하얼빈역입니다. 안중근 의사는 하얼빈역에서 이토 히로부미를 처단했습니다.",
  },
  {
    level: 1,
    question: "안중근 의사가 옥중에서 집필하려 했으나 완성하지 못한 저서는?",
    choices: ["한국통사", "조선혁명선언", "동양평화론", "독사신론", "유교구신론"],
    answer: 2,
    explanation: "정답은 동양평화론입니다. 옥중에서 집필하려 했으나 완성하지 못했습니다.",
  },
  {
    level: 1,
    question: "안중근 의사가 재판에서 자신의 행동을 단순한 살인이 아닌 전쟁 행위라고 주장한 근거는?",
    choices: [
      "대한제국의 외교관 자격으로 활동했기 때문에",
      "천주교 선교사의 명령을 받았기 때문에",
      "대한의군 참모중장 자격으로 적장을 처단했기 때문에",
      "러시아 정부의 군사 지원을 받았기 때문에",
      "대한민국 임시 정부의 공식 명령을 받았기 때문에",
    ],
    answer: 2,
    explanation: "정답은 대한의군 참모중장 자격으로 적장을 처단했기 때문입니다.",
  },
  {
    level: 1,
    question: "안중근 의사가 순국한 장소로 옳은 것은?",
    choices: ["서대문형무소", "뤼순감옥", "마포형무소", "경성감옥", "평양감옥"],
    answer: 1,
    explanation: "정답은 뤼순감옥입니다. 안중근 의사는 뤼순감옥에서 순국했습니다.",
  },
  {
    level: 2,
    question: "1919년 1차 세계대전 직후 열린 파리 강화 회의에 한국 대표로 파견되어 독립 청원서를 제출한 인물은 누구일까요?",
    choices: ["김규식", "이승만", "김구", "여운형"],
    answer: 0,
    explanation: "정답은 김규식입니다. 신한청년당 대표로 파리 강화 회의에 참가해 한국의 독립 의지를 알렸습니다.",
  },
  {
    level: 2,
    question: "김규식을 파리 강화 회의에 파견하고 3·1 운동의 계기를 마련한, 상하이의 젊은 청년들이 만든 단체는 무엇일까요?",
    choices: ["신한청년당", "의열단", "한인애국단", "조선의용대"],
    answer: 0,
    explanation: "정답은 신한청년당입니다. 여운형, 김규식 등이 상하이에서 결성하여 국외 독립운동을 주도했습니다.",
  },
  {
    level: 2,
    question: "광복 후 김규식이 여운형과 함께 좌우 진영의 대립을 막고 통일 정부를 세우기 위해 추진한 정치 운동은 무엇일까요?",
    choices: ["좌우합작운동", "물산장려운동", "신간회 운동", "신탁통치 찬성 운동"],
    answer: 0,
    explanation: "정답은 좌우합작운동입니다. 좌우 대립을 극복하고 통일된 단일 정부를 세우고자 노력했습니다.",
  },
  {
    level: 2,
    question: "김규식 선생이 대한민국 임시정부에서 1944년 신설되어 맡았던 직책은 무엇일까요?",
    choices: ["부주석", "대통령", "총사령관", "내무총장"],
    answer: 0,
    explanation: "정답은 부주석입니다. 임시정부 약헌 개정 후 김구 주석과 함께 부주석에 취임했습니다.",
  },
  {
    level: 2,
    question: "1차 세계대전 후 미국 윌슨 대통령이 제창하여 피압박 민족들에게 독립의 희망을 준 사상은 무엇일까요?",
    choices: ["민족자결주의", "사회진화론", "공통사회주의", "군국주의"],
    answer: 0,
    explanation: "정답은 민족자결주의입니다. 각 민족의 운명은 스스로 결정해야 한다는 원칙으로 3·1 운동에 큰 영향을 주었습니다.",
  },
  {
    level: 3,
    question: "1945년 8월 15일 광복 직후, 여운형이 중심이 되어 치안을 유지하고 건국을 준비하기 위해 조직한 단체는 무엇일까요?",
    choices: ["조선건국준비위원회", "미소공동위원회", "한국민주당", "비상국민회의"],
    answer: 0,
    explanation: "정답은 조선건국준비위원회입니다. 해방 직후 치안 유지와 건국 준비를 담당한 자치 조직입니다.",
  },
  {
    level: 3,
    question: "1919년 일제의 심장부인 도쿄 제국호텔에서 일본 정관계 인사들을 모아놓고 조선 독립의 당위성을 연설한 독립운동가는 누구일까요?",
    choices: ["여운형", "김구", "안창호", "이회영"],
    answer: 0,
    explanation: "정답은 여운형입니다. 일본 한복판에서 조선 독립의 필연성을 당당하게 연설했습니다.",
  },
  {
    level: 3,
    question: "여운형이 1930년대 사장으로 취임하여 언론을 통한 민족 계몽에 앞장섰던 신문사는 어디일까요?",
    choices: ["조선중앙일보", "독립신문", "황성신문", "제국신문"],
    answer: 0,
    explanation: "정답은 조선중앙일보입니다. 손기정 선수의 일장기 말살 사건 보도 등 항일 언론 활동을 펼쳤습니다.",
  },
  {
    level: 3,
    question: "광복 직후 좌우합작위원회를 이끈 두 중심 인물의 정치적 성향 조합으로 옳은 것은 무엇일까요?",
    choices: ["중도 좌파 여운형과 중도 우파 김규식", "극좌 박헌영과 극우 이승만", "친일파와 독립군", "왕당파와 공화파"],
    answer: 0,
    explanation: "정답은 중도 좌파 여운형과 중도 우파 김규식입니다. 중도적 인물들이 좌우 통일을 도모했습니다.",
  },
  {
    level: 3,
    question: "1918년 상하이 신한청년당이 3·1 운동의 불씨를 지피기 위해 일본 도쿄에 파견했던 대표적 인물은 누구일까요?",
    choices: ["여운형 및 조동호 등", "김구", "이봉창", "강우규"],
    answer: 0,
    explanation: "정답은 여운형 및 조동호 등입니다. 도쿄 재일 유학생들에게 자금을 전달하며 2·8 독립선언의 계기를 마련했습니다.",
  },
];

const kimGuQuizQuestions = [
  {
    level: 1,
    question: "1919년 국내외 독립운동 역량을 하나로 모아 상하이에 수립된 중앙 정부 기관은 무엇일까요?",
    choices: ["한성정부", "대한민국 임시정부", "대한국민의회", "조선건국준비위원회"],
    answer: 1,
    explanation: "정답은 대한민국 임시정부입니다. 상하이, 한성, 연해주의 정부가 통합하여 상하이에 수립되었습니다.",
  },
  {
    level: 1,
    question: "일제 주요 요인 처단과 식민 기관 파괴를 위해 임시정부 내부에서 결성된 비밀 애국 단체는 무엇일까요?",
    choices: ["신민회", "한인애국단", "근우회", "흥사단"],
    answer: 1,
    explanation: "정답은 한인애국단입니다. 임시정부의 침체를 극복하기 위해 김구 선생을 중심으로 결성되었습니다.",
  },
  {
    level: 1,
    question: "한인애국단 소속 의사가 1932년 상하이 홍커우 공원에서 일제 수뇌부를 향해 폭탄을 투척한 사건은 무엇일까요?",
    choices: ["홍커우 공원 의거", "도쿄 시고쿠몬 의거", "종로경찰서 투척 사건", "동양척식주식회사 투척 사건"],
    answer: 0,
    explanation: "정답은 홍커우 공원 의거입니다. 윤봉길 의사가 감행한 의거로 중국 국민당 정부의 지원을 이끌어냈습니다.",
  },
  {
    level: 1,
    question: "대한민국 임시정부가 1940년 중국 충칭에서 창설한 직할 무장 부대는 무엇일까요?",
    choices: ["대한독립군", "한국광복군", "북로군정서", "조선의용대"],
    answer: 1,
    explanation: "정답은 한국광복군입니다. 임시정부의 정규군으로 인도·버마 전선 참전과 국내 진공 작전을 준비했습니다.",
  },
  {
    level: 1,
    question: "대한민국 임시정부가 효율적인 독립운동을 위해 비밀리에 운영했던 지방 행정 조직은 무엇일까요?",
    choices: ["연통제", "집강소", "향약", "3부"],
    answer: 0,
    explanation: "정답은 연통제입니다. 국내 연락, 자금 모금, 정보 전달을 담당했던 비밀 행정 조직입니다.",
  },
  {
    level: 2,
    question: "일제에 나라를 빼앗긴 직후, 침략상과 독립투쟁사를 기록하여 역사는 국혼이다라고 강조한 책은 무엇일까요?",
    choices: ["한국통사", "조선상고사", "동사강목", "독사신론"],
    answer: 0,
    explanation: "정답은 한국통사입니다. 박은식 선생이 저술하여 민족의식을 일깨운 역사책입니다.",
  },
  {
    level: 2,
    question: "박은식 선생이 1925년 임시정부의 갈등을 수습하기 위해 취임했던 직책은 무엇일까요?",
    choices: ["제2대 임시대통령", "총사령관", "내무총장", "의정원 의장"],
    answer: 0,
    explanation: "정답은 제2대 임시대통령입니다. 이승만 탄핵 이후 임시정부를 정돈하기 위해 취임했습니다.",
  },
  {
    level: 2,
    question: "박은식 선생이 유교계의 폐단을 비판하고, 민중 중심의 실천적 유교로 개혁해야 한다고 주장한 논설은 무엇일까요?",
    choices: ["유교구신론", "변법자강론", "척화비문", "동학경전"],
    answer: 0,
    explanation: "정답은 유교구신론입니다. 유교가 민중을 위한 실천 학문이 되어야 함을 주장했습니다.",
  },
  {
    level: 2,
    question: "박은식 선생이 저술한 한국독립운동지혈사에서 지혈이 뜻하는 바는 무엇일까요?",
    choices: ["독립운동가들이 흘린 피와 눈물의 역사", "일본 왕실의 혈통", "동양 평화의 혈맹 관계", "독립군의 군사적 혈로"],
    answer: 0,
    explanation: "정답은 독립운동가들이 흘린 피와 눈물의 역사입니다. 피 어린 항일 투쟁 과정을 기록한 책입니다.",
  },
  {
    level: 2,
    question: "1905년 을사늑약 체결 당시 황성신문에 논설 시일야방성대곡을 게재하여 민족의 분노를 대변한 인물은 누구일까요?",
    choices: ["장지연", "박은식", "신채호", "안창호"],
    answer: 0,
    explanation: "정답은 장지연입니다. 황성신문에 시일야방성대곡을 발표하여 을사늑약을 비판했습니다.",
  },
  {
    level: 3,
    question: "1938년 중국 우한에서 창설된, 중국 본토에서 만들어진 최초의 한인 무장 독립운동 부대는 무엇일까요?",
    choices: ["조선의용대", "한국광복군", "대한독립군", "북로군정서"],
    answer: 0,
    explanation: "정답은 조선의용대입니다. 김원봉을 중심으로 중국 국민당의 지원을 받아 창설되었습니다.",
  },
  {
    level: 3,
    question: "조선의용대 화북지대가 중국 공산당군과 연합하여 일제와 격전을 벌인 대표적인 전투는 무엇일까요?",
    choices: ["반소탕전", "봉오동 전투", "인천상륙작전", "대전자령 전투"],
    answer: 0,
    explanation: "정답은 반소탕전입니다. 윤세주 등이 태항산 전투에서 치열하게 싸우다 순국했습니다.",
  },
  {
    level: 3,
    question: "1942년 조선의용대 본대가 합류하여 전력을 크게 강화한 임시정부의 무장 부대는 무엇일까요?",
    choices: ["한국광복군", "조선인민군", "대한독립군단", "신민부"],
    answer: 0,
    explanation: "정답은 한국광복군입니다. 김원봉이 이끄는 본대가 합류하면서 광복군의 규모가 확대되었습니다.",
  },
  {
    level: 3,
    question: "조선의용대가 대원들의 사기 진작과 홍보를 위해 중국 현지에서 발행했던 언론 매체는 무엇일까요?",
    choices: ["대중일보 또는 조선의용대 화보", "독립신문", "황성신문", "한성순보"],
    answer: 0,
    explanation: "정답은 대중일보 또는 조선의용대 화보입니다. 선전 활동과 대민 홍보를 위해 발행했습니다.",
  },
  {
    level: 3,
    question: "조선의용대 대원들이 주로 맡았던 대일 전선에서의 핵심 역할은 무엇일까요?",
    choices: ["심리전, 적문 선전, 암호 번역", "잠수함 운용", "공군 비행기 조종", "정규 해전 지휘"],
    answer: 0,
    explanation: "정답은 심리전, 적문 선전, 암호 번역입니다. 일본어 능력을 활용해 심리전과 정보 수집을 담당했습니다.",
  },
  {
    level: 4,
    question: "1932년 1월, 도쿄 시고쿠몬에서 일왕 쇼와를 향해 수류탄을 투척한 한인애국단원은 누구일까요?",
    choices: ["이봉창", "윤봉길", "김상옥", "나석주"],
    answer: 0,
    explanation: "정답은 이봉창입니다. 일제의 심장부인 도쿄에서 일왕 단죄를 시도했습니다.",
  },
  {
    level: 4,
    question: "이봉창 의사의 도쿄 의거를 보고 중국 신문 민국일보가 기사를 내보내자, 이에 분노한 일제가 일으킨 침략 사건은 무엇일까요?",
    choices: ["상하이 사변", "만주사변", "중일전쟁", "태평양전쟁"],
    answer: 0,
    explanation: "정답은 상하이 사변입니다. 중국 신문의 보도에 분노한 일제가 상하이를 침략했습니다.",
  },
  {
    level: 4,
    question: "이봉창 의사의 도쿄 의거가 독립운동계에 가져다준 가장 큰 영향은 무엇일까요?",
    choices: ["침체되어 있던 임시정부와 독립운동에 큰 활력을 불어넣음", "일제가 즉시 한국의 독립을 승인함", "임시정부가 해산됨", "3·1 운동이 재발생함"],
    answer: 0,
    explanation: "정답은 침체되어 있던 임시정부와 독립운동에 큰 활력을 불어넣음입니다.",
  },
  {
    level: 4,
    question: "이봉창 의사가 한인애국단 가입 시 작성한 선서문 사진에서 손에 들고 있던 무기는 무엇일까요?",
    choices: ["수류탄", "권총", "장검", "소총"],
    answer: 0,
    explanation: "정답은 수류탄입니다. 양손에 수류탄을 들고 태극기 앞에서 기념 사진을 촬영했습니다.",
  },
  {
    level: 4,
    question: "이봉창 의사의 의거가 일어난 장소인 도쿄는 당시 일제 식민 통치의 어느 위치에 해당할까요?",
    choices: ["일제의 제국 수도", "임시정부의 해외 거점", "독립군의 만주 기지", "중립 지대"],
    answer: 0,
    explanation: "정답은 일제의 제국 수도입니다. 수도 한복판에서 의거를 감행하여 큰 충격을 주었습니다.",
  },
  {
    level: 5,
    question: "1919년 9월, 서울 남대문역에서 신임 조선총독 사이토 마코토에게 폭탄을 던진 인물은 누구일까요?",
    choices: ["강우규", "김상옥", "나석주", "윤봉길"],
    answer: 0,
    explanation: "정답은 강우규입니다. 64세의 나이에 의거를 감행하여 민족의 항일 의지를 보여주었습니다.",
  },
  {
    level: 5,
    question: "강우규 의사가 가입하여 활동했던, 만주 지역 노인들의 항일 운동 단체는 무엇일까요?",
    choices: ["대한노인동맹단", "노인애국회", "실버독립군", "만주유림회"],
    answer: 0,
    explanation: "정답은 대한노인동맹단입니다. 노인들이 모여 독립운동을 지원하고 항일 투쟁을 펼친 단체입니다.",
  },
  {
    level: 5,
    question: "강우규 의사의 거사 시기인 1919년에 일제가 3·1 운동 이후 들고 나온 표면적 통치 방식은 무엇일까요?",
    choices: ["문화 통치", "무단 통치", "민족 말살 통치", "병참 기지화 정책"],
    answer: 0,
    explanation: "정답은 문화 통치입니다. 사이토 마코토 총독을 보내 문화 통치를 표방하려 하자 이에 경종을 울렸습니다.",
  },
  {
    level: 5,
    question: "강우규 의사의 동상이 현재 세워져 있는 서울의 역사적 장소는 어디일까요?",
    choices: ["서울역 광장", "광화문 광장", "탑골공원", "서대문형무소 역사관"],
    answer: 0,
    explanation: "정답은 서울역 광장입니다. 1919년 거사가 일어났던 구 서울역사 앞 광장에 동상이 서 있습니다.",
  },
  {
    level: 5,
    question: "강우규 의사가 재판장에서 보여준 태도로 가장 적절한 것은 무엇일까요?",
    choices: ["의연하고 기개 있게 독립의 당위성을 주장함", "일제에 목숨을 구걸함", "동지들의 이름을 모두 밀고함", "독립 운동을 후회한다고 말함"],
    answer: 0,
    explanation: "정답은 의연하고 기개 있게 독립의 당위성을 주장함입니다. 사형 선고 중에도 의연함을 잃지 않았습니다.",
  },
];

const quizQuestionSets = {
  윤동주: quizQuestions,
  김구: kimGuQuizQuestions,
  유관순: yuGwanSunQuizQuestions,
  윤봉길: yunBonggilQuizQuestions,
  안중근: ahnJunggeunQuizQuestions,
};
const choiceMarkers = ["①", "②", "③", "④", "⑤"];
const introProfiles = {
  윤동주: {
    answer: "윤동주",
    choices: ["윤동주", "윤봉길", "유관순", "안중근"],
    hints: ["힌트 1: 시인입니다", "힌트 2: 대표작에 별 헤는 밤이 있습니다", "힌트 3: 일제강점기 민족의식을 노래했습니다"],
    role: "시인, 독립운동가",
    date: "1917.12.30 - 1945.2.16",
    bio: "민족 시인으로, 시집 하늘과 바람과 별과 시를 통해 저항과 성찰의 마음을 전했습니다.",
    image: {
      src: "assets/yoon-dongju.png",
      alt: "윤동주 흑백 사진",
    },
  },
  김구: {
    answer: "김구",
    choices: ["윤동주", "김구", "유관순", "안중근"],
    hints: ["힌트 1: 대한민국 임시정부에서 활동했습니다", "힌트 2: 한인애국단을 조직했습니다", "힌트 3: 백범일지를 남겼습니다"],
    role: "대한민국 임시정부 주석, 독립운동가",
    date: "1876.8.29 - 1949.6.26",
    bio: "임시정부 활동과 한인애국단 조직으로 독립운동의 중심을 이끌었습니다.",
    image: {
      src: "assets/kim-gu.jpg",
      alt: "김구 사진",
    },
  },
  유관순: {
    answer: "유관순",
    choices: ["윤동주", "윤봉길", "유관순", "안중근"],
    hints: ["힌트 1: 3.1 운동의 상징적 인물입니다", "힌트 2: 아우내 장터 만세운동을 주도했습니다", "힌트 3: 서대문형무소에서 옥중 순국했습니다"],
    role: "3.1운동 독립운동가",
    date: "1902.12.16 - 1920.9.28",
    bio: "아우내 장터 만세운동을 주도하고 옥중에서도 독립 의지를 지켰습니다.",
    image: {
      src: "assets/yu-gwan-sun.jpg",
      alt: "유관순 사진",
    },
  },
  윤봉길: {
    answer: "윤봉길",
    choices: ["윤동주", "윤봉길", "유관순", "안중근"],
    hints: ["힌트 1: 한인애국단 소속 독립운동가입니다", "힌트 2: 상하이 홍커우 공원에서 의거를 일으켰습니다", "힌트 3: 물통 폭탄과 도시락 폭탄으로 알려져 있습니다"],
    role: "한인애국단 독립운동가",
    date: "1908.6.21 - 1932.12.19",
    bio: "상하이 홍커우 공원 의거로 일제 침략의 부당함을 세계에 알렸습니다.",
    image: {
      src: "assets/yoon-bong-gil.jpg",
      alt: "윤봉길 사진",
    },
  },
  안중근: {
    answer: "안중근",
    choices: ["윤동주", "윤봉길", "유관순", "안중근"],
    hints: ["힌트 1: 하얼빈역에서 의거를 일으켰습니다", "힌트 2: 이토 히로부미를 처단했습니다", "힌트 3: 동양평화론을 남겼습니다"],
    role: "의병장, 독립운동가",
    date: "1879.9.2 - 1910.3.26",
    bio: "하얼빈 의거와 동양평화론으로 독립과 평화의 뜻을 남겼습니다.",
    image: {
      src: "assets/ahn-jung-geun.jpg",
      alt: "안중근 사진",
    },
  },
};
const defaultIntroProfile = introProfiles["윤동주"];
const app = document.querySelector(".app");
const stages = [...document.querySelectorAll(".stage")];
const dots = [...document.querySelectorAll(".dot")];
const tagButtons = [...document.querySelectorAll(".nfc-select-card")];
const previousButton = document.querySelector("#previousButton");
const restartButton = document.querySelector("#restartButton");
const answerGrid = document.querySelector("#answerGrid");
const scanStatus = document.querySelector("#scanStatus");
const scanTitle = scanStatus.querySelector("strong");
const scanText = scanStatus.querySelector("span:last-child");
const introHintTexts = [...document.querySelectorAll(".hint-list .hint p")];
const answerChoices = [...document.querySelectorAll(".answer-choice")];
const answerTitle = document.querySelector("#answer-title");
const answerImage = document.querySelector("#answerImage");
const answerSymbol = document.querySelector("#answerSymbol");
const answerRole = document.querySelector("#answerRole");
const answerDate = document.querySelector("#answerDate");
const answerBio = document.querySelector("#answerBio");
const nextToQuizGuide = document.querySelector("#nextToQuizGuide");
const guideNextButton = document.querySelector("#guideNextButton");
const startQuizButton = document.querySelector("#startQuizButton");
const quizAnswerGrid = document.querySelector("#quizAnswerGrid");
const quizFeedback = document.querySelector("#quizFeedback");
const quizStageMeta = document.querySelector("#quizStageMeta");
const quizStageCounter = document.querySelector("#quizStageCounter");
const quizOverallCounter = document.querySelector("#quizOverallCounter");
const quizProgressBar = document.querySelector("#quizProgressBar");
const playTitle = document.querySelector("#play-title");
const nextQuizButton = document.querySelector("#nextQuizButton");
const completionPortrait = document.querySelector("#completionPortrait");
const completionImage = document.querySelector("#completionImage");
const completionSymbol = document.querySelector("#completionSymbol");
const explainTitle = document.querySelector("#explain-title");
const completionText = document.querySelector("#completionText");
const explainNextButton = document.querySelector("#explainNextButton");
const stampNextButton = document.querySelector("#stampNextButton");
const stampTitle = document.querySelector("#stamp-title");
const stampNextText = document.querySelector("#stampNextText");
const stampRows = [...document.querySelectorAll(".stamp-status-row")];
const stampMapSlots = [...document.querySelectorAll(".map-stamp-slot")];
const purchaseNextButton = document.querySelector("#purchaseNextButton");
const shareButton = document.querySelector("#shareButton");
const keywordButton = document.querySelector("#keywordButton");
const keywordNote = document.querySelector("#keywordNote");
const finalRestartButton = document.querySelector("#finalRestartButton");
const stampPeople = ["윤동주", "김구", "유관순", "윤봉길", "안중근"];
const stampStorageKey = "gieokharing-earned-stamps";

let tagTimer;
let quizResolved = false;
let currentQuestionIndex = 0;
let selectedNfcName = "";
let activeQuizQuestions = quizQuestions;
let memoryEarnedStamps = [];

function clearTagTimer() {
  if (!tagTimer) return;
  window.clearTimeout(tagTimer);
  tagTimer = undefined;
}

function setStep(step) {
  app.dataset.step = String(step);

  stages.forEach((stage) => {
    const stageNumber = Number(stage.dataset.stage);
    stage.classList.toggle("is-active", stageNumber === step);
    stage.classList.toggle("is-complete", stageNumber < step);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index + 1 === step);
    dot.classList.toggle("is-complete", index + 1 < step);
  });

  renderStampRows();

  if (step === 8) {
    renderStampBoard(selectedNfcName);
  }

  previousButton.disabled = step <= 1;
}

function getQuizQuestions(personName) {
  return quizQuestionSets[personName] || quizQuestions;
}

function renderQuizQuestion() {
  const question = activeQuizQuestions[currentQuestionIndex];
  const questionNumberInLevel = (currentQuestionIndex % 5) + 1;

  quizStageMeta.textContent = `${question.level}단계 / 5문제 중 ${questionNumberInLevel}문제`;
  quizStageCounter.textContent = `${questionNumberInLevel}/5`;
  quizOverallCounter.textContent = `전체 ${currentQuestionIndex + 1}/${activeQuizQuestions.length}`;
  quizProgressBar.style.width = `${questionNumberInLevel * 20}%`;
  playTitle.textContent = question.question;
  quizFeedback.textContent = "정답을 선택하면 해설이 표시됩니다.";
  quizFeedback.classList.remove("is-success");
  nextQuizButton.hidden = true;
  nextQuizButton.textContent = currentQuestionIndex === activeQuizQuestions.length - 1 ? "결과 보기" : "다음 문제";

  quizAnswerGrid.replaceChildren();
  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "quiz-answer-choice";
    button.type = "button";
    button.dataset.index = String(index);
    button.textContent = `${choiceMarkers[index]} ${choice}`;
    quizAnswerGrid.append(button);
  });
}

function getIntroProfile(personName) {
  return introProfiles[personName] || defaultIntroProfile;
}

function loadEarnedStamps() {
  try {
    const savedStamps = JSON.parse(window.localStorage.getItem(stampStorageKey) || "[]");

    if (!Array.isArray(savedStamps)) return [];

    return savedStamps.filter((personName, index) => {
      return stampPeople.includes(personName) && savedStamps.indexOf(personName) === index;
    });
  } catch {
    return memoryEarnedStamps;
  }
}

function saveEarnedStamps(stamps) {
  memoryEarnedStamps = [...stamps];

  try {
    window.localStorage.setItem(stampStorageKey, JSON.stringify(stamps));
  } catch {}
}

function getStampPersonName(personName) {
  const profile = getIntroProfile(personName);
  return stampPeople.includes(profile.answer) ? profile.answer : stampPeople[0];
}

function markStampEarned(personName) {
  const stampPersonName = getStampPersonName(personName);
  const earnedStamps = loadEarnedStamps();

  if (!earnedStamps.includes(stampPersonName)) {
    earnedStamps.push(stampPersonName);
    saveEarnedStamps(earnedStamps);
  }

  return earnedStamps;
}

function renderStampFaces() {
  stampMapSlots.forEach((slot) => {
    const personName = slot.dataset.stampPerson;
    const profile = getIntroProfile(personName);
    const face = slot.querySelector(".stamp-face");

    if (!face || face.dataset.person === personName) return;

    face.dataset.person = personName;
    face.replaceChildren();

    if (profile.image) {
      const image = document.createElement("img");
      image.src = profile.image.src;
      image.alt = "";
      face.append(image);
    } else {
      const fallback = document.createElement("span");
      fallback.className = "stamp-face-fallback";
      fallback.textContent = personName;
      face.append(fallback);
    }

    const label = document.createElement("b");
    label.textContent = personName;
    face.append(label);
  });
}

function renderStampRows(earnedStamps = loadEarnedStamps()) {
  stampRows.forEach((row) => {
    const count = row.querySelector("b");

    [...row.querySelectorAll("span")].forEach((slot, index) => {
      const personName = stampPeople[index];
      slot.classList.toggle("is-earned", earnedStamps.includes(personName));
      slot.setAttribute("title", personName);
    });

    if (count) {
      count.textContent = `${earnedStamps.length}/5`;
    }

    row.setAttribute("aria-label", `획득 도장 ${earnedStamps.length}개`);
  });
}

function renderStampBoard(recentPersonName = selectedNfcName) {
  const earnedStamps = loadEarnedStamps();
  const stampedPersonName = getStampPersonName(recentPersonName);
  const completedQuestionCount = getQuizQuestions(stampedPersonName).length;
  const hasAllStamps = earnedStamps.length >= stampPeople.length;

  renderStampFaces();
  renderStampRows(earnedStamps);

  stampMapSlots.forEach((slot) => {
    const personName = slot.dataset.stampPerson;
    const isEarned = earnedStamps.includes(personName);

    slot.classList.toggle("is-earned", isEarned);
    slot.classList.toggle("is-current", isEarned && personName === stampedPersonName);
    slot.setAttribute("aria-label", isEarned ? `${personName} 도장 획득` : `${personName} 도장 미획득`);
  });

  stampTitle.innerHTML = hasAllStamps
    ? "도장 5개를 모두 모았습니다!<br />대한독립만세 화면으로 이동하세요."
    : `${completedQuestionCount}문제를 모두 완료했어요!<br />${stampedPersonName} 도장을 획득했습니다.`;

  stampNextText.textContent = hasAllStamps
    ? "도장 5개를 모두 모았습니다. 대한독립만세 화면을 열어보세요."
    : `현재 ${earnedStamps.length}/5개를 모았습니다. 다른 키링도 이어서 진행하세요.`;
}

function renderIntroQuiz(personName) {
  const profile = getIntroProfile(personName);

  answerChoices.forEach((button) => {
    button.classList.remove("is-selected", "is-correct", "is-wrong", "is-auto");
    button.disabled = false;
  });

  introHintTexts.forEach((hint, index) => {
    hint.textContent = profile.hints[index] || "";
  });

  answerChoices.forEach((button, index) => {
    const choice = profile.choices[index] || "";
    button.textContent = choice;
    button.dataset.correct = String(choice === profile.answer);
    button.hidden = !choice;
  });

  answerTitle.innerHTML = `이 인물은 바로<br />${profile.answer}입니다!`;
  answerRole.textContent = profile.role;
  answerDate.textContent = profile.date;
  answerBio.textContent = profile.bio;

  answerImage.hidden = !profile.image;
  answerSymbol.hidden = Boolean(profile.image);
  answerSymbol.textContent = profile.answer;

  if (profile.image) {
    answerImage.src = profile.image.src;
    answerImage.alt = profile.image.alt;
  }
}

function renderCompletion(personName) {
  const profile = getIntroProfile(personName);
  const completedQuestionCount = getQuizQuestions(profile.answer).length;
  const summaries = {
    윤동주: "윤동주와 무장 독립운동, 신민회까지 5단계 핵심 문제를 완료했습니다.",
    김구: "김구 선생과 대한민국 임시정부, 한인애국단과 광복군 흐름까지 5단계 핵심 문제를 완료했습니다.",
    유관순: "유관순과 3·1 운동, 만주 무장투쟁과 의열투쟁까지 5단계 핵심 문제를 완료했습니다.",
    윤봉길: "윤봉길 의사와 한인애국단, 의열투쟁과 임시정부 흐름까지 5단계 핵심 문제를 완료했습니다.",
    안중근: "안중근 의사와 하얼빈 의거, 외교 독립운동과 좌우합작 흐름까지 핵심 문제를 완료했습니다.",
  };

  completionPortrait.setAttribute("aria-label", `${profile.answer} 초상`);
  explainTitle.textContent = `${completedQuestionCount}문제를 모두 풀었습니다!`;
  completionText.textContent = `${summaries[profile.answer] || `${profile.answer} 관련 5단계 핵심 문제를 완료했습니다.`} 이제 획득한 도장을 확인하세요.`;

  completionImage.hidden = !profile.image;
  completionSymbol.hidden = Boolean(profile.image);
  completionSymbol.textContent = profile.answer;

  if (profile.image) {
    completionImage.src = profile.image.src;
    completionImage.alt = profile.image.alt;
  }

}

function resetChoices() {
  renderIntroQuiz(selectedNfcName);
  renderCompletion(selectedNfcName);
  renderStampRows();
  activeQuizQuestions = getQuizQuestions(selectedNfcName);
  currentQuestionIndex = 0;
  renderQuizQuestion();
  shareButton.textContent = "공유하기";
  keywordButton.textContent = "최종 키워드 신청하기";
  keywordNote.textContent = "최종 키워드는 신청 후 변경할 수 없습니다.";
}

function resetFlow() {
  clearTagTimer();
  quizResolved = false;
  app.dataset.reading = "false";
  selectedNfcName = "";
  tagButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("is-selected");
  });
  scanTitle.textContent = "NFC 인물을 선택해주세요";
  scanText.textContent = "인형 대신 원하는 NFC 카드를 클릭하면 다음 화면으로 넘어갑니다.";
  resetChoices();
  setStep(1);
}

function startTagFlow(event) {
  if (app.dataset.reading === "true") return;

  const selectedButton = event.currentTarget;
  selectedNfcName = selectedButton.dataset.person || "선택한 인물";
  renderIntroQuiz(selectedNfcName);

  clearTagTimer();
  app.dataset.reading = "true";
  tagButtons.forEach((button) => {
    button.disabled = true;
    button.classList.toggle("is-selected", button === selectedButton);
  });
  scanTitle.textContent = `${selectedNfcName} NFC 태그 인식 중...`;
  scanText.textContent = "키링 정보를 불러오고 있습니다.";

  tagTimer = window.setTimeout(() => {
    app.dataset.reading = "false";
    scanTitle.textContent = `${selectedNfcName} NFC 태그 완료`;
    scanText.textContent = "퀴즈 화면으로 이동합니다.";

    window.setTimeout(() => {
      tagButtons.forEach((button) => {
        button.disabled = false;
      });
      setStep(2);
    }, 360);
  }, 1050);
}

function revealAnswer(button) {
  if (quizResolved) return;

  quizResolved = true;
  clearTagTimer();

  answerChoices.forEach((choice) => {
    choice.disabled = true;
  });

  button.classList.add("is-correct", "is-selected");

  window.setTimeout(() => {
    setStep(3);
  }, 520);
}

function startSequentialQuiz() {
  activeQuizQuestions = getQuizQuestions(selectedNfcName);
  renderCompletion(selectedNfcName);
  currentQuestionIndex = 0;
  renderQuizQuestion();
  setStep(6);
}

function showNextQuizQuestion() {
  if (currentQuestionIndex === activeQuizQuestions.length - 1) {
    setStep(7);
    return;
  }

  currentQuestionIndex += 1;
  renderQuizQuestion();
}

function goToPreviousStep() {
  const currentStep = Number(app.dataset.step) || 1;

  if (currentStep === 11) {
    setStep(8);
    return;
  }

  const previousStep = Math.max(1, currentStep - 1);

  if (previousStep === currentStep) return;

  clearTagTimer();
  app.dataset.reading = "false";

  if (previousStep === 2) {
    quizResolved = false;
    renderIntroQuiz(selectedNfcName);
  }

  setStep(previousStep);
}

tagButtons.forEach((button) => button.addEventListener("click", startTagFlow));
previousButton.addEventListener("click", goToPreviousStep);
restartButton.addEventListener("click", resetFlow);
nextToQuizGuide.addEventListener("click", () => setStep(4));
guideNextButton.addEventListener("click", () => setStep(5));
startQuizButton.addEventListener("click", startSequentialQuiz);
nextQuizButton.addEventListener("click", showNextQuizQuestion);
explainNextButton.addEventListener("click", () => {
  const earnedStamps = markStampEarned(selectedNfcName);
  renderStampBoard(selectedNfcName);
  setStep(8);

  if (earnedStamps.length >= stampPeople.length) {
    window.setTimeout(() => {
      if (Number(app.dataset.step) === 8) {
        setStep(11);
      }
    }, 1400);
  }
});
stampNextButton.addEventListener("click", () => {
  if (loadEarnedStamps().length >= stampPeople.length) {
    setStep(11);
    return;
  }

  setStep(9);
});
purchaseNextButton.addEventListener("click", () => setStep(10));
finalRestartButton.addEventListener("click", resetFlow);

answerGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-choice");
  if (!button || button.disabled) return;

  if (button.dataset.correct === "true") {
    revealAnswer(button);
    return;
  }

  button.classList.add("is-wrong");
  window.setTimeout(() => {
    button.classList.remove("is-wrong");
  }, 420);
});

quizAnswerGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".quiz-answer-choice");
  if (!button || button.disabled) return;

  const question = activeQuizQuestions[currentQuestionIndex];
  const selectedIndex = Number(button.dataset.index);

  if (selectedIndex === question.answer) {
    [...quizAnswerGrid.querySelectorAll(".quiz-answer-choice")].forEach((choice) => {
      choice.disabled = true;
    });
    button.classList.add("is-correct", "is-selected");
    quizFeedback.textContent = question.explanation;
    quizFeedback.classList.add("is-success");
    nextQuizButton.hidden = false;
    return;
  }

  button.classList.add("is-wrong");
  quizFeedback.textContent = "다시 생각해보세요. 정답을 고르면 해설이 표시됩니다.";
  window.setTimeout(() => {
    button.classList.remove("is-wrong");
  }, 420);
});

shareButton.addEventListener("click", () => {
  shareButton.textContent = "공유 완료";
});

keywordButton.addEventListener("click", () => {
  keywordButton.textContent = "신청 완료";
  keywordNote.textContent = "최종 키워드 신청이 완료되었습니다.";
});

resetFlow();
