// #1
const array = ["a", "b", "cc"];

function arrayFunc(arr) {
  let longest = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }

  return longest;
}

console.log(arrayFunc(array));

// #4
const numsOne = [1, 2, 3];
const numsTwo = [4, 5, 6];

function combineArray(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }

  return result;
}

console.log(combineArray(numsOne, numsTwo));

// #5
const sentence = "i am a sentence";

function caseSentence(string) {
  let newSentence = "";
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    newSentence += word[0].toUpperCase() + word.slice(1) + " ";
  }

  return newSentence.trim();
}

console.log(caseSentence(sentence));

// const sentence = "i am a sentence";

// function caseSentence(str) {
//   return str
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(caseSentence(sentence));

// #7
const sentence2 = "Hi there";

function alphabetize(str) {
  newWord = str.toLowerCase().trim().split("").sort().join("");
  return newWord.trim();
}

console.log(alphabetize(sentence2));

// #9
const user = {
  userName: "ryan",
  activeStatus: "away",
};
const login = (user) => {
  user.activeStatus = "active";
  return `${user.userName} is ${user.activeStatus}`;
};

console.log(login(user));
