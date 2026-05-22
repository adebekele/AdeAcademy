const problemBank = {
  parabolas: [
    {
      skill: "Vertex Form",
      level: 1,
      problem: "Find the vertex and axis of symmetry of <span class='math'>y=(x-3)^2-5</span>.",
      strategies: ["Read vertex form", "Compare to (x-h)^2+k", "Graph mentally", "Make a table"],
      answer: [["vertex", "3", "-5"], ["axis", "x=3"]],
      hints: [
        "Vertex form is <span class='math'>y=a(x-h)^2+k</span>.",
        "The vertex is <span class='math'>(h,k)</span>.",
        "The axis of symmetry is <span class='math'>x=h</span>."
      ],
      solution: "The vertex is <span class='math'>(3,-5)</span>, and the axis of symmetry is <span class='math'>x=3</span>."
    },
    {
      skill: "Standard Parabola",
      level: 2,
      problem: "Write <span class='math'>y=x^2+6x+11</span> in vertex form.",
      strategies: ["Complete the square", "Find vertex", "Group x terms", "Use h=-b/2a"],
      answer: ["(x+3)^2+2", "y=(x+3)^2+2"],
      hints: [
        "Group <span class='math'>x^2+6x</span> first.",
        "Complete the square: <span class='math'>x^2+6x=(x+3)^2-9</span>.",
        "Then combine constants."
      ],
      solution: "<span class='math'>x^2+6x+11=(x+3)^2-9+11=(x+3)^2+2</span>."
    },
    {
      skill: "Focus and Directrix",
      level: 2,
      problem: "For <span class='math'>y=(1/8)x^2</span>, find the focus and directrix.",
      strategies: ["Use x^2=4py", "Identify p", "Vertex at origin", "Use geometry"],
      answer: [["focus", "0", "2"], ["directrix", "y=-2"]],
      hints: [
        "Rewrite as <span class='math'>x^2=8y</span>.",
        "Compare to <span class='math'>x^2=4py</span>.",
        "Then <span class='math'>4p=8</span>, so <span class='math'>p=2</span>."
      ],
      solution: "Since <span class='math'>x^2=8y</span>, <span class='math'>p=2</span>. The focus is <span class='math'>(0,2)</span>, and the directrix is <span class='math'>y=-2</span>."
    }
  ],
  problemSolving: [
    {
      skill: "Build From Vertex",
      level: 2,
      problem: "A parabola has vertex <span class='math'>(2,-3)</span> and passes through <span class='math'>(4,5)</span>. Find its equation in vertex form.",
      strategies: ["Use y=a(x-h)^2+k", "Substitute point", "Solve for a", "Check vertex"],
      answer: ["y=2(x-2)^2-3", "2(x-2)^2-3"],
      hints: [
        "Start with <span class='math'>y=a(x-2)^2-3</span>.",
        "Use the point <span class='math'>(4,5)</span>.",
        "Solve <span class='math'>5=a(4-2)^2-3</span>."
      ],
      solution: "<span class='math'>5=4a-3</span>, so <span class='math'>a=2</span>. The equation is <span class='math'>y=2(x-2)^2-3</span>."
    },
    {
      skill: "Intersection",
      level: 2,
      problem: "Find the intersection points of <span class='math'>y=x^2-4</span> and <span class='math'>y=2x-1</span>.",
      strategies: ["Set equations equal", "Solve quadratic", "Substitute back", "Graph"],
      answer: [["(-1,-3)", "(3,5)"], ["-1", "-3", "3", "5"]],
      hints: [
        "At an intersection, the y-values are equal.",
        "Solve <span class='math'>x^2-4=2x-1</span>.",
        "Then substitute each x-value into either equation."
      ],
      solution: "<span class='math'>x^2-2x-3=0</span>, so <span class='math'>x=-1</span> or <span class='math'>x=3</span>. The points are <span class='math'>(-1,-3)</span> and <span class='math'>(3,5)</span>."
    },
    {
      skill: "Parameter",
      level: 3,
      problem: "For what value of <span class='math'>k</span> is the line <span class='math'>y=k</span> tangent to <span class='math'>y=x^2-6x+10</span>?",
      strategies: ["Find vertex", "Use discriminant zero", "Complete square", "Graph"],
      answer: ["k=1", "1"],
      hints: [
        "A horizontal tangent touches the parabola at its vertex.",
        "Complete the square.",
        "<span class='math'>x^2-6x+10=(x-3)^2+1</span>."
      ],
      solution: "The minimum value of the parabola is <span class='math'>1</span>, so <span class='math'>y=1</span> is tangent. Thus <span class='math'>k=1</span>."
    }
  ],
  extrema: [
    {
      skill: "Maximum Revenue",
      level: 2,
      problem: "A product sells for <span class='math'>60-x</span> dollars, and <span class='math'>x</span> units are sold. Find the number of units that maximizes revenue.",
      strategies: ["Write revenue", "Find vertex", "Use symmetry", "Complete square"],
      answer: ["30", "x=30"],
      hints: [
        "Revenue is price times quantity.",
        "<span class='math'>R=x(60-x)=60x-x^2</span>.",
        "The vertex of <span class='math'>-x^2+60x</span> occurs at <span class='math'>x=-b/(2a)</span>."
      ],
      solution: "<span class='math'>R=-x^2+60x</span>. The vertex occurs at <span class='math'>x=-60/(2(-1))=30</span>."
    },
    {
      skill: "Minimum Value",
      level: 1,
      problem: "Find the minimum value of <span class='math'>f(x)=2x^2-8x+11</span>.",
      strategies: ["Complete square", "Use vertex formula", "Graph", "Use symmetry"],
      answer: ["3"],
      hints: [
        "Factor out <span class='math'>2</span> from the quadratic terms.",
        "<span class='math'>2x^2-8x+11=2(x^2-4x)+11</span>.",
        "Complete the square inside."
      ],
      solution: "<span class='math'>2(x^2-4x)+11=2((x-2)^2-4)+11=2(x-2)^2+3</span>. The minimum value is <span class='math'>3</span>."
    },
    {
      skill: "Max Area",
      level: 3,
      problem: "A rectangle has perimeter <span class='math'>40</span>. What is its maximum possible area?",
      strategies: ["Use one variable", "Build quadratic", "Find vertex", "Use symmetry"],
      answer: ["100"],
      hints: [
        "Let the side lengths be <span class='math'>x</span> and <span class='math'>20-x</span>.",
        "Area is <span class='math'>A=x(20-x)</span>.",
        "This quadratic is maximized at its vertex."
      ],
      solution: "<span class='math'>A=20x-x^2</span>, whose vertex is at <span class='math'>x=10</span>. The maximum area is <span class='math'>10*10=100</span>."
    }
  ],
  circles: [
    {
      skill: "Circle Equation",
      level: 1,
      problem: "Find the center and radius of <span class='math'>(x-2)^2+(y+5)^2=49</span>.",
      strategies: ["Read standard form", "Compare to center-radius form", "Take square root", "Graph"],
      answer: [["center", "2", "-5"], ["radius", "7"]],
      hints: [
        "Standard form is <span class='math'>(x-h)^2+(y-k)^2=r^2</span>.",
        "<span class='math'>y+5</span> means <span class='math'>y-(-5)</span>.",
        "The radius is the square root of <span class='math'>49</span>."
      ],
      solution: "The center is <span class='math'>(2,-5)</span>, and the radius is <span class='math'>7</span>."
    },
    {
      skill: "Complete Square",
      level: 2,
      problem: "Put <span class='math'>x^2+y^2-6x+4y-12=0</span> in center-radius form.",
      strategies: ["Complete squares", "Group x and y terms", "Move constant", "Find center"],
      answer: ["(x-3)^2+(y+2)^2=25"],
      hints: [
        "Group x-terms and y-terms.",
        "<span class='math'>x^2-6x=(x-3)^2-9</span>.",
        "<span class='math'>y^2+4y=(y+2)^2-4</span>."
      ],
      solution: "<span class='math'>(x-3)^2-9+(y+2)^2-4-12=0</span>, so <span class='math'>(x-3)^2+(y+2)^2=25</span>."
    },
    {
      skill: "Tangent Length",
      level: 3,
      problem: "The circle <span class='math'>x^2+y^2=25</span> has center at the origin. Find the distance from <span class='math'>(7,0)</span> to a tangent point on the circle.",
      strategies: ["Use right triangle", "Radius perpendicular tangent", "Pythagorean theorem", "Draw diagram"],
      answer: ["2sqrt(6)", "sqrt24"],
      hints: [
        "A radius to a tangent point is perpendicular to the tangent line.",
        "The center-to-external-point distance is <span class='math'>7</span>.",
        "The radius is <span class='math'>5</span>."
      ],
      solution: "The tangent length <span class='math'>t</span> satisfies <span class='math'>t^2+5^2=7^2</span>. Thus <span class='math'>t^2=24</span>, so <span class='math'>t=2sqrt(6)</span>."
    }
  ],
  ellipses: [
    {
      skill: "Ellipse Features",
      level: 1,
      problem: "Find the center and semi-axis lengths of <span class='math'>(x-1)^2/16+(y+2)^2/9=1</span>.",
      strategies: ["Read standard form", "Identify center", "Take square roots", "Compare denominators"],
      answer: [["center", "1", "-2"], ["4", "3"]],
      hints: [
        "Standard form is <span class='math'>(x-h)^2/a^2+(y-k)^2/b^2=1</span>.",
        "The center is <span class='math'>(h,k)</span>.",
        "The semi-axis lengths are square roots of the denominators."
      ],
      solution: "The center is <span class='math'>(1,-2)</span>. The semi-axis lengths are <span class='math'>4</span> and <span class='math'>3</span>."
    },
    {
      skill: "Foci",
      level: 2,
      problem: "For <span class='math'>x^2/25+y^2/9=1</span>, find the foci.",
      strategies: ["Use c^2=a^2-b^2", "Major axis horizontal", "Find c", "Graph"],
      answer: ["(4,0),(-4,0)", "(-4,0),(4,0)", ["4", "-4", "0"]],
      hints: [
        "The larger denominator is <span class='math'>25</span>, so the major axis is horizontal.",
        "Use <span class='math'>c^2=a^2-b^2</span>.",
        "<span class='math'>c^2=25-9=16</span>."
      ],
      solution: "<span class='math'>c=4</span>, so the foci are <span class='math'>(4,0)</span> and <span class='math'>(-4,0)</span>."
    },
    {
      skill: "Build Equation",
      level: 2,
      problem: "Write the equation of an ellipse centered at the origin with horizontal semi-axis <span class='math'>6</span> and vertical semi-axis <span class='math'>2</span>.",
      strategies: ["Use standard form", "Square semi-axes", "Horizontal denominator first", "Check intercepts"],
      answer: ["x^2/36+y^2/4=1"],
      hints: [
        "For a centered ellipse, use <span class='math'>x^2/a^2+y^2/b^2=1</span>.",
        "Horizontal semi-axis <span class='math'>6</span> gives denominator <span class='math'>36</span> under <span class='math'>x^2</span>.",
        "Vertical semi-axis <span class='math'>2</span> gives denominator <span class='math'>4</span> under <span class='math'>y^2</span>."
      ],
      solution: "The equation is <span class='math'>x^2/36+y^2/4=1</span>."
    }
  ],
  hyperbolas: [
    {
      skill: "Hyperbola Features",
      level: 1,
      problem: "For <span class='math'>x^2/9-y^2/16=1</span>, identify the transverse axis and asymptotes.",
      strategies: ["Read standard form", "Horizontal first term", "Use y=+-b/a x", "Sketch"],
      answer: [["horizontal"], ["y=4/3x", "y=-4/3x"]],
      hints: [
        "Because the <span class='math'>x^2</span> term is positive, the hyperbola opens left and right.",
        "Here <span class='math'>a=3</span> and <span class='math'>b=4</span>.",
        "Asymptotes are <span class='math'>y=+-(b/a)x</span>."
      ],
      solution: "The transverse axis is horizontal. The asymptotes are <span class='math'>y=(4/3)x</span> and <span class='math'>y=-(4/3)x</span>."
    },
    {
      skill: "Foci",
      level: 2,
      problem: "Find the foci of <span class='math'>y^2/16-x^2/9=1</span>.",
      strategies: ["Use c^2=a^2+b^2", "Vertical transverse axis", "Find c", "Graph"],
      answer: ["(0,5),(0,-5)", "(0,-5),(0,5)", ["0", "5", "-5"]],
      hints: [
        "For a hyperbola, <span class='math'>c^2=a^2+b^2</span>.",
        "Here <span class='math'>a^2=16</span> and <span class='math'>b^2=9</span>.",
        "The positive term is <span class='math'>y^2</span>, so foci lie on the y-axis."
      ],
      solution: "<span class='math'>c^2=16+9=25</span>, so <span class='math'>c=5</span>. The foci are <span class='math'>(0,5)</span> and <span class='math'>(0,-5)</span>."
    },
    {
      skill: "Classify",
      level: 2,
      problem: "Classify <span class='math'>9x^2-4y^2=36</span> and put it in standard form.",
      strategies: ["Divide by 36", "Look for opposite signs", "Identify hyperbola", "Simplify denominators"],
      answer: ["x^2/4-y^2/9=1", "hyperbola"],
      hints: [
        "Divide every term by <span class='math'>36</span>.",
        "Opposite signs on squared terms indicate a hyperbola.",
        "<span class='math'>9x^2/36=x^2/4</span> and <span class='math'>4y^2/36=y^2/9</span>."
      ],
      solution: "Dividing by <span class='math'>36</span> gives <span class='math'>x^2/4-y^2/9=1</span>, a hyperbola."
    }
  ],
  summary: [
    {
      skill: "Classify Conic",
      level: 2,
      problem: "Classify each: <span class='math'>x^2+y^2=16</span>, <span class='math'>x^2/9+y^2/4=1</span>, <span class='math'>x^2/9-y^2/4=1</span>.",
      strategies: ["Compare signs", "Check denominators", "Use standard forms", "Look for squared terms"],
      answer: [["circle", "ellipse", "hyperbola"]],
      hints: [
        "A circle has equal squared coefficients.",
        "An ellipse has same-sign squared terms with unequal denominators.",
        "A hyperbola has opposite-sign squared terms."
      ],
      solution: "The three conics are, in order: circle, ellipse, hyperbola."
    },
    {
      skill: "Choose Form",
      level: 2,
      problem: "Which conic has center <span class='math'>(1,-2)</span> and all points at distance <span class='math'>5</span> from that center? Write its equation.",
      strategies: ["Use definition", "Recognize circle", "Use center-radius form", "Square radius"],
      answer: ["(x-1)^2+(y+2)^2=25", "circle"],
      hints: [
        "All points a fixed distance from a center form a circle.",
        "Use <span class='math'>(x-h)^2+(y-k)^2=r^2</span>.",
        "Here <span class='math'>h=1</span>, <span class='math'>k=-2</span>, and <span class='math'>r=5</span>."
      ],
      solution: "The equation is <span class='math'>(x-1)^2+(y+2)^2=25</span>."
    },
    {
      skill: "Mixed Features",
      level: 3,
      problem: "A conic has equation <span class='math'>y^2/25-x^2/144=1</span>. Find its vertices and foci.",
      strategies: ["Identify hyperbola", "Use vertical transverse axis", "Find a and c", "Use c^2=a^2+b^2"],
      answer: [["vertices", "(0,5)", "(0,-5)"], ["foci", "(0,13)", "(0,-13)"]],
      hints: [
        "The positive term is <span class='math'>y^2</span>, so it opens up and down.",
        "<span class='math'>a^2=25</span> and <span class='math'>b^2=144</span>.",
        "For a hyperbola, <span class='math'>c^2=a^2+b^2</span>."
      ],
      solution: "Here <span class='math'>a=5</span> and <span class='math'>c^2=25+144=169</span>, so <span class='math'>c=13</span>. Vertices: <span class='math'>(0,5)</span>, <span class='math'>(0,-5)</span>. Foci: <span class='math'>(0,13)</span>, <span class='math'>(0,-13)</span>."
    },
    {
      skill: "Optimization Link",
      level: 3,
      problem: "A quadratic path has height <span class='math'>h(t)=-t^2+8t+3</span>. What is the maximum height?",
      strategies: ["Find vertex", "Complete square", "Use -b/2a", "Interpret maximum"],
      answer: ["19"],
      hints: [
        "The maximum occurs at the vertex because the coefficient of <span class='math'>t^2</span> is negative.",
        "Find <span class='math'>t=-b/(2a)</span>.",
        "Then substitute that value into <span class='math'>h(t)</span>."
      ],
      solution: "<span class='math'>t=-8/(2(-1))=4</span>. Then <span class='math'>h(4)=-16+32+3=19</span>."
    }
  ]
};

