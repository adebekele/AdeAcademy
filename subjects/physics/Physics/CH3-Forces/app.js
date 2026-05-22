const problemBank = {
  freeBody: [
    {
      skill: "Force Identification",
      level: 1,
      problem: "A book rests on a table. Which two forces act on the book?",
      strategies: ["Name interactions", "Draw the object", "Separate force pairs", "Check vertical balance"],
      answer: ["weight", "normal"],
      hints: ["Gravity pulls the book downward.", "The table pushes the book upward.", "Do not include forces the book applies to other objects."],
      solution: "The forces on the book are weight downward and the normal force upward."
    },
    {
      skill: "Tension",
      level: 1,
      problem: "A hanging mass is at rest on a string. If its weight is <span class='math'>12 N</span>, what is the tension?",
      strategies: ["Use equilibrium", "Net force zero", "Draw forces", "Check direction"],
      answer: ["12 n", "12n"],
      hints: ["At rest means acceleration is zero.", "So the net force is zero.", "Tension upward must balance weight downward."],
      solution: "The tension is <span class='math'>12 N</span> upward."
    }
  ],
  newton: [
    {
      skill: "Newton's Second Law",
      level: 1,
      problem: "A <span class='math'>4 kg</span> cart has a net force of <span class='math'>20 N</span>. Find its acceleration.",
      strategies: ["Use Fnet=ma", "Solve for a", "Check units", "Estimate"],
      answer: ["5 m/s^2", "5m/s^2", "a=5"],
      hints: ["Use <span class='math'>F_net=ma</span>.", "Solve for <span class='math'>a=F_net/m</span>.", "Compute <span class='math'>20/4</span>."],
      solution: "<span class='math'>a=20/4=5 m/s^2</span>."
    },
    {
      skill: "Net Force",
      level: 2,
      problem: "Two horizontal forces act on a box: <span class='math'>30 N</span> right and <span class='math'>12 N</span> left. The box has mass <span class='math'>6 kg</span>. Find the acceleration.",
      strategies: ["Choose positive direction", "Find net force", "Use Fnet=ma", "Check sign"],
      answer: ["3 m/s^2", "3m/s^2", "right"],
      hints: ["Take right as positive.", "Net force is <span class='math'>30-12</span>.", "Then divide by mass."],
      solution: "<span class='math'>F_net=18 N</span> right, so <span class='math'>a=18/6=3 m/s^2</span> right."
    }
  ],
  friction: [
    {
      skill: "Kinetic Friction",
      level: 2,
      problem: "A <span class='math'>10 kg</span> box slides on a level floor with <span class='math'>mu_k=0.20</span>. Find the kinetic friction force using <span class='math'>g=9.8 m/s^2</span>.",
      strategies: ["Find normal force", "Use fk=mu N", "Level surface", "Check units"],
      answer: ["19.6 n", "20 n", "19.6n", "20n"],
      hints: ["On a level floor with no vertical acceleration, <span class='math'>N=mg</span>.", "Compute <span class='math'>N=10(9.8)</span>.", "Then use <span class='math'>f_k=mu_k N</span>."],
      solution: "<span class='math'>N=98 N</span>, so <span class='math'>f_k=0.20(98)=19.6 N</span>."
    },
    {
      skill: "Static Friction Limit",
      level: 2,
      problem: "A crate has normal force <span class='math'>80 N</span> and <span class='math'>mu_s=0.50</span>. What is the maximum static friction?",
      strategies: ["Use fs max", "Multiply coefficient", "Interpret maximum", "Check units"],
      answer: ["40 n", "40n"],
      hints: ["Maximum static friction is <span class='math'>mu_s N</span>.", "Substitute <span class='math'>0.50</span> and <span class='math'>80 N</span>.", "Static friction can be less than this if less is needed."],
      solution: "<span class='math'>f_s,max=0.50(80)=40 N</span>."
    }
  ],
  inclines: [
    {
      skill: "Down-Slope Component",
      level: 2,
      problem: "A <span class='math'>5 kg</span> block is on a frictionless <span class='math'>30 degree</span> incline. Find the component of weight down the ramp.",
      strategies: ["Use mg sin theta", "Draw axes", "Find weight first", "Check direction"],
      answer: ["24.5 n", "25 n", "24.5n", "25n"],
      hints: ["The down-ramp component is <span class='math'>mg sin(theta)</span>.", "Weight is <span class='math'>5(9.8)=49 N</span>.", "<span class='math'>sin(30 degrees)=0.5</span>."],
      solution: "<span class='math'>F_parallel=49(0.5)=24.5 N</span> down the ramp."
    },
    {
      skill: "Frictionless Acceleration",
      level: 2,
      problem: "On a frictionless <span class='math'>30 degree</span> incline, what is the acceleration of a sliding block?",
      strategies: ["Use g sin theta", "Cancel mass", "Draw components", "Check reasonableness"],
      answer: ["4.9 m/s^2", "4.9m/s^2"],
      hints: ["For a frictionless incline, <span class='math'>a=g sin(theta)</span>.", "<span class='math'>sin(30 degrees)=0.5</span>.", "Compute <span class='math'>9.8(0.5)</span>."],
      solution: "<span class='math'>a=9.8 sin(30 degrees)=4.9 m/s^2</span> down the ramp."
    }
  ]
};

