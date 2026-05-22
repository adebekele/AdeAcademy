const problemBank = {
  momentum: [
    { skill: "Momentum", level: 1, problem: "A <span class='math'>3 kg</span> object moves at <span class='math'>4 m/s</span>. Find its momentum.", strategies: ["Use p=mv", "Track direction", "Multiply", "Use kg m/s"], answer: ["12 kgm/s", "12 kg m/s", "12kgm/s"], hints: ["Momentum is mass times velocity.", "Use <span class='math'>p=mv</span>.", "Compute <span class='math'>3(4)</span>."], solution: "<span class='math'>p=3(4)=12 kg m/s</span>." },
    { skill: "Vector Direction", level: 1, problem: "A <span class='math'>2 kg</span> cart moves left at <span class='math'>5 m/s</span>. If right is positive, what is its momentum?", strategies: ["Use sign convention", "Left is negative", "Use p=mv", "Check units"], answer: ["-10 kgm/s", "-10 kg m/s", "-10kgm/s"], hints: ["Right is positive, so left velocity is negative.", "Use <span class='math'>v=-5 m/s</span>.", "Compute <span class='math'>2(-5)</span>."], solution: "<span class='math'>p=2(-5)=-10 kg m/s</span>." }
  ],
  impulse: [
    { skill: "Impulse", level: 1, problem: "A <span class='math'>20 N</span> force acts for <span class='math'>0.50 s</span>. Find the impulse.", strategies: ["Use J=Ft", "Multiply", "Check units", "Connect to momentum"], answer: ["10 ns", "10 n s", "10kgm/s"], hints: ["Impulse is force times time.", "Use <span class='math'>J=F delta t</span>.", "Compute <span class='math'>20(0.50)</span>."], solution: "<span class='math'>J=20(0.50)=10 N s</span>, equivalent to <span class='math'>10 kg m/s</span>." },
    { skill: "Change in Momentum", level: 2, problem: "A ball's momentum changes from <span class='math'>6 kg m/s</span> right to <span class='math'>2 kg m/s</span> right. What impulse acted on it?", strategies: ["Use delta p", "Final minus initial", "Track sign", "Interpret direction"], answer: ["-4 kgm/s", "-4 kg m/s", "4 kgm/s left", "4 kg m/s left"], hints: ["Impulse equals change in momentum.", "Use final minus initial.", "<span class='math'>2-6=-4</span> with right positive."], solution: "The impulse is <span class='math'>-4 kg m/s</span>, or <span class='math'>4 kg m/s</span> left." }
  ],
  collisions: [
    { skill: "Perfectly Inelastic Collision", level: 2, problem: "A <span class='math'>2 kg</span> cart moving at <span class='math'>6 m/s</span> sticks to a <span class='math'>4 kg</span> cart at rest. Find their final speed.", strategies: ["Conserve momentum", "Stuck masses combine", "Solve for final v", "Check direction"], answer: ["2 m/s", "2m/s"], hints: ["Total momentum before equals total momentum after.", "Before: <span class='math'>2(6)+4(0)</span>.", "After: <span class='math'>(2+4)v</span>."], solution: "<span class='math'>12=6v</span>, so <span class='math'>v=2 m/s</span>." },
    { skill: "Elastic-Like Swap", level: 2, problem: "A <span class='math'>1 kg</span> cart at <span class='math'>8 m/s</span> hits and sticks to a <span class='math'>3 kg</span> cart moving at <span class='math'>0 m/s</span>. Find the combined speed.", strategies: ["Conserve momentum", "Add masses", "Use signs", "Check units"], answer: ["2 m/s", "2m/s"], hints: ["This is a sticking collision, so use one final velocity.", "Initial momentum is <span class='math'>1(8)</span>.", "Final mass is <span class='math'>4 kg</span>."], solution: "<span class='math'>8=4v</span>, so <span class='math'>v=2 m/s</span>." }
  ],
  recoil: [
    { skill: "Explosion From Rest", level: 2, problem: "Two carts start at rest. A <span class='math'>1 kg</span> cart moves right at <span class='math'>6 m/s</span> after release. A <span class='math'>3 kg</span> cart moves left. Find the left cart's speed.", strategies: ["Total momentum zero", "Opposite signs", "Solve for velocity", "Check magnitude"], answer: ["2 m/s", "2m/s", "left"],
      hints: ["Initial total momentum is zero.", "Let right be positive.", "Solve <span class='math'>1(6)+3v=0</span>."], solution: "<span class='math'>6+3v=0</span>, so <span class='math'>v=-2 m/s</span>. The left cart's speed is <span class='math'>2 m/s</span>." },
    { skill: "Recoil Velocity", level: 2, problem: "A <span class='math'>0.05 kg</span> ball is thrown forward at <span class='math'>20 m/s</span> from a <span class='math'>1.0 kg</span> cart initially at rest. Find the cart velocity.", strategies: ["Conserve momentum", "Initial zero", "Opposite direction", "Solve signs"], answer: ["-1 m/s", "-1.0 m/s", "1 m/s backward", "1.0 m/s backward"], hints: ["The total momentum starts at zero.", "Ball momentum is <span class='math'>0.05(20)=1 kg m/s</span> forward.", "The cart must have equal momentum backward."], solution: "The cart momentum is <span class='math'>-1 kg m/s</span>, so <span class='math'>v=-1.0 m/s</span>." }
  ]
};

const modeNames = { momentum: "Momentum", impulse: "Impulse", collisions: "Collisions", recoil: "Recoil" };
const reviewNotes = {
  momentum: { bigIdea: "Momentum is mass times velocity, so it is a vector.", bullets: ["Direction matters.", "Use signs consistently.", "Momentum has units of <span class='math'>kg m/s</span>."] },
  impulse: { bigIdea: "Impulse is the change in momentum.", bullets: ["Impulse can be found from force times time.", "Area under a force-time graph is impulse.", "Longer stopping time lowers average force for the same momentum change."] },
  collisions: { bigIdea: "Total momentum is conserved when external impulse is negligible.", bullets: ["Define the system before and after.", "Sticking collisions share one final velocity.", "Kinetic energy may not be conserved."] },
  recoil: { bigIdea: "Recoil problems begin with zero total momentum and end with equal opposite momenta.", bullets: ["Objects move in opposite directions after release.", "The heavier object usually has the smaller speed.", "Signs tell direction."] }
};

let currentMode = "momentum";
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
  return value.toLowerCase().replace(/\s+/g, "").replaceAll("newtonseconds", "ns").replaceAll("n*s", "ns").replaceAll("kg m/s", "kgm/s");
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
  feedbackText.innerHTML = "Pick a momentum model, then try the problem. Hints reveal one step at a time.";
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
      feedbackText.innerHTML = `Good. Try using <strong>${strategy}</strong>. Define the system and direction first.`;
    });
    strategyRow.appendChild(button);
  });
}

function checkAnswer() {
  const response = normalize(answerInput.value);
  if (!response) {
    feedbackText.innerHTML = "<span class='near'>Write an answer first.</span> Include direction when it matters.";
    return;
  }
  const isCorrect = getCurrentProblem().answer.some((answer) => response.includes(normalize(answer)));
  if (isCorrect) {
    solvedCount += 1;
    streakCount += 1;
    updateStats();
    feedbackText.innerHTML = "<span class='correct'>Correct.</span> Now explain what stayed conserved.";
    return;
  }
  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = "<span class='incorrect'>Not quite yet.</span> Recheck the signs and before-after momentum.";
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
