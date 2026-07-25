const app = document.querySelector(".app");
const stages = [...document.querySelectorAll(".stage")];
const dots = [...document.querySelectorAll(".dot")];
const nfcPersonCards = [...document.querySelectorAll(".nfc-person-card")];
const restartButton = document.querySelector("#restartButton");
const previousButton = document.querySelector("#previousButton");
const answerGrid = document.querySelector("#answerGrid");
const scanStatus = document.querySelector("#scanStatus");
const scanTitle = scanStatus.querySelector("strong");
const scanText = scanStatus.querySelector("span:last-child");
const answerChoices = [...document.querySelectorAll(".answer-choice")];
const hintOne = document.querySelector("#hintOne");
const hintTwo = document.querySelector("#hintTwo");
const hintThree = document.querySelector("#hintThree");
const profileTitle = document.querySelector("#answer-title");
const profileImage = document.querySelector("#profileImage");
const profileRole = document.querySelector("#profileRole");
const profileDate = document.querySelector("#profileDate");
const profileBio = document.querySelector("#profileBio");
const profileNextCopy = document.querySelector("#profileNextCopy");
const nextToQuizGuide = document.querySelector("#nextToQuizGuide");
const guideNextButton = document.querySelector("#guideNextButton");
const roadmapSteps = [...document.querySelectorAll(".stage-roadmap .level-choice")];
const startSetButton = document.querySelector("#startSetButton");
const quizAnswerGrid = document.querySelector("#quizAnswerGrid");
const quizAnswerChoices = [...document.querySelectorAll(".quiz-answer-choice")];
const quizFeedback = document.querySelector("#quizFeedback");
const quizProgressLabel = document.querySelector("#quizProgressLabel");
const quizProgressCount = document.querySelector("#quizProgressCount");
const quizProgressBar = document.querySelector("#quizProgressBar");
const quizTitle = document.querySelector("#play-title");
const explainNextButton = document.querySelector("#explainNextButton");
const stampNextButton = document.querySelector("#stampNextButton");
const purchaseNextButton = document.querySelector("#purchaseNextButton");
const shareButton = document.querySelector("#shareButton");
const keywordButton = document.querySelector("#keywordButton");
const keywordNote = document.querySelector("#keywordNote");

let tagTimer;
let quizResolved = false;
let selectedSet = 1;
let currentQuestionIndex = 0;
let selectedPerson = "yoon";
let stepHistory = [];

const personQuizzes = {
  yoon: {
    hints: ["힌트 1: 시인입니다", "힌트 2: 대표작에 별 헤는 밤이 있습니다", "힌트 3: 일제강점기 민족의식을 노래했습니다"],
    answers: ["윤동주", "윤봉길", "유관순", "안중근"],
    correct: 0,
    profile: {
      name: "윤동주",
      role: "시인, 독립운동가",
      date: "1917.12.30 - 1945.2.16",
      bio: "민족 시인으로, 시집 하늘과 바람과 별과 시를 통해 저항과 성찰의 마음을 전했습니다.",
      image: "assets/yoon-dongju.png",
    },
  },
  kim: {
    hints: ["힌트 1: 대한민국 임시정부의 주석을 지냈습니다", "힌트 2: 호는 백범입니다", "힌트 3: 독립운동가들을 이끌었습니다"],
    answers: ["김구", "안중근", "윤봉길", "유관순"],
    correct: 0,
    profile: {
      name: "김구",
      role: "독립운동가, 대한민국 임시정부 주석",
      date: "1876.8.29 - 1949.6.26",
      bio: "호는 백범이며, 대한민국 임시정부를 이끌고 독립운동에 헌신했습니다.",
      image: "assets/kim-gu.jpg",
    },
  },
  yu: {
    hints: ["힌트 1: 3·1 운동에 참여했습니다", "힌트 2: 아우내 장터 만세 운동을 이끌었습니다", "힌트 3: 여성 독립운동가입니다"],
    answers: ["유관순", "윤동주", "김구", "안중근"],
    correct: 0,
    profile: {
      name: "유관순",
      role: "독립운동가",
      date: "1902.12.16 - 1920.9.28",
      bio: "3·1 운동과 아우내 장터 만세 운동을 이끌며 독립을 위해 헌신했습니다.",
      image: "assets/yu-gwan-sun.jpg",
    },
  },
  bong: {
    hints: ["힌트 1: 상하이 의거를 일으켰습니다", "힌트 2: 매헌이라는 호를 사용했습니다", "힌트 3: 독립운동가입니다"],
    answers: ["윤봉길", "김구", "안중근", "윤동주"],
    correct: 0,
    profile: {
      name: "윤봉길",
      role: "독립운동가",
      date: "1908.6.21 - 1932.12.19",
      bio: "상하이 훙커우 공원 의거를 통해 독립 의지를 세계에 알린 독립운동가입니다.",
      image: "assets/yoon-bong-gil.jpg",
    },
  },
  ahn: {
    hints: ["힌트 1: 하얼빈역 의거로 알려졌습니다", "힌트 2: 동양 평화를 꿈꿨습니다", "힌트 3: 독립운동가입니다"],
    answers: ["안중근", "윤봉길", "김구", "유관순"],
    correct: 0,
  },
};

