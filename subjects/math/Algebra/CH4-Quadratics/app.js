const problemBank = {
  fluency: [
    {
      skill: "Factoring",
      level: 1,
      problem: "Find all solutions of <span class='math'>x^2 + 12x + 27 = 0</span>.",
      strategies: ["Factor", "Quadratic formula", "Complete square", "Graph"],
      answer: ["x=-3,-9", "-3,-9", "x = -3, -9", "-9,-3", ["-3", "-9"]],
      hints: [
        "Look for two numbers with product 27 and sum 12.",
        "Those numbers are 3 and 9, so rewrite the quadratic as (x + 3)(x + 9).",
        "Use the zero product property."
      ],
      solution: "<span class='math'>x^2+12x+27=(x+3)(x+9)</span>, so <span class='math'>x=-3</span> or <span class='math'>x=-9</span>."
    },
    {
      skill: "Radicals",
      level: 1,
      problem: "Solve <span class='math'>√(6a^2 + 5a + 21) = 14</span>.",
      strategies: ["Square both sides", "Factor first", "Use Vieta", "Check domain"],
      answer: ["a=5,-31/6", "5,-31/6", "-31/6,5", "a=-31/6,5", ["5", "-31/6"]],
      hints: [
        "Both sides are nonnegative, so squaring is a natural first move.",
        "After squaring, solve <span class='math'>6a^2 + 5a + 21 = 196</span>.",
        "Move all terms to one side and factor <span class='math'>6a^2 + 5a - 175</span>."
      ],
      solution: "Squaring gives <span class='math'>6a^2+5a-175=0=(6a+31)(a-5)</span>. Thus <span class='math'>a=5</span> or <span class='math'>a=-31/6</span>."
    },
    {
      skill: "Quadratic Formula",
      level: 2,
      problem: "Find all real solutions of <span class='math'>3x^2 + 15x = 7</span>.",
      strategies: ["Quadratic formula", "Factor", "Use discriminant", "Take square roots"],
      answer: ["(-15±√309)/6", "(-15+-√309)/6", "(-15±sqrt(309))/6"],
      hints: [
        "Put the equation into standard form.",
        "Here <span class='math'>a=3, b=15, c=-7</span>.",
        "Compute <span class='math'>b^2 - 4ac = 225 + 84 = 309</span>."
      ],
      solution: "<span class='math'>3x^2+15x-7=0</span>, so <span class='math'>x=(-15±√309)/6</span>."
    }
  ],
  roots: [
    {
      skill: "Discriminant",
      level: 2,
      problem: "Find all values of <span class='math'>k</span> such that <span class='math'>x^2 + kx + 27 = 0</span> has two distinct real solutions.",
      strategies: ["Discriminant", "Vieta", "Factor", "Complete square"],
      answer: ["k<-6√3 or k>6√3", "k<-6sqrt3 or k>6sqrt3", "|k|>6√3", "|k|>6sqrt3"],
      hints: [
        "A quadratic has two distinct real roots exactly when its discriminant is positive.",
        "Compute <span class='math'>k^2 - 4(1)(27)</span>.",
        "Solve <span class='math'>k^2 - 108 > 0</span>."
      ],
      solution: "We need <span class='math'>k^2-108>0</span>, so <span class='math'>|k|>6√3</span>. Thus <span class='math'>k<-6√3</span> or <span class='math'>k>6√3</span>."
    },
    {
      skill: "Root Relationships",
      level: 2,
      problem: "One root of <span class='math'>x^2 - ax + 2a + 3 = 0</span> is 3 times the other. Find all possible values of <span class='math'>a</span>.",
      strategies: ["Vieta", "Substitution", "Discriminant", "Graph"],
      answer: ["a=12,-4/3", "12,-4/3", "-4/3,12", "a=-4/3,12", ["12", "-4/3"]],
      hints: [
        "Let the roots be <span class='math'>r</span> and <span class='math'>3r</span>.",
        "By Vieta, <span class='math'>4r=a</span> and <span class='math'>3r^2=2a+3</span>.",
        "Substitute <span class='math'>a=4r</span> into the product equation."
      ],
      solution: "Let roots be <span class='math'>r,3r</span>. Then <span class='math'>a=4r</span> and <span class='math'>3r^2=2a+3=8r+3</span>. Thus <span class='math'>3r^2-8r-3=0</span>, so <span class='math'>r=3</span> or <span class='math'>r=-1/3</span>. Hence <span class='math'>a=12</span> or <span class='math'>a=-4/3</span>."
    },
    {
      skill: "Vieta",
      level: 3,
      problem: "Let <span class='math'>a</span> and <span class='math'>b</span> be the roots of <span class='math'>x^2 - mx + 2 = 0</span>. Suppose <span class='math'>a + 1/b</span> and <span class='math'>b + 1/a</span> are the roots of <span class='math'>x^2 - px + q = 0</span>. Find <span class='math'>q</span>.",
      strategies: ["Vieta", "Expand product", "Quadratic formula", "Test values"],
      answer: ["9/2", "q=9/2", "4.5"],
      hints: [
        "The constant term <span class='math'>q</span> is the product of the two new roots.",
        "Compute <span class='math'>(a+1/b)(b+1/a)</span>.",
        "Use <span class='math'>ab=2</span> from the first equation."
      ],
      solution: "<span class='math'>q=(a+1/b)(b+1/a)=ab+1+1+1/(ab)=2+2+1/2=9/2</span>."
    }
  ],
  inequalities: [
    {
      skill: "Quadratic Inequality",
      level: 2,
      problem: "Find all <span class='math'>x</span> such that <span class='math'>6x^2 + 5x < 4</span>.",
      strategies: ["Sign chart", "Factor", "Graph", "Discriminant"],
      answer: ["-4/3<x<1/2", "(-4/3,1/2)", "-4/3 < x < 1/2"],
      hints: [
        "Move all terms to one side.",
        "Factor <span class='math'>6x^2 + 5x - 4</span>.",
        "An upward-opening quadratic is negative between its roots."
      ],
      solution: "<span class='math'>6x^2+5x-4=(3x+4)(2x-1)</span>. Since the parabola opens upward, the solution is <span class='math'>-4/3 < x < 1/2</span>."
    },
    {
      skill: "Domain",
      level: 3,
      problem: "What is the domain of <span class='math'>f(x) = (x + 7)/(1/x + 1/(x^2 - 6))</span>?",
      strategies: ["Restrictions first", "Simplify", "Solve denominator", "Graph"],
      answer: ["x≠0,±√6,2,-3", "x != 0, ±√6, 2, -3", "all real except 0, ±√6, 2, -3", ["0", "√6", "2", "-3"]],
      hints: [
        "First exclude values that make the smaller denominators zero.",
        "So <span class='math'>x≠0</span> and <span class='math'>x^2-6≠0</span>.",
        "Now also make sure the whole denominator is not zero: <span class='math'>1/x + 1/(x^2-6) ≠ 0</span>."
      ],
      solution: "Need <span class='math'>x≠0</span>, <span class='math'>x≠±√6</span>, and <span class='math'>1/x+1/(x^2-6)≠0</span>. The last condition gives <span class='math'>x^2+x-6≠0</span>, so <span class='math'>x≠2,-3</span>? Careful: <span class='math'>(x^2-6)+x=0</span>, so <span class='math'>x^2+x-6=0</span>, hence <span class='math'>x≠2,-3</span>."
    },
    {
      skill: "Sign Chart",
      level: 2,
      problem: "Find all <span class='math'>x</span> such that <span class='math'>x^2 + 50x - 2079 ≥ 0</span>.",
      strategies: ["Factor", "Sign chart", "Complete square", "Estimate roots"],
      answer: ["x≤-77 or x≥27", "(-∞,-77]∪[27,∞)", "x<=-77 or x>=27"],
      hints: [
        "Find two numbers with product -2079 and sum 50.",
        "Since <span class='math'>2079 = 27 · 77</span>, the roots are promising.",
        "An upward-opening quadratic is nonnegative outside its roots."
      ],
      solution: "<span class='math'>x^2+50x-2079=(x+77)(x-27)</span>. Therefore <span class='math'>x≤-77</span> or <span class='math'>x≥27</span>."
    }
  ],
  functions: [
    {
      skill: "Function Values",
      level: 2,
      problem: "Let <span class='math'>P(x)</span> be a quadratic polynomial such that <span class='math'>P(0)=-1</span>, <span class='math'>P(1)=9</span>, and <span class='math'>P(2)=25</span>. Find <span class='math'>P(-1)</span>.",
      strategies: ["Finite differences", "Set coefficients", "Graph", "Factor"],
      answer: ["-5", "P(-1)=-5"],
      hints: [
        "For equally spaced inputs, a quadratic has constant second differences.",
        "The outputs are <span class='math'>-1, 9, 25</span>. First differences are <span class='math'>10, 16</span>.",
        "The previous first difference must be <span class='math'>4</span>."
      ],
      solution: "First differences from <span class='math'>P(0),P(1),P(2)</span> are <span class='math'>10</span> and <span class='math'>16</span>, so the second difference is <span class='math'>6</span>. The previous first difference is <span class='math'>4</span>, so <span class='math'>P(0)-P(-1)=4</span>. Thus <span class='math'>P(-1)=-5</span>."
    },
    {
      skill: "Parameter Function",
      level: 2,
      problem: "Let <span class='math'>f(x)=a^2x^2 + (5/2)ax + 3</span> and <span class='math'>f(2)=2</span>. Find all possible values of <span class='math'>a</span>.",
      strategies: ["Substitute", "Quadratic in parameter", "Factor", "Discriminant"],
      answer: ["a=-1,-1/4", "-1,-1/4", "a=-1/4,-1"],
      hints: [
        "Substitute <span class='math'>x=2</span> and set the result equal to 2.",
        "You should get a quadratic equation in <span class='math'>a</span>.",
        "Clear fractions before factoring."
      ],
      solution: "<span class='math'>f(2)=4a^2+5a+3=2</span>, so <span class='math'>4a^2+5a+1=0=(4a+1)(a+1)</span>. Thus <span class='math'>a=-1/4</span> or <span class='math'>a=-1</span>."
    },
    {
      skill: "Reciprocal Roots",
      level: 3,
      problem: "Find the roots of <span class='math'>x^2 + (a - 1/a)x - 1 = 0</span> in terms of <span class='math'>a</span>.",
      strategies: ["Factor by inspection", "Vieta", "Quadratic formula", "Special cases"],
      answer: ["x=1/a,-a", "1/a,-a", "x=-a,1/a"],
      hints: [
        "The product of the roots is <span class='math'>-1</span>.",
        "Try roots that involve <span class='math'>a</span> and <span class='math'>1/a</span>.",
        "Check whether <span class='math'>(x+a)(x-1/a)</span> matches the expression."
      ],
      solution: "<span class='math'>(x+a)(x-1/a)=x^2+(a-1/a)x-1</span>. Therefore the roots are <span class='math'>x=-a</span> and <span class='math'>x=1/a</span>, with <span class='math'>a≠0</span>."
    }
  ],
  mixed: []
};

