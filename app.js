const app = document.querySelector(".app");
const stages = [...document.querySelectorAll(".stage")];
const dots = [...document.querySelectorAll(".dot")];
const tagButton = document.querySelector("#tagButton");
const restartButton = document.querySelector("#restartButton");
const answerGrid = document.querySelector("#answerGrid");
const scanStatus = document.querySelector("#scanStatus");
const scanTitle = scanStatus.querySelector("strong");
const scanText = scanStatus.querySelector("span:last-child");
const answerChoices = [...document.querySelectorAll(".answer-choice")];
const nextToQuizGuide = document.querySelector("#nextToQuizGuide");
const guideNextButton = document.querySelector("#guideNextButton");
const levelChoices = [...document.querySelectorAll(".level-choice")];
const quizAnswerGrid = document.querySelector("#quizAnswerGrid");
const quizAnswerChoices = [...document.querySelectorAll(".quiz-answer-choice")];
const quizFeedback = document.querySelector("#quizFeedback");
const explainNextButton = document.querySelector("#explainNextButton");
const stampNextButton = document.querySelector("#stampNextButton");
const purchaseNextButton = document.querySelector("#purchaseNextButton");
const shareButton = document.querySelector("#shareButton");
const keywordButton = document.querySelector("#keywordButton");
const keywordNote = document.querySelector("#keywordNote");

let tagTimer;
let quizResolved = false;

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
}

function resetChoices() {
  answerChoices.forEach((button) => {
    button.classList.remove("is-selected", "is-correct", "is-wrong", "is-auto");
    button.disabled = false;
  });

  levelChoices.forEach((button, index) => {
    button.classList.toggle("is-selected", index === 0);
    button.disabled = false;
  });

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
  quizResolved = false;
  app.dataset.reading = "false";
  tagButton.disabled = false;
  scanTitle.textContent = "NFC 키링을 태그해주세요";
  scanText.textContent = "키링을 가까이 대면 다음 화면으로 넘어갑니다.";
  resetChoices();
  setStep(1);
}

function startTagFlow() {
  if (app.dataset.reading === "true") return;

  clearTagTimer();
  app.dataset.reading = "true";
  tagButton.disabled = true;
  scanTitle.textContent = "NFC 태그 인식 중...";
  scanText.textContent = "키링 정보를 불러오고 있습니다.";

  tagTimer = window.setTimeout(() => {
    app.dataset.reading = "false";
    scanTitle.textContent = "NFC 태그 완료";
    scanText.textContent = "퀴즈 화면으로 이동합니다.";

    window.setTimeout(() => {
      tagButton.disabled = false;
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

tagButton.addEventListener("click", startTagFlow);
restartButton.addEventListener("click", resetFlow);
nextToQuizGuide.addEventListener("click", () => setStep(4));
guideNextButton.addEventListener("click", () => setStep(5));
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

levelChoices.forEach((button) => {
  button.addEventListener("click", () => {
    levelChoices.forEach((choice) => choice.classList.remove("is-selected"));
    button.classList.add("is-selected");

    window.setTimeout(() => {
      setStep(6);
    }, 260);
  });
});

quizAnswerGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".quiz-answer-choice");
  if (!button || button.disabled) return;

  if (button.dataset.correct === "true") {
    quizAnswerChoices.forEach((choice) => {
      choice.disabled = true;
    });
    button.classList.add("is-correct", "is-selected");
    quizFeedback.textContent = "정답입니다. 윤동주의 대표 시집으로 기억해두세요.";
    quizFeedback.classList.add("is-success");
    window.setTimeout(() => {
      setStep(7);
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
