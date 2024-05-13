let userName = "mastan"
let age = 19

// console.log(userName + age ); // outdated way to print some concated message

// string interpolation ==> ${} --> placeholder

// console.log(`hey i'm ${userName} and my age is ${age}`)

// console.log(userName.toUpperCase()); // it didn't change the string because it's a primitive type

// console.log(`original ${userName}`)

// console.log(`the length of ${userName} is ${userName.length}`);

// string methods
// console.log(userName.toUpperCase());
// console.log(userName.charAt(3));
// console.log(userName.slice(-6,3));
// console.log(userName.indexOf('s'));
const substr = userName.substring(0,2);
// console.log("   hey     ");
// console.log("   hey\nhey".trim());

const url = "https://google.com/mastaan%20shaik";
// console.log(url.replace('%20','-'));

// convert string as array based on something
const str = "mastan shaik is here to tell you something"
const arr = str.split(' ');
console.log(arr);