function setPersonQuiz(person) {
  const quiz = personQuizzes[person];
  hintOne.textContent = quiz.hints[0];
  hintTwo.textContent = quiz.hints[1];
  hintThree.textContent = quiz.hints[2];
  answerChoices.forEach((button, index) => {
    button.textContent = quiz.answers[index];
    button.dataset.correct = String(index === quiz.correct);
  });

  if (!quiz.profile) return;
  profileTitle.innerHTML = `이 인물은 바로<br />${quiz.profile.name}입니다!`;
  profileImage.src = quiz.profile.image;
  profileImage.alt = `${quiz.profile.name} 흑백 사진`;
  profileRole.textContent = quiz.profile.role;
  profileDate.textContent = quiz.profile.date;
  profileBio.textContent = quiz.profile.bio;
  profileNextCopy.textContent = `다음으로 퀴즈를 풀어 ${quiz.profile.name}에 대해 더 알아보세요!`;
}

function resetPersonQuizAttempt() {
  quizResolved = false;
  answerChoices.forEach((button) => {
    button.classList.remove("is-selected", "is-correct", "is-wrong", "is-auto");
    button.disabled = false;
  });
}

const quizQuestions = [
  {
    title: "윤동주의 대표작으로<br />옳은 것은?",
    answers: ["하늘과 바람과 별과 시", "별 헤는 밤", "서시", "진달래꽃"],
    correct: 0,
  },
  {
    title: "윤동주가 활동한 시대와<br />가장 가까운 것은?",
    answers: ["조선 후기", "일제강점기", "고려 시대", "현대"],
    correct: 1,
  },
  {
    title: "윤동주의 시로<br />옳은 것은?",
    answers: ["서시", "광야", "님의 침묵", "진달래꽃"],
    correct: 0,
  },
  {
    title: "윤동주의 작품에 자주 담긴<br />마음으로 알맞은 것은?",
    answers: ["자기 성찰", "왕권 찬양", "전쟁 영웅담", "과학 기술"],
    correct: 0,
  },
  {
    title: "윤동주와 관련된 설명으로<br />옳은 것은?",
    answers: ["독립운동가이자 시인", "조선의 왕", "화가", "발명가"],
    correct: 0,
  },
];

function setQuizProgress(questionNumber) {
  const safeQuestionNumber = Math.min(5, Math.max(1, Number(questionNumber) || 1));
  quizProgressLabel.textContent = `${selectedSet}세트 / 5문제 중 ${safeQuestionNumber}문제`;
  quizProgressCount.textContent = `${safeQuestionNumber}/5`;
  quizProgressBar.style.width = `${safeQuestionNumber * 20}%`;
}

function renderQuizQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  quizTitle.innerHTML = question.title;
  quizAnswerChoices.forEach((button, index) => {
    button.textContent = question.answers[index];
    button.dataset.correct = String(index === question.correct);
    button.classList.remove("is-selected", "is-correct", "is-wrong");
    button.disabled = false;
  });
  quizFeedback.textContent = "인물 관련 질문과 독립운동 전반에 대한 질문이 출제됩니다.";
  quizFeedback.classList.remove("is-success");
  setQuizProgress(currentQuestionIndex + 1);
}

function renderSetRoadmap() {
  roadmapSteps.forEach((step, index) => {
    const stepNumber = index + 1;
    step.classList.toggle("is-complete", stepNumber < selectedSet);
    step.classList.toggle("is-current", stepNumber === selectedSet);
    step.classList.toggle("is-locked", stepNumber > selectedSet);
  });
  startSetButton.textContent = `${selectedSet}단계 시작하기`;
}

