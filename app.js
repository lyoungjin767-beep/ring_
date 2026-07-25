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

const quizQuestionSets = {
  윤동주: quizQuestions,
  윤봉길: yunBonggilQuizQuestions,
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
  },
  유관순: {
    answer: "유관순",
    choices: ["윤동주", "윤봉길", "유관순", "안중근"],
    hints: ["힌트 1: 3.1 운동의 상징적 인물입니다", "힌트 2: 아우내 장터 만세운동을 주도했습니다", "힌트 3: 서대문형무소에서 옥중 순국했습니다"],
    role: "3.1운동 독립운동가",
    date: "1902.12.16 - 1920.9.28",
    bio: "아우내 장터 만세운동을 주도하고 옥중에서도 독립 의지를 지켰습니다.",
  },
  윤봉길: {
    answer: "윤봉길",
    choices: ["윤동주", "윤봉길", "유관순", "안중근"],
    hints: ["힌트 1: 한인애국단 소속 독립운동가입니다", "힌트 2: 상하이 홍커우 공원에서 의거를 일으켰습니다", "힌트 3: 물통 폭탄과 도시락 폭탄으로 알려져 있습니다"],
    role: "한인애국단 독립운동가",
    date: "1908.6.21 - 1932.12.19",
    bio: "상하이 홍커우 공원 의거로 일제 침략의 부당함을 세계에 알렸습니다.",
  },
  안중근: {
    answer: "안중근",
    choices: ["윤동주", "윤봉길", "유관순", "안중근"],
    hints: ["힌트 1: 하얼빈역에서 의거를 일으켰습니다", "힌트 2: 이토 히로부미를 처단했습니다", "힌트 3: 동양평화론을 남겼습니다"],
    role: "의병장, 독립운동가",
    date: "1879.9.2 - 1910.3.26",
    bio: "하얼빈 의거와 동양평화론으로 독립과 평화의 뜻을 남겼습니다.",
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
const completionText = document.querySelector("#completionText");
const explainNextButton = document.querySelector("#explainNextButton");
const stampNextButton = document.querySelector("#stampNextButton");
const purchaseNextButton = document.querySelector("#purchaseNextButton");
const shareButton = document.querySelector("#shareButton");
const keywordButton = document.querySelector("#keywordButton");
const keywordNote = document.querySelector("#keywordNote");

let tagTimer;
let quizResolved = false;
let currentQuestionIndex = 0;
let selectedNfcName = "";
let activeQuizQuestions = quizQuestions;

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
  const summaries = {
    윤동주: "윤동주와 무장 독립운동, 신민회까지 5단계 핵심 문제를 완료했습니다.",
    윤봉길: "윤봉길 의사와 한인애국단, 의열투쟁과 임시정부 흐름까지 5단계 핵심 문제를 완료했습니다.",
  };

  completionPortrait.setAttribute("aria-label", `${profile.answer} 초상`);
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
explainNextButton.addEventListener("click", () => setStep(8));
stampNextButton.addEventListener("click", () => setStep(9));
purchaseNextButton.addEventListener("click", () => setStep(10));

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
