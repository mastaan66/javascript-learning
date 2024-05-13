// dates in js

const now = new Date();
// console.log(now.toDateString());
// console.log(typeof now); date is object in js

const date = new Date(2023, 0, 23);
const myDate = new Date(2023, 0, 23, 2, 35);
// console.log(myDate.toLocaleString());
// console.log(date);
console.log(date.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
    year: "numeric"
})); //can pass object and customization 
// timestamp

const myTimeStamp = Date.now();
// console.log(Math.floor(myTimeStamp/100));

// stopped at 3:10:00