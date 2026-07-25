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

resetFlow();
