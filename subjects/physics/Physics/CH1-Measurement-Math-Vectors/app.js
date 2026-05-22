const problemBank = {
  standardsMatter: [
    {
      skill: "Measurement Standards",
      level: 1,
      problem: "Match each SI base quantity with its unit: length, mass, and time.",
      strategies: ["Recall SI units", "Use base quantities", "Check symbols", "Separate quantity from unit"],
      answer: [["length", "meter"], ["mass", "kilogram"], ["time", "second"]],
      hints: [
        "The SI unit for length has symbol <span class='math'>m</span>.",
        "The SI unit for mass has symbol <span class='math'>kg</span>.",
        "The SI unit for time has symbol <span class='math'>s</span>."
      ],
      solution: "Length is measured in meters, mass in kilograms, and time in seconds."
    },
    {
      skill: "Base Units",
      level: 1,
      problem: "A speed is written as <span class='math'>12 m/s</span>. Which base units appear in this derived unit?",
      strategies: ["Read the compound unit", "Separate numerator and denominator", "Name quantities", "Check symbols"],
      answer: [["meter", "second"], ["m", "s"]],
      hints: [
        "Speed is distance divided by time.",
        "The numerator unit is <span class='math'>m</span>.",
        "The denominator unit is <span class='math'>s</span>."
      ],
      solution: "The derived unit <span class='math'>m/s</span> uses meters for length and seconds for time."
    },
    {
      skill: "Matter Model",
      level: 1,
      problem: "In a simple matter model, atoms are built from protons, neutrons, and electrons. Which particles are found in the nucleus?",
      strategies: ["Recall atom structure", "Separate nucleus from cloud", "Use charge clues", "Name particles"],
      answer: [["protons", "neutrons"], ["proton", "neutron"]],
      hints: [
        "Electrons occupy the region outside the nucleus.",
        "The nucleus contains most of the atom's mass.",
        "The two nuclear particles are the positive particle and the neutral particle."
      ],
      solution: "The nucleus contains protons and neutrons. Electrons are outside the nucleus."
    }
  ],
  dimensions: [
    {
      skill: "Dimensional Check",
      level: 1,
      problem: "Check whether <span class='math'>x = vt</span> is dimensionally reasonable for displacement.",
      strategies: ["Write dimensions", "Multiply dimensions", "Compare sides", "Ignore numbers"],
      answer: ["yes", "reasonable", "dimensionally correct", "length"],
      hints: [
        "Displacement has dimension <span class='math'>L</span>.",
        "Velocity has dimension <span class='math'>L/T</span>.",
        "Multiply velocity by time."
      ],
      solution: "<span class='math'>[vt]=(L/T)(T)=L</span>, so the formula has the dimension of displacement."
    },
    {
      skill: "Formula Testing",
      level: 2,
      problem: "A student proposes <span class='math'>v = at^2</span>. Is this dimensionally valid for velocity?",
      strategies: ["Compare dimensions", "Use acceleration dimensions", "Track time powers", "Reject if units mismatch"],
      answer: ["no", "not valid", "dimensionally incorrect"],
      hints: [
        "Velocity has dimension <span class='math'>L/T</span>.",
        "Acceleration has dimension <span class='math'>L/T^2</span>.",
        "Now multiply acceleration by <span class='math'>t^2</span>."
      ],
      solution: "<span class='math'>[at^2]=(L/T^2)(T^2)=L</span>, not <span class='math'>L/T</span>. The equation is not dimensionally valid for velocity."
    },
    {
      skill: "Find Dimensions",
      level: 2,
      problem: "Force is defined by <span class='math'>F=ma</span>. What are the dimensions of force?",
      strategies: ["Use F=ma", "Write mass dimension", "Write acceleration dimension", "Multiply"],
      answer: ["ml/t^2", "m l/t^2", "mass length time", "m*l/t^2"],
      hints: [
        "Mass has dimension <span class='math'>M</span>.",
        "Acceleration has dimension <span class='math'>L/T^2</span>.",
        "Multiply the dimensions of mass and acceleration."
      ],
      solution: "<span class='math'>[F]=M(L/T^2)=ML/T^2</span>."
    }
  ],
  measurement: [
    {
      skill: "Significant Figures",
      level: 1,
      problem: "How many significant figures are in <span class='math'>0.00420 m</span>?",
      strategies: ["Ignore leading zeros", "Count measured digits", "Keep trailing decimal zeros", "Check notation"],
      answer: ["3", "three"],
      hints: [
        "Leading zeros before the first nonzero digit are placeholders.",
        "The digits <span class='math'>4</span>, <span class='math'>2</span>, and the final <span class='math'>0</span> are measured digits.",
        "A trailing zero after a decimal point is significant."
      ],
      solution: "<span class='math'>0.00420</span> has three significant figures: <span class='math'>4</span>, <span class='math'>2</span>, and the final <span class='math'>0</span>."
    },
    {
      skill: "Uncertainty",
      level: 2,
      problem: "A ruler marked every <span class='math'>1 mm</span> is used to measure a length. What is a reasonable reading uncertainty?",
      strategies: ["Use half the smallest division", "Identify instrument limit", "Think measurement resolution", "State units"],
      answer: ["0.5 mm", "+/-0.5 mm", "±0.5 mm", "half a millimeter"],
      hints: [
        "A common estimate is half of the smallest marked division.",
        "The smallest division is <span class='math'>1 mm</span>.",
        "Half of <span class='math'>1 mm</span> is <span class='math'>0.5 mm</span>."
      ],
      solution: "A reasonable uncertainty is about <span class='math'>+/-0.5 mm</span>."
    },
    {
      skill: "Sig Fig Calculation",
      level: 2,
      problem: "Calculate <span class='math'>2.4 m * 3.15 m</span> and report the answer with the correct number of significant figures.",
      strategies: ["Multiply first", "Use fewest sig figs", "Round last", "Include units"],
      answer: ["7.6 m^2", "7.6m^2", "7.6 square meters"],
      hints: [
        "First multiply <span class='math'>2.4 * 3.15</span>.",
        "For multiplication, the answer should have the same number of significant figures as the factor with the fewest.",
        "<span class='math'>2.4</span> has two significant figures."
      ],
      solution: "<span class='math'>2.4 * 3.15 = 7.56</span>, which rounds to <span class='math'>7.6 m^2</span>."
    }
  ],
  conversions: [
    {
      skill: "Unit Conversion",
      level: 1,
      problem: "Convert <span class='math'>72 km/h</span> to <span class='math'>m/s</span>.",
      strategies: ["Use conversion factors", "Cancel units", "Convert km to m", "Convert hours to seconds"],
      answer: ["20 m/s", "20m/s"],
      hints: [
        "Use <span class='math'>1 km = 1000 m</span>.",
        "Use <span class='math'>1 h = 3600 s</span>.",
        "Compute <span class='math'>72 * 1000 / 3600</span>."
      ],
      solution: "<span class='math'>72 km/h = 72(1000 m)/(3600 s)=20 m/s</span>."
    },
    {
      skill: "Metric Prefixes",
      level: 1,
      problem: "Convert <span class='math'>3.5 ms</span> to seconds.",
      strategies: ["Identify prefix", "Use milli", "Move decimal", "Check smaller unit"],
      answer: ["0.0035 s", "3.5x10^-3 s", "3.5e-3 s"],
      hints: [
        "The prefix milli means <span class='math'>10^-3</span>.",
        "A millisecond is one-thousandth of a second.",
        "Multiply <span class='math'>3.5</span> by <span class='math'>10^-3</span>."
      ],
      solution: "<span class='math'>3.5 ms = 3.5 * 10^-3 s = 0.0035 s</span>."
    },
    {
      skill: "Order of Magnitude",
      level: 2,
      problem: "Estimate the order of magnitude of the number of seconds in one year.",
      strategies: ["Round inputs", "Multiply factors", "Use powers of ten", "Keep only magnitude"],
      answer: ["10^7", "10^7 s", "ten million", "3x10^7"],
      hints: [
        "Use about <span class='math'>365 days</span> per year.",
        "One day has about <span class='math'>24 * 3600</span> seconds, close to <span class='math'>10^5</span> seconds.",
        "<span class='math'>365</span> is close to a few times <span class='math'>10^2</span>."
      ],
      solution: "One year has about <span class='math'>3 * 10^7 s</span>, so the order of magnitude is <span class='math'>10^7 s</span>."
    }
  ],
  vectors: [
    {
      skill: "Right Triangle Trigonometry",
      level: 1,
      problem: "A right triangle has hypotenuse <span class='math'>10</span> and angle <span class='math'>30 degrees</span>. Find the side opposite the angle.",
      strategies: ["Use sine", "Identify opposite side", "Use SOH-CAH-TOA", "Check estimate"],
      answer: ["5", "5 units"],
      hints: [
        "Sine connects opposite side and hypotenuse.",
        "Use <span class='math'>sin(theta)=opposite/hypotenuse</span>.",
        "<span class='math'>sin(30 degrees)=0.5</span>."
      ],
      solution: "<span class='math'>opposite=10 sin(30 degrees)=10(0.5)=5</span>."
    },
    {
      skill: "Vector Components",
      level: 2,
      problem: "A vector has magnitude <span class='math'>20 m</span> at <span class='math'>60 degrees</span> above the +x-axis. Find its x- and y-components.",
      strategies: ["Use cosine for x", "Use sine for y", "Draw axes", "Check signs"],
      answer: [["10", "17.3"], ["10 m", "17.3 m"], ["x=10", "y=17.3"]],
      hints: [
        "The x-component is adjacent to the angle.",
        "Use <span class='math'>A_x=A cos(theta)</span> and <span class='math'>A_y=A sin(theta)</span>.",
        "<span class='math'>cos(60 degrees)=0.5</span> and <span class='math'>sin(60 degrees)=0.866</span>."
      ],
      solution: "<span class='math'>A_x=20 cos(60 degrees)=10 m</span> and <span class='math'>A_y=20 sin(60 degrees)=17.3 m</span>."
    },
    {
      skill: "Resultant Vector",
      level: 2,
      problem: "Add two perpendicular displacement vectors: <span class='math'>3 m</span> east and <span class='math'>4 m</span> north. Find the magnitude of the resultant.",
      strategies: ["Use Pythagorean theorem", "Draw components", "Recognize 3-4-5", "Check direction"],
      answer: ["5 m", "5m"],
      hints: [
        "East and north are perpendicular.",
        "Use <span class='math'>R=sqrt(x^2+y^2)</span>.",
        "This is a <span class='math'>3-4-5</span> triangle."
      ],
      solution: "<span class='math'>R=sqrt(3^2+4^2)=5 m</span>."
    }
  ],
  strategy: [
    {
      skill: "Problem Setup",
      level: 1,
      problem: "Before solving a physics problem, list three setup steps that make the calculation safer.",
      strategies: ["Read for quantity", "List knowns", "Choose model", "Check units"],
      answer: [["knowns", "unknown"], ["units", "equation"], ["diagram", "units"]],
      hints: [
        "Start by identifying what the problem asks for.",
        "List knowns and unknowns with units.",
        "Choose a model or equation only after the physical situation is clear."
      ],
      solution: "A strong setup includes identifying the unknown, listing knowns with units, drawing or choosing a representation, selecting a model, and checking dimensions."
    },
    {
      skill: "Reasonableness Check",
      level: 2,
      problem: "A student calculates a person's walking speed as <span class='math'>300 m/s</span>. What quick check shows this is probably wrong?",
      strategies: ["Use estimation", "Compare to everyday values", "Check order of magnitude", "Use units"],
      answer: ["too large", "order of magnitude", "unreasonable", "faster than sound", "estimate"],
      hints: [
        "A typical walking speed is around <span class='math'>1 m/s</span>.",
        "<span class='math'>300 m/s</span> is hundreds of times larger.",
        "A reasonableness check compares the answer to familiar scales."
      ],
      solution: "The value is unreasonable: walking speeds are roughly <span class='math'>1 m/s</span>, not hundreds of meters per second."
    }
  ]
};

