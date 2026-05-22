const problemBank = {
  basics: [
    {
      skill: "Function Notation",
      level: 1,
      problem: "Let <span class='math'>f(x)=2x^2-3x+5</span>. Find <span class='math'>f(-2)</span>.",
      strategies: ["Substitute carefully", "Track signs", "Use a table", "Estimate first"],
      answer: ["19", "f(-2)=19"],
      hints: [
        "Replace every <span class='math'>x</span> with <span class='math'>-2</span>.",
        "Be careful: <span class='math'>(-2)^2=4</span>.",
        "<span class='math'>2(4)-3(-2)+5=8+6+5</span>."
      ],
      solution: "<span class='math'>f(-2)=2(4)+6+5=19</span>."
    },
    {
      skill: "Inputs and Outputs",
      level: 1,
      problem: "If <span class='math'>g(t)=3t-7</span>, solve <span class='math'>g(x+2)=11</span>.",
      strategies: ["Substitute expression", "Solve for input", "Work backward", "Use a table"],
      answer: ["x=4", "4"],
      hints: [
        "The input to <span class='math'>g</span> is <span class='math'>x+2</span>.",
        "So <span class='math'>g(x+2)=3(x+2)-7</span>.",
        "Solve <span class='math'>3(x+2)-7=11</span>."
      ],
      solution: "<span class='math'>3x+6-7=11</span>, so <span class='math'>3x=12</span> and <span class='math'>x=4</span>."
    },
    {
      skill: "Domain",
      level: 2,
      problem: "Find the domain of <span class='math'>f(x)=1/(x^2-9)</span>.",
      strategies: ["Denominator not zero", "Factor first", "Find forbidden inputs", "Use a graph"],
      answer: ["x!=-3,3", "x != -3, 3", "all real except -3,3", ["-3", "3"]],
      hints: [
        "A rational function is undefined when its denominator is zero.",
        "Solve <span class='math'>x^2-9=0</span>.",
        "The forbidden inputs are the roots of the denominator."
      ],
      solution: "<span class='math'>x^2-9=(x-3)(x+3)</span>, so <span class='math'>x!=-3</span> and <span class='math'>x!=3</span>."
    },
    {
      skill: "Range",
      level: 2,
      problem: "Find the range of <span class='math'>f(x)=|x-4|+2</span>.",
      strategies: ["Find minimum", "Use parent function", "Graph the vertex", "Test outputs"],
      answer: ["y>=2", "[2,infinity)", "range is y>=2"],
      hints: [
        "An absolute value is always nonnegative.",
        "The smallest possible value of <span class='math'>|x-4|</span> is <span class='math'>0</span>.",
        "Then add <span class='math'>2</span>."
      ],
      solution: "Since <span class='math'>|x-4|>=0</span>, the smallest output is <span class='math'>2</span>. The range is <span class='math'>y>=2</span>."
    }
  ],
  graphing: [
    {
      skill: "Intercepts",
      level: 1,
      problem: "Find the x-intercept and y-intercept of <span class='math'>y=2x-6</span>.",
      strategies: ["Set y=0 and x=0", "Use slope-intercept form", "Make a table", "Plot two points"],
      answer: [["x-intercept", "3"], ["y-intercept", "-6"], ["3", "-6"]],
      hints: [
        "For the x-intercept, set <span class='math'>y=0</span>.",
        "For the y-intercept, set <span class='math'>x=0</span>.",
        "Write intercepts as points if possible."
      ],
      solution: "Set <span class='math'>0=2x-6</span>, so <span class='math'>x=3</span>. Set <span class='math'>x=0</span>, so <span class='math'>y=-6</span>. The intercepts are <span class='math'>(3,0)</span> and <span class='math'>(0,-6)</span>."
    },
    {
      skill: "Graph Features",
      level: 2,
      problem: "Describe the graph of <span class='math'>y=|x+2|-5</span>: vertex, direction of opening, and range.",
      strategies: ["Use parent graph", "Track shifts", "Find vertex", "Make a table"],
      answer: [["(-2,-5)", "up", "y>=-5"], ["vertex", "-2", "-5", "up"]],
      hints: [
        "Start from <span class='math'>y=|x|</span>.",
        "<span class='math'>x+2</span> shifts the graph left 2.",
        "Subtracting 5 shifts the graph down 5."
      ],
      solution: "The vertex is <span class='math'>(-2,-5)</span>. The absolute value graph opens upward, so the range is <span class='math'>y>=-5</span>."
    },
    {
      skill: "Point Mapping",
      level: 2,
      problem: "If <span class='math'>(2,7)</span> is on <span class='math'>y=f(x)</span>, what point is on <span class='math'>y=f(x-4)-3</span>?",
      strategies: ["Track shifts", "Map the point", "Substitute point", "Sketch both graphs"],
      answer: ["(6,4)", "6,4"],
      hints: [
        "<span class='math'>x-4</span> shifts the graph right 4.",
        "Subtracting 3 shifts the graph down 3.",
        "Apply those changes to <span class='math'>(2,7)</span>."
      ],
      solution: "Right 4 changes <span class='math'>2</span> to <span class='math'>6</span>. Down 3 changes <span class='math'>7</span> to <span class='math'>4</span>. The point is <span class='math'>(6,4)</span>."
    },
    {
      skill: "Transformations",
      level: 2,
      problem: "Describe the transformation from <span class='math'>y=f(x)</span> to <span class='math'>y=-2f(x+1)</span>.",
      strategies: ["Read inside then outside", "Use a point", "Compare outputs", "Sketch"],
      answer: [["left", "1", "reflect", "x-axis", "stretch", "2"], "left 1 reflect over x-axis vertical stretch by 2"],
      hints: [
        "<span class='math'>x+1</span> affects the graph horizontally.",
        "The negative sign outside reflects outputs over the x-axis.",
        "The factor <span class='math'>2</span> outside makes a vertical stretch."
      ],
      solution: "Shift left 1 unit, vertically stretch by factor 2, and reflect over the x-axis."
    }
  ],
  composition: [
    {
      skill: "Composition Values",
      level: 1,
      problem: "Let <span class='math'>f(x)=x^2+1</span> and <span class='math'>g(x)=3x-2</span>. Find <span class='math'>f(g(2))</span>.",
      strategies: ["Inside first", "Evaluate g then f", "Make a table", "Work backward"],
      answer: ["17", "f(g(2))=17"],
      hints: [
        "In <span class='math'>f(g(2))</span>, compute <span class='math'>g(2)</span> first.",
        "<span class='math'>g(2)=3(2)-2=4</span>.",
        "Now find <span class='math'>f(4)</span>."
      ],
      solution: "<span class='math'>g(2)=4</span> and <span class='math'>f(4)=4^2+1=17</span>."
    },
    {
      skill: "Composition Formula",
      level: 2,
      problem: "Let <span class='math'>f(x)=2x+5</span> and <span class='math'>g(x)=x^2-1</span>. Find and simplify <span class='math'>g(f(x))</span>.",
      strategies: ["Substitute f into g", "Keep parentheses", "Expand last", "Check with x=0"],
      answer: ["4x^2+20x+24", "(2x+5)^2-1"],
      hints: [
        "<span class='math'>g(f(x))</span> means use <span class='math'>f(x)</span> as the input of <span class='math'>g</span>.",
        "So <span class='math'>g(f(x))=(2x+5)^2-1</span>.",
        "Now expand if the problem asks for simplified form."
      ],
      solution: "<span class='math'>g(f(x))=(2x+5)^2-1=4x^2+20x+24</span>."
    },
    {
      skill: "Composition Equation",
      level: 2,
      problem: "Let <span class='math'>f(x)=x-4</span> and <span class='math'>g(x)=x^2</span>. Solve <span class='math'>g(f(x))=25</span>.",
      strategies: ["Compose first", "Solve square equation", "Check both roots", "Work backward"],
      answer: ["x=-1,9", "-1,9", ["-1", "9"]],
      hints: [
        "First find <span class='math'>g(f(x))</span>.",
        "Since <span class='math'>f(x)=x-4</span>, <span class='math'>g(f(x))=(x-4)^2</span>.",
        "Solve <span class='math'>(x-4)^2=25</span>."
      ],
      solution: "<span class='math'>(x-4)^2=25</span>, so <span class='math'>x-4=5</span> or <span class='math'>x-4=-5</span>. Thus <span class='math'>x=9</span> or <span class='math'>x=-1</span>."
    },
    {
      skill: "Difference Quotient",
      level: 3,
      problem: "Let <span class='math'>f(x)=x^2+3x</span>. Simplify <span class='math'>(f(x+h)-f(x))/h</span>, where <span class='math'>h!=0</span>.",
      strategies: ["Expand then cancel", "Factor h", "Keep parentheses", "Check with h=1"],
      answer: ["2x+h+3", "h+2x+3"],
      hints: [
        "First compute <span class='math'>f(x+h)</span>.",
        "<span class='math'>f(x+h)=(x+h)^2+3(x+h)</span>.",
        "After subtracting <span class='math'>f(x)</span>, every remaining term has a factor of <span class='math'>h</span>."
      ],
      solution: "<span class='math'>f(x+h)-f(x)=x^2+2xh+h^2+3x+3h-x^2-3x=2xh+h^2+3h</span>. Dividing by <span class='math'>h</span> gives <span class='math'>2x+h+3</span>."
    }
  ],
  inverse: [
    {
      skill: "Linear Inverse",
      level: 1,
      problem: "Find the inverse of <span class='math'>f(x)=3x-8</span>.",
      strategies: ["Solve y=3x-8", "Swap x and y", "Undo operations", "Check composition"],
      answer: ["(x+8)/3", "f^-1(x)=(x+8)/3"],
      hints: [
        "Write <span class='math'>y=3x-8</span>.",
        "Swap <span class='math'>x</span> and <span class='math'>y</span>.",
        "Solve <span class='math'>x=3y-8</span> for <span class='math'>y</span>."
      ],
      solution: "From <span class='math'>x=3y-8</span>, we get <span class='math'>x+8=3y</span>, so <span class='math'>f^{-1}(x)=(x+8)/3</span>."
    },
    {
      skill: "Inverse From Table",
      level: 1,
      problem: "A function has values <span class='math'>f(1)=4</span>, <span class='math'>f(3)=10</span>, and <span class='math'>f(5)=16</span>. Find <span class='math'>f^{-1}(10)</span>.",
      strategies: ["Reverse input and output", "Read the table", "Use slope", "Write a formula"],
      answer: ["3", "f^-1(10)=3"],
      hints: [
        "The inverse asks: which input gave output <span class='math'>10</span>?",
        "Look for the statement where <span class='math'>f(?)=10</span>.",
        "<span class='math'>f(3)=10</span>."
      ],
      solution: "Since <span class='math'>f(3)=10</span>, the inverse value is <span class='math'>f^{-1}(10)=3</span>."
    },
    {
      skill: "Verify Inverses",
      level: 2,
      problem: "Let <span class='math'>f(x)=2x+1</span> and <span class='math'>g(x)=(x-1)/2</span>. Verify that they are inverses by finding <span class='math'>f(g(x))</span> and <span class='math'>g(f(x))</span>.",
      strategies: ["Compose both ways", "Simplify carefully", "Check one input", "Compare graphs"],
      answer: [["f(g(x))=x", "g(f(x))=x"], ["x", "x"]],
      hints: [
        "To verify inverses, both compositions must simplify to <span class='math'>x</span>.",
        "Compute <span class='math'>f(g(x))=2((x-1)/2)+1</span>.",
        "Compute <span class='math'>g(f(x))=((2x+1)-1)/2</span>."
      ],
      solution: "<span class='math'>f(g(x))=2((x-1)/2)+1=x</span> and <span class='math'>g(f(x))=((2x+1)-1)/2=x</span>. They are inverses."
    },
    {
      skill: "Restricted Domain",
      level: 3,
      problem: "Find the inverse of <span class='math'>f(x)=x^2+1</span> with domain <span class='math'>x>=0</span>.",
      strategies: ["Use restricted range", "Swap and solve", "Choose correct square root", "Check domain"],
      answer: ["sqrt(x-1)", "f^-1(x)=sqrt(x-1)", "domain x>=1"],
      hints: [
        "Write <span class='math'>y=x^2+1</span>.",
        "Swap variables: <span class='math'>x=y^2+1</span>.",
        "Because the original domain is <span class='math'>x>=0</span>, choose the nonnegative square root."
      ],
      solution: "From <span class='math'>x=y^2+1</span>, <span class='math'>y=sqrt(x-1)</span>. Thus <span class='math'>f^{-1}(x)=sqrt(x-1)</span>, with inverse domain <span class='math'>x>=1</span>."
    }
  ]
};

