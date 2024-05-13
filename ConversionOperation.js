"use strict";

let accountId = "1234";
let accoutEmail = "msk@google.com";
let accountPassword = "abcd1234";
let isLoggedIn = false;
let name = "";

console.log(typeof null); // null is an object

// convert string to integer
accountId = Number(accountId);
// console.log(typeof(accountId)); //successful

accountPassword = Number(accountPassword);
console.log(accountPassword); //unsuccessful => as string constains other than numbers also
// console.log(typeof(accountPassword)); 

// string to boolean
let booleanStr = Boolean(accountId);
// console.log(booleanStr); //successful
let boolStr = Boolean(0); // "" are treated as false
// console.log(boolStr);

// integer to string
let intToStr = String(1234)
// console.log(typeof intToStr);

// undefined, null, NaN
let num = Number(null); // null => 0
// console.log(num);

console.table([accountId,accountPassword,accoutEmail])