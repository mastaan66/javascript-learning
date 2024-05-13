"use strict";

let accountId = "1234";
let accoutEmail = "msk@google.com";
let accountPassword = "abcd1234";
let isLoggedIn = false;
let name = "";

// console.log(typeof null); // null is an object

// convert string to integer
accountId = Number(accountId);
// console.log(typeof(accountId)); //successful

accountPassword = Number(accountPassword);
// console.log(accountPassword); //unsuccessful => as string constains other than numbers also
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

// console.table([accountId,accountPassword,accoutEmail])

// ###### Operations ######
let val = 32
let strVal = "12"
// console.log(val + strVal); // number and str concatenated (printed together)
// console.log(2 + 3 + "23"); // first it added 2,3 then concatenated with string and printed
// console.log("23"+ 1 + 2); // it concatenated with string 1 and then 2 and printed

// use parenthesis to avoid confusion.
// console.log(+true);
// console.log(true + 5);
// console.log(3 + false);
let userCount = 1;
++userCount;
// console.log(userCount++);
// console.log(userCount);

// comparisons 
// console.log(2 > 1); // obvious answer true
// console.log("2" > 1); // unsual comparison, try to avoid comparison between different datatypes

// null and comparison (avoid this)
// console.log(null > 0); 
// console.log(null == 0);
// console.log(null >= 0); // here >= operators converts null => 0

// strict check
// console.log("2" === 2);

// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

let id = Symbol('asdf');
let anotherid = Symbol('asdf');
// console.table([id,anotherid]);
// console.log(id === anotherid);

// BigInt
let bigValue = 12345676543234567n
// console.log(typeof bigValue);
// Reference Type (Non-Primitive Type):
// Arrays, Objects, Functions 

// ++++++++ Memory +++++++++
// Stack (Primitive), Heap (Reference)

let myName = "mastan"
let mySecondName = myName

// console.log(myName);
// console.log(mySecondName);
// second variable gets the copy not reference (STACK)
mySecondName = "sk"
// console.log(myName);
// console.log(mySecondName);

// (HEAP)

let User = {
    name: "abc",
    email: "abc@google.com"
}
let UserTwo = User

// User, UserTwo both are refering same value (object) in memory so if we change anyone both will change
UserTwo.name = "shaik"
console.table([User, UserTwo]);