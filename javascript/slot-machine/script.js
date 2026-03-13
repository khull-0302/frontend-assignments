const options = ["$", "#", "*"];
let balance = 10;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// let pullLever = Number(prompt("how much do you want to bet? "));

const spinningWheel = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const slotChoice = options[Math.floor(Math.random() * 3)];
      resolve(slotChoice);
    }, 1000);
  });
};

async function spinMachine(yourBet) {
  let array = [];
  for (let i = 0; i < options.length; i++) {
    const symbol = await spinningWheel();
    console.log(symbol);
    array.push(symbol);
    console.clear();
    console.log(array);
  }

  await sleep(1000);
  if (array[0] === array[1] && array[1] === array[2]) {
    const winnings = yourBet * 5;
    balance += winnings;
    alert(`you won ${winnings}`);
  } else {
    alert("no matches try again");
  }
  alert(`your new balance is ${balance}`);
}
// loop = true;

async function playGame() {
  while (balance > 0) {
    let pullLever = Number(prompt("how much do you want to bet? "));
    if (pullLever === 0) {
      break;
    } else if (pullLever <= balance) {
      balance -= pullLever;
      await spinMachine(pullLever);
    } else {
      alert("not enough money");
      break;
    }
  }
}

playGame();
