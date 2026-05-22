const problemBank = {
  arithmetic: [
    {
      skill: "Add and Subtract",
      level: 1,
      problem: "Simplify <span class='math'>(4+3i)+(-7+5i)</span>.",
      strategies: ["Combine like parts", "Use a+bi form", "Group real and imaginary", "Check with coordinates"],
      answer: ["-3+8i"],
      hints: [
        "Combine real parts with real parts.",
        "Combine imaginary parts with imaginary parts.",
        "<span class='math'>4+(-7)=-3</span> and <span class='math'>3i+5i=8i</span>."
      ],
      solution: "<span class='math'>(4+3i)+(-7+5i)=-3+8i</span>."
    },
    {
      skill: "Multiplication",
      level: 2,
      problem: "Simplify <span class='math'>(2-3i)(5+i)</span>.",
      strategies: ["Distribute", "Replace i^2", "FOIL", "Check standard form"],
      answer: ["13-13i"],
      hints: [
        "Distribute all four products.",
        "You should get <span class='math'>10+2i-15i-3i^2</span>.",
        "Replace <span class='math'>i^2</span> with <span class='math'>-1</span>."
      ],
      solution: "<span class='math'>(2-3i)(5+i)=10+2i-15i-3i^2=10-13i+3=13-13i</span>."
    },
    {
      skill: "Division",
      level: 2,
      problem: "Write <span class='math'>(3+4i)/(1-2i)</span> in standard form.",
      strategies: ["Multiply by conjugate", "Make denominator real", "Distribute carefully", "Simplify last"],
      answer: ["-1+2i"],
      hints: [
        "Use the conjugate of the denominator.",
        "Multiply numerator and denominator by <span class='math'>1+2i</span>.",
        "The denominator becomes <span class='math'>1^2+2^2=5</span>."
      ],
      solution: "<span class='math'>(3+4i)/(1-2i) * (1+2i)/(1+2i)=(-5+10i)/5=-1+2i</span>."
    },
    {
      skill: "Powers of i",
      level: 2,
      problem: "Simplify <span class='math'>i^37+(3i)^4</span>.",
      strategies: ["Use cycle of 4", "Separate powers", "Simplify each term", "Use i^2=-1"],
      answer: ["81+i", "i+81"],
      hints: [
        "The powers of <span class='math'>i</span> repeat every 4.",
        "<span class='math'>i^37=i</span> because <span class='math'>37</span> has remainder <span class='math'>1</span> mod <span class='math'>4</span>.",
        "<span class='math'>(3i)^4=3^4 i^4=81</span>."
      ],
      solution: "<span class='math'>i^37+(3i)^4=i+81=81+i</span>."
    }
  ],
  plane: [
    {
      skill: "Coordinates",
      level: 1,
      problem: "What point in the complex plane represents <span class='math'>-3+5i</span>?",
      strategies: ["Use (real, imaginary)", "Read a+bi", "Plot horizontally then vertically", "Check quadrant"],
      answer: ["(-3,5)", "-3,5"],
      hints: [
        "The real part is the horizontal coordinate.",
        "The imaginary part is the vertical coordinate.",
        "<span class='math'>-3+5i</span> corresponds to <span class='math'>(-3,5)</span>."
      ],
      solution: "The point is <span class='math'>(-3,5)</span>."
    },
    {
      skill: "Distance From Origin",
      level: 1,
      problem: "Find the distance from the origin to the point representing <span class='math'>6-8i</span>.",
      strategies: ["Use distance formula", "Use modulus", "Plot the point", "Recognize triangle"],
      answer: ["10"],
      hints: [
        "The point is <span class='math'>(6,-8)</span>.",
        "Distance from the origin is <span class='math'>sqrt(a^2+b^2)</span>.",
        "This is a 6-8-10 triangle."
      ],
      solution: "<span class='math'>sqrt(6^2+(-8)^2)=sqrt(100)=10</span>."
    },
    {
      skill: "Quadrants",
      level: 2,
      problem: "In which quadrant is <span class='math'>z=-4-7i</span> plotted?",
      strategies: ["Read signs", "Use coordinates", "Sketch axes", "Compare to ordered pairs"],
      answer: ["quadrant iii", "iii", "3"],
      hints: [
        "The point is <span class='math'>(-4,-7)</span>.",
        "Negative real part means left of the vertical axis.",
        "Negative imaginary part means below the horizontal axis."
      ],
      solution: "The point <span class='math'>(-4,-7)</span> is in Quadrant III."
    },
    {
      skill: "Midpoint",
      level: 2,
      problem: "Find the midpoint of the points representing <span class='math'>2+9i</span> and <span class='math'>8-i</span>.",
      strategies: ["Average coordinates", "Convert to points", "Average real and imaginary parts", "Sketch"],
      answer: ["5+4i", "(5,4)"],
      hints: [
        "Convert the complex numbers to points.",
        "<span class='math'>2+9i</span> is <span class='math'>(2,9)</span>, and <span class='math'>8-i</span> is <span class='math'>(8,-1)</span>.",
        "Average the x-coordinates and y-coordinates."
      ],
      solution: "The midpoint is <span class='math'>((2+8)/2,(9+(-1))/2)=(5,4)</span>, so the complex number is <span class='math'>5+4i</span>."
    }
  ],
  parts: [
    {
      skill: "Real and Imaginary Parts",
      level: 1,
      problem: "If <span class='math'>z=5-7i</span>, find <span class='math'>Re(z)</span> and <span class='math'>Im(z)</span>.",
      strategies: ["Read a+bi", "Identify coefficient of i", "Separate parts", "Plot the point"],
      answer: [["re(z)=5", "im(z)=-7"], ["5", "-7"]],
      hints: [
        "Standard form is <span class='math'>a+bi</span>.",
        "<span class='math'>Re(z)=a</span>.",
        "<span class='math'>Im(z)=b</span>, the coefficient of <span class='math'>i</span>."
      ],
      solution: "<span class='math'>Re(z)=5</span> and <span class='math'>Im(z)=-7</span>."
    },
    {
      skill: "Pure Real and Pure Imaginary",
      level: 1,
      problem: "For <span class='math'>z=-11</span>, find the real and imaginary parts.",
      strategies: ["Rewrite as a+bi", "Use zero imaginary part", "Plot on real axis", "Check standard form"],
      answer: [["real", "-11", "imaginary", "0"], ["-11", "0"]],
      hints: [
        "Rewrite <span class='math'>-11</span> as <span class='math'>-11+0i</span>.",
        "The real part is <span class='math'>-11</span>.",
        "The imaginary part is <span class='math'>0</span>."
      ],
      solution: "<span class='math'>z=-11+0i</span>, so the real part is <span class='math'>-11</span> and the imaginary part is <span class='math'>0</span>."
    },
    {
      skill: "Matching Parts",
      level: 2,
      problem: "Find real numbers <span class='math'>a,b</span> such that <span class='math'>a+bi=12-4i</span>.",
      strategies: ["Match real parts", "Match imaginary parts", "Use standard form", "Compare coefficients"],
      answer: [["a=12", "b=-4"], ["12", "-4"]],
      hints: [
        "Complex numbers in standard form are equal when their real parts match and imaginary parts match.",
        "Match <span class='math'>a</span> with <span class='math'>12</span>.",
        "Match <span class='math'>b</span> with <span class='math'>-4</span>."
      ],
      solution: "<span class='math'>a=12</span> and <span class='math'>b=-4</span>."
    },
    {
      skill: "Equation From Parts",
      level: 3,
      problem: "Find real numbers <span class='math'>a,b</span> such that <span class='math'>(a+bi)(1+i)=5+i</span>.",
      strategies: ["Expand and match parts", "Build a system", "Divide by 1+i", "Use standard form"],
      answer: [["a=3", "b=-2"], ["3", "-2"]],
      hints: [
        "Expand the left side.",
        "<span class='math'>(a+bi)(1+i)=a+ai+bi+b i^2=(a-b)+(a+b)i</span>.",
        "Match real and imaginary parts with <span class='math'>5+i</span>."
      ],
      solution: "We need <span class='math'>a-b=5</span> and <span class='math'>a+b=1</span>. Solving gives <span class='math'>a=3</span>, <span class='math'>b=-2</span>."
    }
  ],
  graphing: [
    {
      skill: "Plotting",
      level: 1,
      problem: "Describe how to plot <span class='math'>4-6i</span> in the complex plane.",
      strategies: ["Use real then imaginary", "Convert to point", "Check quadrant", "Sketch axes"],
      answer: [["right", "4", "down", "6"], ["(4,-6)"]],
      hints: [
        "The real part controls horizontal movement.",
        "The imaginary part controls vertical movement.",
        "<span class='math'>4-6i</span> is the point <span class='math'>(4,-6)</span>."
      ],
      solution: "Start at the origin, move right 4 and down 6. The point is <span class='math'>(4,-6)</span>."
    },
    {
      skill: "Graphing a Set",
      level: 2,
      problem: "Which points represent complex numbers with real part <span class='math'>2</span>?",
      strategies: ["Fix x-coordinate", "Think vertical line", "Use a+bi", "Test examples"],
      answer: ["vertical line x=2", "x=2", "all points (2,b)"],
      hints: [
        "The real part is the horizontal coordinate.",
        "If the real part is always <span class='math'>2</span>, then the x-coordinate is always <span class='math'>2</span>.",
        "The imaginary part can vary."
      ],
      solution: "They form the vertical line <span class='math'>x=2</span>, or all points <span class='math'>(2,b)</span>."
    },
    {
      skill: "Adding as Movement",
      level: 2,
      problem: "If <span class='math'>z=1+2i</span>, where is <span class='math'>z+3-i</span> plotted?",
      strategies: ["Add first", "Move point", "Combine parts", "Use vector shift"],
      answer: ["(4,1)", "4+i", "4+1i"],
      hints: [
        "Add the complex numbers in standard form.",
        "<span class='math'>(1+2i)+(3-i)=4+i</span>.",
        "The point for <span class='math'>4+i</span> is <span class='math'>(4,1)</span>."
      ],
      solution: "<span class='math'>z+3-i=4+i</span>, so the point is <span class='math'>(4,1)</span>."
    },
    {
      skill: "Reflection",
      level: 2,
      problem: "The conjugate of a complex number reflects its point across which axis? Use <span class='math'>z=-2+5i</span> as an example.",
      strategies: ["Compare z and conjugate", "Plot both points", "Change sign of imaginary part", "Use coordinates"],
      answer: ["real axis", "x-axis"],
      hints: [
        "The conjugate of <span class='math'>a+bi</span> is <span class='math'>a-bi</span>.",
        "<span class='math'>-2+5i</span> becomes <span class='math'>-2-5i</span>.",
        "The x-coordinate stays the same and the y-coordinate changes sign."
      ],
      solution: "Conjugation reflects across the real axis, which is the x-axis in the complex plane."
    }
  ]
};

