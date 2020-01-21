// select all elements with a class of ".box" from the html.
let boxes = document.querySelectorAll(".box");
// our counter
let currentPlayer = 0;
const winningNumbers = [
  [boxes[0], boxes[1], boxes[2]],
  [boxes[3], boxes[4], boxes[5]],
  [boxes[6], boxes[7], boxes[8]],
  [boxes[0], boxes[3], boxes[6]],
  [boxes[1], boxes[4], boxes[7]],
  [boxes[2], boxes[5], boxes[8]],
  [boxes[0], boxes[4], boxes[8]],
  [boxes[2], boxes[4], boxes[6]]
];

// this is our event listener listening for clicks
boxes.forEach(function(box) {
  box.addEventListener("click", cellClicked);
});

// the function being ran
function cellClicked(e) {
  if (currentPlayer % 2 == 0) {
    e.target.textContent = "X";
    currentPlayer++;
  } else {
    e.target.textContent = "O";
    currentPlayer++;
  }

  if (currentPlayer == 9) {
    alert("draw");
  } else {
    checkWin();
  }
}

function checkWin() {
  for (var i = 0; i < winningNumbers.length; i++) {
    let playerOneSum = 0;
    for (var j = 0; j < winningNumbers[i].length; j++) {
      if (winningNumbers[i][j].textContent === "X") {
        playerOneSum++;
      }
    }

    if (playerOneSum === 3) {
      alert("X Wins");
    }
  }

  for (var i = 0; i < winningNumbers.length; i++) {
    let playerTwoSum = 0;
    for (var j = 0; j < winningNumbers[i].length; j++) {
      if (winningNumbers[i][j].textContent === "O") {
        playerTwoSum++;
      }
    }

    if (playerTwoSum === 3) {
      alert("O Wins");
    }
  }
}
button = document.querySelector("button");

function boxbro() {

console.log(location.reload)

};