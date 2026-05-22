const problemBank = {
  work: [
    { skill: "Constant Force Work", level: 1, problem: "A <span class='math'>15 N</span> force pushes a box <span class='math'>4 m</span> in the same direction. How much work is done?", strategies: ["Use W=Fd", "Check direction", "Multiply", "Use joules"], answer: ["60 j", "60j"], hints: ["Work is force times displacement when they point the same way.", "Use <span class='math'>W=Fd</span>.", "Compute <span class='math'>15(4)</span>."], solution: "<span class='math'>W=15(4)=60 J</span>." },
    { skill: "Negative Work", level: 2, problem: "Friction of <span class='math'>8 N</span> acts opposite a <span class='math'>5 m</span> displacement. What work does friction do?", strategies: ["Use sign", "Opposite direction", "W=-Fd", "Check energy loss"], answer: ["-40 j", "-40j"], hints: ["A force opposite displacement does negative work.", "Use <span class='math'>W=-Fd</span>.", "Compute <span class='math'>-8(5)</span>."], solution: "Friction does <span class='math'>-40 J</span> of work." }
  ],
  kinetic: [
    { skill: "Kinetic Energy", level: 1, problem: "Find the kinetic energy of a <span class='math'>2 kg</span> cart moving at <span class='math'>3 m/s</span>.", strategies: ["Use K=1/2mv^2", "Square speed", "Check joules", "Estimate"], answer: ["9 j", "9j"], hints: ["Kinetic energy depends on speed squared.", "Use <span class='math'>K=(1/2)mv^2</span>.", "Compute <span class='math'>0.5(2)(3^2)</span>."], solution: "<span class='math'>K=0.5(2)(9)=9 J</span>." },
    { skill: "Work-Energy Theorem", level: 2, problem: "A net work of <span class='math'>50 J</span> is done on a <span class='math'>5 kg</span> object starting from rest. Find its final speed.", strategies: ["Use W=delta K", "Start from rest", "Solve for v", "Check units"], answer: ["4.47 m/s", "4.5 m/s", "4.47m/s", "4.5m/s"], hints: ["Net work changes kinetic energy.", "Starting from rest means initial kinetic energy is zero.", "Solve <span class='math'>50=0.5(5)v^2</span>."], solution: "<span class='math'>v=sqrt(20)=4.47 m/s</span>, about <span class='math'>4.5 m/s</span>." }
  ],
  potential: [
    { skill: "Gravitational Potential", level: 1, problem: "A <span class='math'>3 kg</span> object is lifted <span class='math'>2 m</span>. Find the gain in gravitational potential energy using <span class='math'>g=9.8 m/s^2</span>.", strategies: ["Use mgh", "Identify height change", "Check joules", "Multiply"], answer: ["58.8 j", "59 j", "58.8j", "59j"], hints: ["Gravitational potential energy change is <span class='math'>mg delta h</span>.", "Use <span class='math'>3(9.8)(2)</span>.", "Round reasonably if needed."], solution: "<span class='math'>delta U_g=3(9.8)(2)=58.8 J</span>." },
    { skill: "Spring Energy", level: 2, problem: "A spring with <span class='math'>k=200 N/m</span> is compressed <span class='math'>0.10 m</span>. How much elastic potential energy is stored?", strategies: ["Use 1/2kx^2", "Square compression", "Check units", "Estimate"], answer: ["1 j", "1.0 j", "1j"], hints: ["Spring energy is <span class='math'>(1/2)kx^2</span>.", "The compression must be in meters.", "Compute <span class='math'>0.5(200)(0.10^2)</span>."], solution: "<span class='math'>U_s=0.5(200)(0.01)=1.0 J</span>." }
  ],
  power: [
    { skill: "Average Power", level: 1, problem: "A motor does <span class='math'>600 J</span> of work in <span class='math'>3 s</span>. What is its average power?", strategies: ["Use P=W/t", "Divide energy by time", "Use watts", "Check units"], answer: ["200 w", "200w"], hints: ["Power is energy transfer per time.", "Use <span class='math'>P=W/t</span>.", "Compute <span class='math'>600/3</span>."], solution: "<span class='math'>P=600/3=200 W</span>." },
    { skill: "Power From Force and Speed", level: 2, problem: "A car moves at <span class='math'>12 m/s</span> while a driving force of <span class='math'>500 N</span> acts forward. Find the power.", strategies: ["Use P=Fv", "Same direction", "Multiply", "Use watts"], answer: ["6000 w", "6000w", "6 kw", "6kw"], hints: ["When force and velocity point the same way, <span class='math'>P=Fv</span>.", "Substitute <span class='math'>500 N</span> and <span class='math'>12 m/s</span>.", "Convert to kW only if desired."], solution: "<span class='math'>P=500(12)=6000 W=6 kW</span>." }
  ]
};

