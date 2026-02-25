// #1 INPUT IS STRING
// function isString(string) {
//   return typeof string === "string";
// }
// console.log(isString("abc"));
// console.log(isString(190));

// INPUT P2
const input1 = "abc";
const input2 = 190;
console.log(typeof input1 === "string");
console.log(typeof input2 === "string");

// #2 STRING IS BLANK

const blankStr = " ";
console.log(blankStr.trim() === "");
console.log(" " === "");

// #3 CAPITALIZING FIRST LETTER
const firstName = "abcde";
const capitalized = firstName[0].toUpperCase() + firstName.slice(1);
console.log(capitalized);
console.log(firstName.slice(1));

// #4 ABBREVIATING
const fullName = "Kaden Hull";
const splitName = fullName.split(" "); // ["Kaden", "Hull"]
const firstName = splitName[0]; // "Kaden"
const lastInitial = splitName[1][0]; // "H"
const abbreviated = firstName + " " + lastInitial + ".";
console.log(abbreviated);

// ABBR P2
// const fullName = "Kaden Hull";
// const splitName = fullName.split(" "); // ["Kaden", "Hull"]
// const firstName = splitName.shift(); // "Kaden"
// const lastInitial = splitName[0][0]; // "H"
// const abbreviated = firstName + " " + lastInitial + ".";
// console.log(abbreviated);

// ABBR P3
// const fullName = "Kaden Hull";
// const splitName = fullName.split(" "); // ["Kaden", "Hull"]
// const firstName = splitName[0]; // "Kaden"
// const lastInitial = splitName[1][0] + "."; // "H."
// const abbreviated = firstName + " " + lastInitial;
// console.log(abbreviated);

// #5
const sentence = "hello i am Kaden";
const index = 5;
const splitSent = sentence.slice(0, index);
console.log(splitSent);
const trunc = splitSent + "...";
console.log(trunc);

// #6 SPLICING AND RETURNING NEW STRING
const str = "The practitioners grappled on the road side!";
const char = "g";
console.log(str.slice(str.indexOf("char")));

// #SPLICE P2
const str = "The practitioners grappled on the road side!";
const array = str.split(" ");
console.log(array);
const splice = array.slice(2);
console.log(splice);
const newString = splice.join(" ");
console.log(newString);