problemBank.mixed = [
  ...problemBank.fluency,
  ...problemBank.roots,
  ...problemBank.inequalities,
  ...problemBank.functions,
  {
    skill: "Quadratic System",
    level: 3,
    problem: "Solve the system <span class='math'>x^2 + yz = 39</span>, <span class='math'>x - yz = -33</span>, <span class='math'>y + z = 13</span>.",
    strategies: ["Add equations", "Substitution", "Vieta", "Elimination"],
    answer: [["x=2", "5", "8", "x=-3", "3", "10"], "x=2,y,z=5,8; x=-3,y,z=3,10"],
    hints: [
      "The first two equations both contain <span class='math'>yz</span>.",
      "Add them to eliminate <span class='math'>yz</span>.",
      "After finding <span class='math'>x</span>, find <span class='math'>yz</span>, then use sum and product for <span class='math'>y,z</span>."
    ],
    solution: "Adding the first two equations gives <span class='math'>x^2+x=6</span>, so <span class='math'>x=2</span> or <span class='math'>x=-3</span>? Careful: <span class='math'>39+(-33)=6</span>, so <span class='math'>x^2+x=6</span>. Then <span class='math'>x=2</span> or <span class='math'>x=-3</span>. If <span class='math'>x=2</span>, <span class='math'>yz=35</span> and <span class='math'>y+z=13</span>, so <span class='math'>y,z=5,8</span>. If <span class='math'>x=-3</span>, <span class='math'>yz=30</span> and <span class='math'>y+z=13</span>, so <span class='math'>y,z=3,10</span>."
  }
];

