const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
let currentTurn = "Player 1"

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", hoverIn);
  cell.addEventListener("mouseleave", hoverOut);
  cell.addEventListener("click", action, {once: true}
);
});


function action() {
  let currentClass = currentTurn === "Player 1" ? "cross" : "circle"
this.classList.add(currentClass);


currentTurn === "Player 1" 
? (currentTurn = "Player 2")
: (currentTurn = "Player 1");

message.innerText = `${currentTurn}'s Turn!`;
}

function hoverIn() {
  let currentClass = currentTurn === "Player 1" ? "cross" : "circle";
  if (this.classList.contains("cross") || this.classList.contains("circle")) {
    this.style.cursor = "not-allowed";
  } else {
    this.classList.add(`${currentClass}-hover`);
  } 
}

function hoverOut() {
  if (
    this.classList.contains("cross-hover") ||
    this.classList.contains("circle-hover")
  ) {
    this.classList.remove("cross-hover");
    this.classList.remove("circle-hover");
  }
}