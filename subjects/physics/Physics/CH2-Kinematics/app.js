const problemBank = {
  graphs: [
    {
      skill: "Velocity From Slope",
      level: 1,
      problem: "A student walks from <span class='math'>x=2 m</span> to <span class='math'>x=14 m</span> in <span class='math'>6 s</span>. What is the average velocity?",
      strategies: ["Use slope", "Identify displacement", "Divide by time", "Check units"],
      answer: ["2 m/s", "2m/s", "v=2"],
      hints: [
        "Average velocity is displacement divided by elapsed time.",
        "The displacement is <span class='math'>14 m - 2 m</span>.",
        "Compute <span class='math'>12 m / 6 s</span>."
      ],
      solution: "<span class='math'>v_avg = delta x / delta t = (14-2)/6 = 2 m/s</span>."
    },
    {
      skill: "Area Under v-t Graph",
      level: 2,
      problem: "A velocity-time graph is a rectangle at <span class='math'>4 m/s</span> from <span class='math'>0</span> to <span class='math'>5 s</span>. What displacement does it represent?",
      strategies: ["Use area", "Rectangle formula", "Track signs", "Check units"],
      answer: ["20 m", "20m", "displacement=20"],
      hints: [
        "Area under a velocity-time graph gives displacement.",
        "This area is a rectangle.",
        "Use <span class='math'>base * height = 5 s * 4 m/s</span>."
      ],
      solution: "The displacement is <span class='math'>5 * 4 = 20 m</span>."
    },
    {
      skill: "Acceleration From Velocity Change",
      level: 1,
      problem: "A cart's velocity changes from <span class='math'>3 m/s</span> to <span class='math'>15 m/s</span> in <span class='math'>4 s</span>. Find the acceleration.",
      strategies: ["Use slope of v-t", "Find delta v", "Divide by delta t", "Check units"],
      answer: ["3 m/s^2", "3m/s^2", "a=3"],
      hints: [
        "Acceleration is the rate of change of velocity.",
        "<span class='math'>delta v = 15 - 3</span>.",
        "Divide by <span class='math'>4 s</span>."
      ],
      solution: "<span class='math'>a = (15-3)/4 = 3 m/s^2</span>."
    }
  ],
  constantAcceleration: [
    {
      skill: "Final Velocity",
      level: 1,
      problem: "A bike starts at <span class='math'>5 m/s</span> and accelerates at <span class='math'>2 m/s^2</span> for <span class='math'>6 s</span>. Find its final velocity.",
      strategies: ["Use v=v0+at", "List variables", "Substitute units", "Estimate first"],
      answer: ["17 m/s", "17m/s", "v=17"],
      hints: [
        "Known: <span class='math'>v0=5 m/s</span>, <span class='math'>a=2 m/s^2</span>, <span class='math'>t=6 s</span>.",
        "Use <span class='math'>v=v0+at</span>.",
        "Compute <span class='math'>5 + 2(6)</span>."
      ],
      solution: "<span class='math'>v=5+2(6)=17 m/s</span>."
    },
    {
      skill: "Displacement",
      level: 2,
      problem: "A car starts from rest and accelerates at <span class='math'>3 m/s^2</span> for <span class='math'>4 s</span>. How far does it travel?",
      strategies: ["Use x=v0t+1/2at^2", "Start from rest", "Check units", "Area under v-t"],
      answer: ["24 m", "24m"],
      hints: [
        "Starting from rest means <span class='math'>v0=0</span>.",
        "Use <span class='math'>delta x = v0t + (1/2)at^2</span>.",
        "Compute <span class='math'>(1/2)(3)(4^2)</span>."
      ],
      solution: "<span class='math'>delta x = 0 + 0.5(3)(16)=24 m</span>."
    },
    {
      skill: "No Time Equation",
      level: 2,
      problem: "A runner speeds up from <span class='math'>4 m/s</span> to <span class='math'>10 m/s</span> over <span class='math'>21 m</span>. Find the acceleration.",
      strategies: ["Use v^2=v0^2+2ax", "Solve for a", "List variables", "Check sign"],
      answer: ["2 m/s^2", "2m/s^2", "a=2"],
      hints: [
        "Time is not given, so choose the equation without time.",
        "Use <span class='math'>v^2=v0^2+2a delta x</span>.",
        "Solve <span class='math'>100=16+42a</span>."
      ],
      solution: "<span class='math'>100=16+2a(21)</span>, so <span class='math'>84=42a</span> and <span class='math'>a=2 m/s^2</span>."
    }
  ],
  freeFall: [
    {
      skill: "Drop Time",
      level: 1,
      problem: "A ball is dropped from rest and falls for <span class='math'>3.0 s</span>. Using <span class='math'>g=9.8 m/s^2</span>, how far does it fall?",
      strategies: ["Use y=1/2gt^2", "Choose downward positive", "Start from rest", "Estimate"],
      answer: ["44.1 m", "44m", "44.1m"],
      hints: [
        "Dropped from rest means initial vertical velocity is zero.",
        "Distance fallen is <span class='math'>(1/2)gt^2</span> when downward is positive.",
        "Compute <span class='math'>0.5(9.8)(3.0^2)</span>."
      ],
      solution: "<span class='math'>delta y = 0.5(9.8)(9)=44.1 m</span> downward."
    },
    {
      skill: "Thrown Upward",
      level: 2,
      problem: "A ball is thrown upward at <span class='math'>19.6 m/s</span>. How long until it reaches maximum height?",
      strategies: ["Set final v to zero", "Use v=v0+at", "Watch signs", "Use symmetry"],
      answer: ["2 s", "2.0 s", "2s"],
      hints: [
        "At maximum height, vertical velocity is zero.",
        "With upward positive, acceleration is <span class='math'>-9.8 m/s^2</span>.",
        "Solve <span class='math'>0=19.6-9.8t</span>."
      ],
      solution: "<span class='math'>t=19.6/9.8=2.0 s</span>."
    },
    {
      skill: "Impact Speed",
      level: 2,
      problem: "A rock is dropped from a height of <span class='math'>20 m</span>. Ignoring air resistance, what is its impact speed?",
      strategies: ["Use v^2=v0^2+2g y", "Start from rest", "Use energy check", "Round reasonably"],
      answer: ["19.8 m/s", "20 m/s", "19.8m/s", "20m/s"],
      hints: [
        "No time is given, so use the no-time equation.",
        "Starting from rest gives <span class='math'>v0=0</span>.",
        "Compute <span class='math'>v=sqrt(2(9.8)(20))</span>."
      ],
      solution: "<span class='math'>v=sqrt(392)=19.8 m/s</span>, about <span class='math'>20 m/s</span> downward."
    }
  ],
  projectiles: [
    {
      skill: "Horizontal Range",
      level: 1,
      problem: "A marble rolls horizontally off a table at <span class='math'>3 m/s</span> and is in the air for <span class='math'>0.80 s</span>. How far from the table does it land?",
      strategies: ["Use horizontal motion", "x=vx t", "Separate components", "Check units"],
      answer: ["2.4 m", "2.4m"],
      hints: [
        "Horizontal velocity stays constant if air resistance is ignored.",
        "Use <span class='math'>delta x = v_x t</span>.",
        "Compute <span class='math'>3(0.80)</span>."
      ],
      solution: "<span class='math'>delta x=3(0.80)=2.4 m</span>."
    },
    {
      skill: "Component Velocity",
      level: 2,
      problem: "A projectile is launched at <span class='math'>20 m/s</span> at <span class='math'>30 degrees</span> above horizontal. Find the initial vertical velocity.",
      strategies: ["Use sine", "Draw components", "Identify opposite side", "Check estimate"],
      answer: ["10 m/s", "10m/s"],
      hints: [
        "The vertical component is opposite the launch angle.",
        "Use <span class='math'>v_y=v sin(theta)</span>.",
        "<span class='math'>sin(30 degrees)=0.5</span>."
      ],
      solution: "<span class='math'>v_y=20 sin(30 degrees)=20(0.5)=10 m/s</span>."
    },
    {
      skill: "Time of Flight",
      level: 2,
      problem: "A projectile is launched and lands at the same height with initial vertical velocity <span class='math'>14.7 m/s</span>. What is its total time of flight?",
      strategies: ["Use symmetry", "Find time up", "Double it", "Use y equation"],
      answer: ["3 s", "3.0 s", "3s"],
      hints: [
        "For same launch and landing height, total time is twice the time to the top.",
        "Time to top solves <span class='math'>0=v_y-gt</span>.",
        "Compute <span class='math'>2(14.7/9.8)</span>."
      ],
      solution: "Time up is <span class='math'>14.7/9.8=1.5 s</span>, so total time is <span class='math'>3.0 s</span>."
    }
  ]
};