const modeNames = { work: "Work", kinetic: "Kinetic Energy", potential: "Potential Energy", power: "Power" };
const reviewNotes = {
  work: { bigIdea: "Work transfers energy when a force acts through a displacement.", bullets: ["Positive work adds energy.", "Negative work removes energy.", "Only the force component along displacement does work."] },
  kinetic: { bigIdea: "Kinetic energy depends on mass and the square of speed.", bullets: ["Doubling speed quadruples kinetic energy.", "Net work equals change in kinetic energy.", "Kinetic energy is a scalar even though velocity is a vector."] },
  potential: { bigIdea: "Potential energy stores energy because of position or configuration.", bullets: ["Gravitational potential depends on height change.", "Spring potential depends on compression or stretch squared.", "Choose a consistent zero height."] },
  power: { bigIdea: "Power measures how quickly energy is transferred.", bullets: ["One watt is one joule per second.", "Higher power can mean the same work in less time.", "For constant force along motion, <span class='math'>P=Fv</span>."] }
};

let currentMode = "work";
let currentProblemIndex = 0;
let currentHintIndex = 0;
let solvedCount = 0;
let streakCount = 0;

const modeButtons = document.querySelectorAll(".mode-button");
const modeLabel = document.getElementById("modeLabel");
const skillLabel = document.getElementById("skillLabel");
const difficultyLabel = document.getElementById("difficultyLabel");
const problemText = document.getElementById("problemText");
const strategyRow = document.getElementById("strategyRow");
const answerInput = document.getElementById("answerInput");
const feedbackText = document.getElementById("feedbackText");
const hintList = document.getElementById("hintList");
const reviewNotesEl = document.getElementById("reviewNotes");
const solvedCountEl = document.getElementById("solvedCount");
const streakCountEl = document.getElementById("streakCount");

document.getElementById("checkButton").addEventListener("click", checkAnswer);
document.getElementById("hintButton").addEventListener("click", showHint);
document.getElementById("solutionButton").addEventListener("click", showSolution);
document.getElementById("nextButton").addEventListener("click", nextProblem);

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentMode = button.dataset.mode;
    currentProblemIndex = 0;
    modeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    loadProblem();
  });
});

function normalize(value) {
  return value.toLowerCase().replace(/\s+/g, "").replaceAll("joules", "j").replaceAll("joule", "j").replaceAll("watts", "w").replaceAll("watt", "w");
}

function getCurrentProblem() {
  return problemBank[currentMode][currentProblemIndex];
}

function loadProblem() {
  const problem = getCurrentProblem();
  currentHintIndex = 0;
  modeLabel.textContent = modeNames[currentMode];
  skillLabel.textContent = problem.skill;
  difficultyLabel.textContent = `Level ${problem.level}`;
  problemText.innerHTML = problem.problem;
  answerInput.value = "";
  feedbackText.innerHTML = "Pick an energy model, then try the problem. Hints reveal one step at a time.";
  hintList.innerHTML = "";
  strategyRow.innerHTML = "";
  renderReviewNotes();
  problem.strategies.forEach((strategy) => {
    const button = document.createElement("button");
    button.className = "strategy-chip";
    button.textContent = strategy;
    button.addEventListener("click", () => {
      document.querySelectorAll(".strategy-chip").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      feedbackText.innerHTML = `Good. Try using <strong>${strategy}</strong>. Identify where energy starts and ends.`;
    });
    strategyRow.appendChild(button);
  });
}

function checkAnswer() {
  const response = normalize(answerInput.value);
  if (!response) {
    feedbackText.innerHTML = "<span class='near'>Write an answer first.</span> Include units when needed.";
    return;
  }
  const isCorrect = getCurrentProblem().answer.some((answer) => response.includes(normalize(answer)));
  if (isCorrect) {
    solvedCount += 1;
    streakCount += 1;
    updateStats();
    feedbackText.innerHTML = "<span class='correct'>Correct.</span> Now connect the result to the energy transfer.";
    return;
  }
  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = "<span class='incorrect'>Not quite yet.</span> Recheck signs, units, and the energy model.";
}

function renderReviewNotes() {
  const notes = reviewNotes[currentMode];
  reviewNotesEl.innerHTML = `<p>${notes.bigIdea}</p><ul>${notes.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`;
}

function showHint() {
  const problem = getCurrentProblem();
  if (currentHintIndex >= problem.hints.length) {
    feedbackText.innerHTML = "That is the full hint trail. Try finishing from here, or open the solution.";
    return;
  }
  const item = document.createElement("li");
  item.innerHTML = problem.hints[currentHintIndex];
  hintList.appendChild(item);
  currentHintIndex += 1;
  feedbackText.innerHTML = "Use the newest hint, then pause before revealing another one.";
}

function showSolution() {
  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = `<strong>Solution:</strong> ${getCurrentProblem().solution}`;
}

function nextProblem() {
  currentProblemIndex = (currentProblemIndex + 1) % problemBank[currentMode].length;
  loadProblem();
}

function updateStats() {
  solvedCountEl.textContent = solvedCount;
  streakCountEl.textContent = streakCount;
}

loadProblem();
