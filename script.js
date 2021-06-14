const container = document.querySelector(".container");
const button = document.getElementById("button");

function addSquarestoContainer(num, callback) {
  for (let i = 0; i < num; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = "This is a square";
    container.appendChild(square);
  }
  callback();
}

function addHoverEffect() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", (e) => hoverEffect(e));
  });
  console.log(squares);
}

function hoverEffect(e) {
  e.target.classList.toggle("bcg-blue");
}

function clearGrid() {
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

button.addEventListener("click", () => {
  clearGrid();
  promptedSquares();
});

function promptedSquares() {
  let answer = parseInt(prompt("how many squares would you like to add?"));
  answer > 100 ? (answer = 100) : (answer = answer);
  addSquarestoContainer(answer, addHoverEffect);
}

addSquarestoContainer(16, addHoverEffect);
