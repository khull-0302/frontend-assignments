class User {
  constructor(firstName, lastName, email, password, balance = 0.0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.balance = balance;
    this.transactions = [];
  }

  addTransaction(type, amount) {
    this.transactions.push({ type, amount });
    updateTransactionHistory(type, amount);
  }
}

const users = [
  new User("Kaden", "Hull", "kh.com", "1234"),
  new User("Lola", "Bunny", "lb.com", "1234"),
  new User("Kes", "Heath", "h.com", "1234"),
];

let loggedInUser = null;

// show or hide elements by classname
function toggleVisibility(className, shouldShow) {
  const elements = document.getElementsByClassName(className);
  Array.from(elements).forEach((element) => {
    element.classList.toggle("hidden", !shouldShow);
  });
}

function updateTextContent(className, text) {
  const element = document.querySelector(`.${className}`);
  if (element) element.textContent = text;
}

function showGreeting() {
  if (loggedInUser) {
    updateTextContent("user-greeting", `hello, ${loggedInUser.firstName}`);
  }
}

function showBalance() {
  if (loggedInUser) {
    updateTextContent(
      "balance-display",
      `your balance is $${loggedInUser.balance.toFixed(2)}`
    );
  }
}

function login() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    // get user balance
    // show greeting
    loggedInUser = user;
    toggleVisibility("login-section", false);
    toggleVisibility("atm-menu", true);
    toggleVisibility("transaction-history", true);
    showBalance();
    showGreeting();
  } else {
    toggleVisibility("login-error", true);
  }
  console.log(user);
}

function logout() {
  [
    "atm-menu",
    "transaction-history",
    "receipt-section",
    "deposit-section",
    "withdraw-section",
  ].forEach((className) => {
    toggleVisibility(className, false);
  });
  document.querySelector(".transaction-list").innerHTML = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  loggedInUser = null;
  toggleVisibility("login-section", true);
}

function toggleTransactions(type) {
  toggleVisibility("deposit-section", type === "deposit");
  toggleVisibility("withdraw-section", type === "withdraw");
}

function completeTransaction(type) {
  const amountInputId =
    type === "deposit" ? "deposit-amount" : "withdraw-amount";
  const amount = parseFloat(document.getElementById(amountInputId).value);
  const errorClass = `${type}-error`;
  let errorMessage = "";

  if (isNaN(amount) || amount <= 0) {
    errorMessage = "please enter a valid amount.";
  } else if (type === "withdraw" && amount > loggedInUser.balance) {
    errorMessage = "insufficient funds.";
  }

  if (errorMessage) {
    const errorEl = document.querySelector(`.${errorClass}`);
    errorEl.textContent = errorMessage;
    toggleVisibility(errorClass, true);
    setTimeout(() => toggleVisibility(errorClass, false), 3000);
  } else {
    toggleVisibility(errorClass, false);
    loggedInUser.balance += type === "deposit" ? amount : -amount;
    loggedInUser.addTransaction(
      type === "deposit" ? "Deposit" : "Withdrawal",
      amount
    );
    showBalance();
    document.getElementById(amountInputId).value = "";
    toggleVisibility(`${type}-section`, false);
  }
}

function updateTransactionHistory(type, amount) {
  const transactionList = document.querySelector(".transaction-list");
  const transactionItem = document.createElement("li");
  transactionItem.classList.add(type === "Deposit" ? "deposit" : "withdraw");
  transactionItem.textContent = `${type}: $${amount.toFixed(2)}`;
  transactionList.appendChild(transactionItem);

  while (transactionList.children.length > 5) {
    transactionList.removeChild(transactionList.firstChild);
  }
}