const modeNames = {
  parabolas: "Parabolas",
  problemSolving: "Parabola Problems",
  extrema: "Maxima Minima",
  circles: "Circles",
  ellipses: "Ellipses",
  hyperbolas: "Hyperbolas",
  summary: "Chapter Summary"
};

const reviewNotes = {
  parabolas: {
    bigIdea: "A parabola can be read algebraically from vertex form or geometrically from its focus and directrix.",
    bullets: [
      "Vertex form <span class='math'>y=a(x-h)^2+k</span> gives vertex <span class='math'>(h,k)</span>.",
      "The axis of symmetry passes through the vertex.",
      "Completing the square turns standard form into vertex form.",
      "For focus-directrix work, connect the equation to <span class='math'>x^2=4py</span> or <span class='math'>y^2=4px</span>."
    ]
  },
  problemSolving: {
    bigIdea: "Parabola problems usually become easier once you choose the form that matches the given information.",
    bullets: [
      "Use vertex form when the vertex is known.",
      "Use standard form when intercepts or algebraic intersections matter.",
      "Tangency often means one intersection or a discriminant of zero.",
      "Substitute known points carefully to solve for missing parameters."
    ]
  },
  extrema: {
    bigIdea: "Maxima and minima of quadratics happen at the vertex.",
    bullets: [
      "If <span class='math'>a&gt;0</span>, the vertex gives a minimum.",
      "If <span class='math'>a&lt;0</span>, the vertex gives a maximum.",
      "Word problems often require building the quadratic before optimizing.",
      "The input at the vertex is <span class='math'>-b/(2a)</span>."
    ]
  },
  circles: {
    bigIdea: "A circle is the set of points at a fixed distance from a center.",
    bullets: [
      "Standard form is <span class='math'>(x-h)^2+(y-k)^2=r^2</span>.",
      "The center is <span class='math'>(h,k)</span> and radius is <span class='math'>r</span>.",
      "Completing the square reveals the center and radius.",
      "A radius to a tangent point is perpendicular to the tangent line."
    ]
  },
  ellipses: {
    bigIdea: "An ellipse stretches the circle idea differently in two perpendicular directions.",
    bullets: [
      "Standard form has a sum of two positive squared terms equal to 1.",
      "The larger denominator gives the major axis.",
      "Semi-axis lengths are square roots of the denominators.",
      "For foci, use <span class='math'>c^2=a^2-b^2</span>."
    ]
  },
  hyperbolas: {
    bigIdea: "A hyperbola is identified by opposite signs on the squared terms.",
    bullets: [
      "The positive squared term tells the direction the hyperbola opens.",
      "For hyperbolas, use <span class='math'>c^2=a^2+b^2</span>.",
      "Asymptotes guide the shape of the graph.",
      "Always divide into standard form before reading features."
    ]
  },
  summary: {
    bigIdea: "Conic review is mostly classification plus feature-reading from standard form.",
    bullets: [
      "Circle: equal squared terms, same sign.",
      "Ellipse: same-sign squared terms, usually unequal stretches.",
      "Hyperbola: opposite-sign squared terms.",
      "Parabola: only one variable is squared."
    ]
  }
};

let currentMode = "parabolas";
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
      feedbackText.innerHTML = `Good. Try using <strong>${strategy}</strong>. Before calculating, identify the conic form you are using.`;
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
    feedbackText.innerHTML = "<span class='correct'>Correct.</span> Now connect the equation form to the geometric feature it reveals.";
    return;
  }

  streakCount = 0;
  updateStats();
  feedbackText.innerHTML = "<span class='incorrect'>Not quite yet.</span> Recheck the standard form and the feature you are reading from it.";
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
