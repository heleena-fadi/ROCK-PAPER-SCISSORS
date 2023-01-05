const playButton = document.getElementById("play");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const title = document.getElementById("title");
const hand = document.getElementById("hand");
const hand1 = document.getElementById("hand1");

function play() {
  playButton.style.display = "none";
  rockButton.style.display = "block";
  paperButton.style.display = "block";
  scissorsButton.style.display = "block";
  title.textContent = "Try Your Luck!";
}

function start() {
  playButton.style.display = "block";
  rockButton.style.display = "none";
  paperButton.style.display = "none";
  scissorsButton.style.display = "none";
}
playButton.addEventListener("click", () => {
  play();
});

function choose(value) {
  const values = ["rock", "paper", "scissors"];
  hand.classList.add("move_hand");
  hand1.classList.add("move_hand");

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 3);
    const computerValue = values[randomNumber];
    let status = "";
    hand.classList.remove("move_hand");
    hand1.classList.remove("move_hand");

    if (value === "rock") {
      if (computerValue === "rock") {
        status = "draw";
      } else if (computerValue === "paper") {
        status = "lose";
      } else {
        status = "win";
      }
    } else if (value === "paper") {
      if (computerValue === "rock") {
        status = "win";
      } else if (computerValue === "paper") {
        status = "draw";
      } else {
        status = "lose";
      }
    } else {
      if (computerValue === "rock") {
        status = "lose";
      } else if (computerValue === "paper") {
        status = "win";
      } else {
        status = "draw";
      }
    }
    showResult(status);
  }, 2000);
}

function showResult(status) {
  if (status === "lose") {
    title.textContent = "Lose!";
  } else if (status === "win") {
    title.textContent = "Win!";
  } else {
    title.textContent = "Draw!";
  }
  start();
}
rockButton.addEventListener("click", () => {
  choose("rock");
});

paperButton.addEventListener("click", () => {
  choose("paper");
});

scissorsButton.addEventListener("click", () => {
  choose("scissors");
});