const modeNames = {
  basics: "Functions Basic",
  graphing: "Graphing Functions",
  composition: "Composition",
  inverse: "Inverse Functions"
};

const reviewNotes = {
  basics: {
    bigIdea: "A function is a rule that assigns each allowed input exactly one output.",
    bullets: [
      "Function notation tells you what input to substitute.",
      "The domain is the set of inputs that make the rule meaningful.",
      "The range is the set of possible outputs.",
      "Watch for restrictions from denominators, square roots, and piecewise rules."
    ]
  },
  graphing: {
    bigIdea: "A graph is a visual record of all input-output pairs of a function.",
    bullets: [
      "Intercepts come from setting x=0 or y=0.",
      "Transformations move points in predictable ways.",
      "Horizontal changes happen inside the input; vertical changes happen outside.",
      "Key features like vertex, intercepts, and range often tell the whole story."
    ]
  },
  composition: {
    bigIdea: "Composition means using the output of one function as the input of another.",
    bullets: [
      "In f(g(x)), do g first, then feed that result into f.",
      "Parentheses matter: keep the entire inside expression together.",
      "A composition equation can often be solved by building the composition first.",
      "Check whether the inside output is allowed by the outside function's domain."
    ]
  },
  inverse: {
    bigIdea: "An inverse function reverses the input-output relationship of the original function.",
    bullets: [
      "If f(a)=b, then f^-1(b)=a.",
      "To find an inverse algebraically, write y=f(x), swap x and y, then solve for y.",
      "Two functions are inverses when both compositions simplify to x.",
      "Domain restrictions matter when a rule would otherwise fail to be one-to-one."
    ]
  }
};

let currentMode = "basics";
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
    .replaceAll("sqrt", "sqrt")
    .replaceAll("−", "-")
    .replaceAll("≤", "<=")
    .replaceAll("≥", ">=")
    .replaceAll("infinity", "infinity")
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
      feedbackText.innerHTML = `Good. Try using <strong>${strategy}</strong>. If it starts getting messy, ask for a hint and look for the function structure.`;
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
    feedbackText.innerHTML = "<span class='correct'>Correct.</span> Now ask: what was the input-output move?";
    return;
  }

  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = "<span class='incorrect'>Not quite yet.</span> Recheck the input first, then the rule being applied.";
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