function clearTagTimer() {
  if (!tagTimer) return;
  window.clearTimeout(tagTimer);
  tagTimer = undefined;
}

function setStep(step, { recordHistory = true } = {}) {
  const currentStep = Number(app.dataset.step) || 1;
  if (recordHistory && step !== currentStep) {
    stepHistory.push(currentStep);
  }

  if (step === 3) {
    setPersonQuiz(selectedPerson);
  }

  app.dataset.step = String(step);
  previousButton.hidden = step === 1 || step === 2 || stepHistory.length === 0;

  stages.forEach((stage) => {
    const stageNumber = Number(stage.dataset.stage);
    stage.classList.toggle("is-active", stageNumber === step);
    stage.classList.toggle("is-complete", stageNumber < step);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index + 1 === step);
    dot.classList.toggle("is-complete", index + 1 < step);
  });
}

function resetChoices() {
  answerChoices.forEach((button) => {
    button.classList.remove("is-selected", "is-correct", "is-wrong", "is-auto");
    button.disabled = false;
  });

  selectedSet = 1;
  currentQuestionIndex = 0;
  renderSetRoadmap();
  renderQuizQuestion();

  quizAnswerChoices.forEach((button) => {
    button.classList.remove("is-selected", "is-correct", "is-wrong");
    button.disabled = false;
  });

  quizFeedback.textContent = "인물 관련 질문과 독립운동 전반에 대한 질문이 출제됩니다.";
  quizFeedback.classList.remove("is-success");
  shareButton.textContent = "공유하기";
  keywordButton.textContent = "최종 키워드 신청하기";
  keywordNote.textContent = "최종 키워드는 신청 후 변경할 수 없습니다.";
}

function resetFlow() {
  clearTagTimer();
  stepHistory = [];
  quizResolved = false;
  app.dataset.reading = "false";
  selectedPerson = "yoon";
  nfcPersonCards.forEach((card) => card.classList.remove("is-selected"));
  scanTitle.textContent = "NFC 인물을 선택해주세요";
  scanText.textContent = "원하는 NFC 카드를 클릭하면 다음 화면으로 넘어갑니다.";
  setPersonQuiz(selectedPerson);
  resetChoices();
  setStep(1, { recordHistory: false });
}

function revealAnswer(button) {
  if (quizResolved) return;

  quizResolved = true;
  clearTagTimer();
  setPersonQuiz(selectedPerson);

  answerChoices.forEach((choice) => {
    choice.disabled = true;
  });

  button.classList.add("is-correct", "is-selected");

  window.setTimeout(() => {
    setStep(3);
  }, 520);
}

nfcPersonCards.forEach((card) => {
  card.addEventListener("click", () => {
    selectedPerson = card.dataset.person;
    nfcPersonCards.forEach((item) => item.classList.toggle("is-selected", item === card));
    resetPersonQuizAttempt();
    setPersonQuiz(selectedPerson);
    setStep(2);
  });
});
restartButton.addEventListener("click", resetFlow);
previousButton.addEventListener("click", () => {
  const previousStep = stepHistory.pop();
  if (previousStep) setStep(previousStep, { recordHistory: false });
});
nextToQuizGuide.addEventListener("click", () => setStep(4));
guideNextButton.addEventListener("click", () => setStep(5));
explainNextButton.addEventListener("click", () => setStep(8));
stampNextButton.addEventListener("click", () => setStep(9));
purchaseNextButton.addEventListener("click", () => setStep(10));
startSetButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  renderQuizQuestion();
  setStep(6);
});

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

  if (button.dataset.correct === "true") {
    quizAnswerChoices.forEach((choice) => {
      choice.disabled = true;
    });
    button.classList.add("is-correct", "is-selected");
    quizFeedback.textContent = "정답입니다. 다음 문제로 넘어갑니다.";
    quizFeedback.classList.add("is-success");
    const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
    setQuizProgress(currentQuestionIndex + 1);
    window.setTimeout(() => {
      if (isLastQuestion) {
        if (selectedSet < 5) {
          selectedSet += 1;
          currentQuestionIndex = 0;
          renderSetRoadmap();
          setStep(5);
          return;
        }

        setStep(7);
        return;
      }

      currentQuestionIndex += 1;
      renderQuizQuestion();
    }, 720);
    return;
  }

  button.classList.add("is-wrong");
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
