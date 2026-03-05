const options = ["rock", "paper", "scissors"];

function playGame() {
  while (true) {
    let myChoice = prompt(
      "choose rock, paper, or scissors: Type exit to quit the game."
    );

    if (myChoice === null) break;

    myChoice = myChoice.trim().toLowerCase();
    if (myChoice === "exit") {
      break;
    }
    if (!myChoice) {
      alert("nothing entered, try again");
      continue;
    }
    if (!options.includes(myChoice)) {
      alert("Invalid selection");
      continue;
    }
    alert(`you chose ${myChoice}`);

    const computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    alert(`${options[0]}, ${options[1]}, ${options[2]}... Shoot!`);
    alert(`computer chose ${computerChoice}`);

    if (myChoice === computerChoice) {
      alert(`Tie! Both chose ${myChoice}`);
    } else {
      if (
        (myChoice === "rock" && computerChoice === "scissors") ||
        (myChoice === "paper" && computerChoice === "rock") ||
        (myChoice === "scissors" && computerChoice === "paper")
      ) {
        alert(`you win`);
      } else {
        alert(`computer wins`);
      }
    }
  }
}

playGame();
