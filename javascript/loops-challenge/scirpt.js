// #QUESTON 1
// const user = {
//   loggedIn: true,
//   emailVerified: false,
//   isAdmin: false,
//   isBanned: false,
// };

// const user = {
//   loggedIn: true,
//   emailVerified: true,
//   isAdmin: true,
//   isBanned: false,
// };

// const user = {
//   loggedIn: true,
//   emailVerified: true,
//   isAdmin: false,
//   isBanned: false,
// };

// const user = {
//   loggedIn: true,
//   emailVerified: true,
//   isAdmin: false,
//   isBanned: true,
// };

// if (user.isBanned === true) {
//   console.log(`head to /Banned`);
// } else if (user.loggedIn == false) {
//   console.log("head to /login");
// } else if (user.loggedIn === true && user.emailVerified === false) {
//   console.log("head to /verify email");
// } else if (user.isAdmin === true) {
//   console.log("head to /admin");
// } else {
//   console.log("head to /dashboard");
// }

// #QUESTION 2
// const articles = [
//   { title: "Getting Started with React", views: 4200, published: true },
//   { title: "CSS Grid vs Flexbox", views: 8900, published: true },
//   { title: "Node.js Best Practices", views: 6100, published: false },
//   { title: "JavaScript Promises Explained", views: 12400, published: true },
//   { title: "Understanding REST APIs", views: 9750, published: true },
// ];

// let topArticle = null;

// for (let article of articles) {
//   if (article === false) {
//     continue;
//   }
//   if (!topArticle || article.views > topArticle.views) {
//     topArticle = article;
//   }
// }
// console.log(
//   `Most viewed: "${topArticle.title}" with ${topArticle.views} views`
// );

// #QUESTION 3
// let num = 12345;
// let arr = [];

// let str = num.toString();

// for (let i = 0; i < str.length; i++) {
//   arr.push(Number(str[i]));
// }

// console.log(arr);

// #OTHER OPTION
// function numToArray(num) {
//   let arr = [];
//   let str = num.toString();

//   for (let i = 0; i < str.length; i++) {
//     arr.push(Number(str[i]));
//   }

//   return arr;
// }

// console.log(numToArray(12345));

// #QUESTION 4
// let arrayOne = [1, 2, 3];
// let arrayTwo = ["a", "b", "c", "d"];

// let result = [];

// for (let i = 0; i < arrayOne.length; i++) {
//   for (let j = 0; j < arrayTwo.length; j++) {
//     result.push([arrayOne[i], arrayTwo[j]]);
//     result.push([arrayTwo[j], arrayOne[i]]);
//   }
// }

// console.log(result);
