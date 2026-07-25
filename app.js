const app = document.querySelector(".app");
const stages = [...document.querySelectorAll(".stage")];
const dots = [...document.querySelectorAll(".dot")];
const tagButton = document.querySelector("#tagButton");
const restartButton = document.querySelector("#restartButton");
const answerGrid = document.querySelector("#answerGrid");
const scanStatus = document.querySelector("#scanStatus");

let timers = [];
let quizResolved = false;

function clearTimers() {
  timers.forEach((timer) => window.clearTimeout(timer));
  timers = [];
}

function queue(callback, delay) {
  const timer = window.setTimeout(callback, delay);
  timers.push(timer);
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
  });
}

function resetChoices() {
  document.querySelectorAll(".answer-choice").forEach((button) => {
    button.classList.remove("is-selected", "is-correct", "is-wrong", "is-auto");
    button.disabled = false;
  });
}

function startFlow() {
  clearTimers();
  quizResolved = false;
  resetChoices();
  setStep(1);
  app.dataset.reading = "true";
  scanStatus.querySelector("strong").textContent = "NFC 태그 인식 중...";
  scanStatus.querySelector("span:last-child").textContent = "잠시만 기다려주세요.";

  queue(() => {
    app.dataset.reading = "false";
    scanStatus.querySelector("strong").textContent = "NFC 태그 완료";
    scanStatus.querySelector("span:last-child").textContent = "퀴즈 화면으로 이동합니다.";
    setStep(2);
  }, 1450);

  queue(() => {
    if (quizResolved) return;
    const correctButton = document.querySelector('[data-correct="true"]');
    correctButton.classList.add("is-auto", "is-selected");
  }, 2900);

  queue(() => {
    if (quizResolved) return;
    revealAnswer(document.querySelector('[data-correct="true"]'));
  }, 3900);
}

function revealAnswer(button) {
  quizResolved = true;
  clearTimers();
  document.querySelectorAll(".answer-choice").forEach((choice) => {
    choice.disabled = true;
  });
  button.classList.add("is-correct", "is-selected");

  window.setTimeout(() => {
    setStep(3);
  }, 420);
}

tagButton.addEventListener("click", startFlow);
restartButton.addEventListener("click", startFlow);

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
  }, 400);
});

window.addEventListener("load", () => {
  queue(startFlow, 650);
});
