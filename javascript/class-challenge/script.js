// #1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce = () => {
    return `Hi im ${this.name}, i am ${this.age}`;
  };
}

const person1 = new Person("alice", 25);

console.log(person1.introduce());

// #2
class Counter {
  constructor() {
    this.value = 0;
  }

  increment = () => {
    this.value++;
  };

  decrement = () => {
    if (this.value > 0) {
      this.value--;
    }
  };

  clear = () => {
    this.value = 0;
  };

  getValue = () => {
    return this.value;
  };
}

const counter = new Counter();

counter.increment();
counter.increment();
console.log(`incremented value: ${counter.getValue()}`);

counter.decrement();
console.log(`incremented value: ${counter.getValue()}`);

counter.decrement();
counter.decrement();
counter.decrement();
console.log(`wont go below zero: ${counter.getValue()}`);

counter.clear();
console.log(counter.getValue());

// #3
class Bank {
  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }
  deposit = (amount) => {
    this.balance += amount;
  };

  withdraw = (amount) => {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("not enough money");
    }
  };

  getBalance = () => {
    return this.balance;
  };
}

const Person1 = new Bank("Kaden", "Hull", 500);

Person1.deposit(50);
console.log(Person1.getBalance());

Person1.withdraw(30);
console.log(Person1.getBalance());

Person1.withdraw(700);
