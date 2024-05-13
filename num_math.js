const score = 320;
// console.log(score);

const numScore = new Number(400);
// console.log(numScore.toPrecision(2));

const number = 123456789;
// console.log(`the length of ${number} is ${number.toString().length}`);

const otherNumber = new Number(10000000);

// console.log(otherNumber.toLocaleString('en-US'));

// console.log(`${Math.abs(-12345)}`);
// console.log(`${Math.round(4.6)}`);
// console.log(`${Math.ceil(4.6)}`);
// console.log(`${Math.floor(4.6)}`);

// generate numbers in a range 
max = 20
min = 10
for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random()*(max - min + 1)) + min)
}