const modeNames = {
  graphs: "Motion Graphs",
  constantAcceleration: "Constant Acceleration",
  freeFall: "Free Fall",
  projectiles: "Projectiles"
};

const reviewNotes = {
  graphs: {
    bigIdea: "Graphs tell a physics story when you read slope and area with units.",
    bullets: [
      "Slope of a position-time graph is velocity.",
      "Slope of a velocity-time graph is acceleration.",
      "Area under a velocity-time graph is displacement.",
      "The sign tells direction, not whether the object is physically below zero."
    ]
  },
  constantAcceleration: {
    bigIdea: "Constant acceleration problems are equation-selection problems before they are arithmetic problems.",
    bullets: [
      "List knowns and unknowns before choosing an equation.",
      "Use the no-time equation when time is not given or wanted.",
      "Use units to confirm the result matches the requested quantity.",
      "A negative answer can be meaningful if it matches your chosen direction."
    ]
  },
  freeFall: {
    bigIdea: "Free fall is vertical constant-acceleration motion with acceleration due to gravity.",
    bullets: [
      "Choose a positive direction and keep signs consistent.",
      "At maximum height, vertical velocity is zero.",
      "Dropped from rest means initial velocity is zero.",
      "Ignoring air resistance makes upward and downward motion symmetric for equal heights."
    ]
  },
  projectiles: {
    bigIdea: "Projectile motion works because horizontal and vertical motion can be solved independently.",
    bullets: [
      "Horizontal velocity is constant when air resistance is ignored.",
      "Vertical acceleration is gravity.",
      "Break angled launches into components before solving.",
      "Time connects the horizontal and vertical parts of the motion."
    ]
  }
};