const modeNames = {
  standardsMatter: "Standards and Matter",
  dimensions: "Dimensional Analysis",
  measurement: "Measurement Quality",
  conversions: "Conversions and Estimates",
  vectors: "Coordinates, Trig, Vectors",
  strategy: "Problem Strategy"
};

const reviewNotes = {
  standardsMatter: {
    bigIdea: "Physics begins by agreeing on measurable quantities and standard units.",
    bullets: [
      "Length, mass, and time are foundational measured quantities.",
      "Derived units combine base units, such as meters per second.",
      "Matter is modeled as atoms made from smaller particles.",
      "A unit is part of the meaning of a physical quantity."
    ]
  },
  dimensions: {
    bigIdea: "Dimensional analysis checks whether an equation could describe the requested physical quantity.",
    bullets: [
      "Dimensions track physical type, not numerical size.",
      "Only quantities with the same dimensions can be added or compared.",
      "A dimensionally wrong equation cannot be correct.",
      "A dimensionally correct equation still needs physics reasoning."
    ]
  },
  measurement: {
    bigIdea: "Every measurement has limited precision, so answers should not claim more detail than the data supports.",
    bullets: [
      "Uncertainty describes the range of reasonable measured values.",
      "Significant figures communicate measurement precision.",
      "Leading zeros are placeholders, not significant figures.",
      "For multiplication and division, round to the fewest significant figures."
    ]
  },
  conversions: {
    bigIdea: "Unit conversions preserve the same physical quantity while changing how it is expressed.",
    bullets: [
      "Conversion factors are ratios equal to 1.",
      "Cancel units like algebraic factors.",
      "Metric prefixes are powers of ten.",
      "Order-of-magnitude estimates focus on scale, not exact detail."
    ]
  },
  vectors: {
    bigIdea: "Vectors carry both magnitude and direction, so components make two-dimensional motion calculable.",
    bullets: [
      "Coordinate systems define positive and negative directions.",
      "Sine and cosine connect vector magnitude to components.",
      "Perpendicular components combine with the Pythagorean theorem.",
      "Direction signs matter as much as numerical size."
    ]
  },
  strategy: {
    bigIdea: "Good physics problem solving is a loop: represent, calculate, and check.",
    bullets: [
      "Start with the physical situation, not the equation list.",
      "Write knowns and unknowns with units.",
      "Choose a model that matches the situation.",
      "Check the answer with units, signs, and order of magnitude."
    ]
  }
};

