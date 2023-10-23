let reset = document.querySelector("#btn");
document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      let winner = "";
      if (playerTime == 0) {
        winner = "Shield";
      } else {
        winner = "Swords";
      }
      alert("The Game is Over - who won was the " + winner);
      reset.style.display = "inline-block";
    }, 10);
  }
  updateSquare(position);
}
function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  counter = 0;
  reset.style.display = "none";
  resetSquare();
}

function resetSquare() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.innerHTML = ``;
  });
}