let currentMode = "graphs";
let currentProblemIndex = 0;
let currentHintIndex = 0;
let solvedCount = 0;
let streakCount = 0;
let selectedStrategy = "";

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

function getCurrentProblem() {
  return problemBank[currentMode][currentProblemIndex];
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, "")
    .replaceAll("−", "-")
    .replaceAll("°", "degrees")
    .replaceAll("meters", "m")
    .replaceAll("meter", "m")
    .replaceAll("seconds", "s")
    .replaceAll("second", "s");
}

function loadProblem() {
  const problem = getCurrentProblem();
  currentHintIndex = 0;
  selectedStrategy = "";

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
      selectedStrategy = strategy;
      document.querySelectorAll(".strategy-chip").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      feedbackText.innerHTML = `Good. Try using <strong>${strategy}</strong>. Before calculating, name the model and check units.`;
    });
    strategyRow.appendChild(button);
  });
}

function checkAnswer() {
  const problem = getCurrentProblem();
  const response = normalize(answerInput.value);

  if (!response) {
    feedbackText.innerHTML = "<span class='near'>Write an answer first.</span> Include units when the quantity needs them.";
    return;
  }

  const isCorrect = problem.answer.some((answer) => response.includes(normalize(answer)));

  if (isCorrect) {
    solvedCount += 1;
    streakCount += 1;
    updateStats();
    feedbackText.innerHTML = "<span class='correct'>Correct.</span> Now say why that equation or graph feature matched the situation.";
    return;
  }

  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = "<span class='incorrect'>Not quite yet.</span> Recheck the model, signs, and units before recalculating.";
}

function renderReviewNotes() {
  const notes = reviewNotes[currentMode];
  reviewNotesEl.innerHTML = `
    <p>${notes.bigIdea}</p>
    <ul>
      ${notes.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
    </ul>
  `;
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
  const problems = problemBank[currentMode];
  currentProblemIndex = (currentProblemIndex + 1) % problems.length;
  loadProblem();
}

function updateStats() {
  solvedCountEl.textContent = solvedCount;
  streakCountEl.textContent = streakCount;
}

loadProblem();