let currentMode = "standardsMatter";
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

function getCurrentProblem() {
  return problemBank[currentMode][currentProblemIndex];
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, "")
    .replaceAll("metres", "meters")
    .replaceAll("metre", "meter")
    .replaceAll("seconds", "second")
    .replaceAll("kilograms", "kilogram")
    .replaceAll("±", "+/-")
    .replaceAll("×", "x")
    .replaceAll("*", "x")
    .replaceAll("degrees", "degree")
    .replaceAll("squaremeters", "m^2");
}

function loadProblem() {
  const problem = getCurrentProblem();
  currentHintIndex = 0;

  modeLabel.textContent = modeNames[currentMode];
  skillLabel.textContent = problem.skill;
  difficultyLabel.textContent = `Level ${problem.level}`;
  problemText.innerHTML = problem.problem;
  answerInput.value = "";
  feedbackText.innerHTML = "Pick a strategy, then try the problem. Hints reveal one step at a time.";
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
      feedbackText.innerHTML = `Good. Try using <strong>${strategy}</strong>. Before finalizing, check units and reasonableness.`;
    });
    strategyRow.appendChild(button);
  });
}

function checkAnswer() {
  const problem = getCurrentProblem();
  const response = normalize(answerInput.value);

  if (!response) {
    feedbackText.innerHTML = "<span class='near'>Write an answer first.</span> A short phrase or expression is enough.";
    return;
  }

  const isCorrect = problem.answer.some((answer) => {
    if (Array.isArray(answer)) {
      return answer.every((part) => response.includes(normalize(part)));
    }
    return response.includes(normalize(answer));
  });

  if (isCorrect) {
    solvedCount += 1;
    streakCount += 1;
    updateStats();
    feedbackText.innerHTML = "<span class='correct'>Correct.</span> Now connect the answer to units, dimensions, or direction.";
    return;
  }

  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = "<span class='incorrect'>Not quite yet.</span> Recheck the units, significant figures, or component signs.";
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