const modeNames = { freeBody: "Free-Body Diagrams", newton: "Newton's Laws", friction: "Friction", inclines: "Inclined Planes" };
const reviewNotes = {
  freeBody: { bigIdea: "A free-body diagram shows only forces acting on the chosen object.", bullets: ["Start by choosing the system.", "Name forces by interaction: gravity, normal, tension, friction, applied.", "Do not draw forces the object exerts on something else."] },
  newton: { bigIdea: "Net force, not total force names, determines acceleration.", bullets: ["Add forces as vectors.", "Zero net force means constant velocity.", "Use <span class='math'>F_net=ma</span> after finding the net force."] },
  friction: { bigIdea: "Friction depends on the normal force and the surface coefficient.", bullets: ["Kinetic friction is usually <span class='math'>mu_k N</span>.", "Static friction adjusts up to a maximum.", "Normal force is not always equal to weight."] },
  inclines: { bigIdea: "Inclined-plane problems get easier when axes are parallel and perpendicular to the ramp.", bullets: ["Weight splits into parallel and perpendicular components.", "The parallel component is <span class='math'>mg sin(theta)</span>.", "The perpendicular component helps find normal force."] }
};

let currentMode = "freeBody";
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
  return value.toLowerCase().replace(/\s+/g, "").replaceAll("newtons", "n").replaceAll("newton", "n").replaceAll("degrees", "degree");
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
  feedbackText.innerHTML = "Pick a model, then try the problem. Hints reveal one step at a time.";
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
      feedbackText.innerHTML = `Good. Try using <strong>${strategy}</strong>. Start with the force diagram before calculating.`;
    });
    strategyRow.appendChild(button);
  });
}

function checkAnswer() {
  const problem = getCurrentProblem();
  const response = normalize(answerInput.value);
  if (!response) {
    feedbackText.innerHTML = "<span class='near'>Write an answer first.</span> Include direction when it matters.";
    return;
  }
  const isCorrect = problem.answer.some((answer) => response.includes(normalize(answer)));
  if (isCorrect) {
    solvedCount += 1;
    streakCount += 1;
    updateStats();
    feedbackText.innerHTML = "<span class='correct'>Correct.</span> Connect the result back to the net force.";
    return;
  }
  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = "<span class='incorrect'>Not quite yet.</span> Recheck the forces and signs.";
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
  const problem = getCurrentProblem();
  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = `<strong>Solution:</strong> ${problem.solution}`;
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