const modeNames = {
  fluency: "Fluency",
  roots: "Root Structure",
  inequalities: "Inequalities",
  functions: "Functions",
  mixed: "Mixed Review"
};

const reviewNotes = {
  fluency: {
    bigIdea: "Quadratic fluency starts with recognizing which solving tool is fastest for the form in front of you.",
    bullets: [
      "Factoring is quick when the numbers are friendly.",
      "The quadratic formula works broadly, especially when factoring is not obvious.",
      "Square-root forms are often best solved by isolating the square first.",
      "Always report both roots when a square or quadratic equation produces two solutions."
    ]
  },
  roots: {
    bigIdea: "The roots of a quadratic are tied directly to its coefficients through sum, product, and discriminant.",
    bullets: [
      "For x^2+bx+c, the roots have sum -b and product c.",
      "Vieta's formulas are often faster than solving for each root.",
      "The discriminant tells whether roots are real, repeated, or non-real.",
      "Parameter problems usually become inequalities or equations involving root structure."
    ]
  },
  inequalities: {
    bigIdea: "Quadratic inequalities are sign questions: find the boundary points, then decide where the expression is positive or negative.",
    bullets: [
      "Move everything to one side before making a sign chart.",
      "The roots split the number line into intervals.",
      "An upward-opening quadratic is positive outside its roots and negative between them.",
      "For rational expressions, check denominator restrictions before and after solving."
    ]
  },
  functions: {
    bigIdea: "Quadratic functions can be understood through values, differences, parameters, and transformations.",
    bullets: [
      "Three distinct input-output values determine a quadratic.",
      "For equally spaced inputs, second differences are constant.",
      "Substituting a given input can turn a function problem into a quadratic in a parameter.",
      "Expressions involving x and x+h often reward expanding carefully and canceling."
    ]
  },
  mixed: {
    bigIdea: "Mixed review is about choosing the structure before choosing the computation.",
    bullets: [
      "Ask what kind of object you are looking at: equation, inequality, function, system, or root relation.",
      "Look for shortcuts from Vieta, symmetry, factoring, or finite differences.",
      "Keep restrictions and extraneous solutions in mind.",
      "A good first move should make the problem simpler, not just longer."
    ]
  }
};

let currentMode = "fluency";
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
    .replaceAll("sqrt", "√")
    .replaceAll("−", "-")
    .replaceAll("≤", "<=")
    .replaceAll("≥", ">=")
    .replaceAll("plusminus", "±");
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
      feedbackText.innerHTML = `Good. Try using <strong>${strategy}</strong>. If it starts getting messy, ask for a hint and look for a cleaner structure.`;
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
    feedbackText.innerHTML = "<span class='correct'>Correct.</span> Now ask: what made this problem quick?";
    return;
  }

  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = "<span class='incorrect'>Not quite yet.</span> Compare your work to the hint trail, especially the first structural move.";
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