const modeNames = {
  arithmetic: "Arithmetic",
  plane: "Complex Plane",
  parts: "Real Imag Parts",
  graphing: "Graphing"
};

const reviewNotes = {
  arithmetic: {
    bigIdea: "Complex arithmetic works like ordinary algebra until an i^2 appears; then replace i^2 with -1 and return to a+bi form.",
    bullets: [
      "Add and subtract by combining real parts with real parts, and imaginary parts with imaginary parts.",
      "When multiplying, distribute first, then simplify every i^2.",
      "When dividing, multiply by the conjugate of the denominator so the denominator becomes real.",
      "A final answer should usually be written as a+bi."
    ]
  },
  plane: {
    bigIdea: "The complex number a+bi is also the point (a,b), so algebraic information can be read geometrically.",
    bullets: [
      "The real part gives the horizontal coordinate.",
      "The imaginary part gives the vertical coordinate.",
      "Distance from the origin is sqrt(a^2+b^2).",
      "Averages, distances, and quadrants work just like coordinate geometry."
    ]
  },
  parts: {
    bigIdea: "Two complex numbers are equal only when their real parts match and their imaginary parts match.",
    bullets: [
      "For z=a+bi, Re(z)=a and Im(z)=b.",
      "The imaginary part is the coefficient of i, not the whole bi term.",
      "A real number like -11 can be rewritten as -11+0i.",
      "Matching real and imaginary parts often turns one complex equation into two real equations."
    ]
  },
  graphing: {
    bigIdea: "Graphing complex numbers is coordinate graphing with new labels: the horizontal axis is real and the vertical axis is imaginary.",
    bullets: [
      "To plot a+bi, move a units horizontally and b units vertically.",
      "Adding a complex number moves the point by that horizontal and vertical amount.",
      "A fixed real part forms a vertical line; a fixed imaginary part forms a horizontal line.",
      "Conjugation changes a+bi to a-bi, reflecting the point across the real axis."
    ]
  }
};

let currentMode = "arithmetic";
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
    .replaceAll(" ", "");
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
  feedbackText.innerHTML = "Pick a strategy, then try the problem. Hints reveal one step at a time.";
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
      feedbackText.innerHTML = `Good. Try using <strong>${strategy}</strong>. Keep the connection between <span class='math'>a+bi</span> and <span class='math'>(a,b)</span> in view.`;
    });
    strategyRow.appendChild(button);
  });
}

function checkAnswer() {
  const problem = getCurrentProblem();
  const response = normalize(answerInput.value);

  if (!response) {
    feedbackText.innerHTML = "<span class='near'>Write an answer first.</span> A short expression is enough.";
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
    feedbackText.innerHTML = "<span class='correct'>Correct.</span> Nice. Now connect the algebraic form to the point it represents.";
    return;
  }

  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = "<span class='incorrect'>Not quite yet.</span> Recheck real part, imaginary part, and standard form.";
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
