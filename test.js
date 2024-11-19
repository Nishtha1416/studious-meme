// Array of Objects
// Create an array called library that contains three objects, each representing a book with properties title, author, and year.
// Write a function called findBookByTitle that takes a title as a parameter and returns the book object with that title.
// Test this function with different titles and print the results.

const library = [
  {
    title: "three mistakes of my life",
    author: "chetan bhagat",
    year: "2008",
  },
  {
    title: "three mistakes of my life2",
    author: "chetan bhagat2",
    year: "2018",
  },
  {
    title: "three mistakes of my life3",
    author: "chetan bhagat3",
    year: "1928",
  },
];
//Write a JavaScript expression that demonstrates the use of all five primitive types: string, number, boolean, null, and undefined.

let str = "Hello";
let number = 2;
let value = true;
let x = null;
let notDefined;
// Write a function that takes two numbers as input and returns true if the first number is greater than or equal to the second number; otherwise, it should return false.

function greaterThan(a, b) {
  if (a >= b) {
    return true;
  } else {
    return false;
  }
}
console.log(greaterThan(10, 10));
// Write a switch statement that prints a different message for each day of the week.
let day = "Saturday";
switch (day) {
  case "Sunday":
    console.log("First day of the week");
    break;
  case "Monday":
    console.log("Second day of the week");
    break;
  case "Tuesday":
    console.log("Third day");
    break;
  case "Wednesday":
    console.log("Fourth day");
    break;

  case "Thrusday":
    console.log("Fifth day");
    break;
  case "Friday":
    console.log("Sixth day");
    break;
  case "Saturday":
    console.log("Seventh day");
    break;
  default:
    console.log("Invaild day");
}
// Write a loop that sums all even numbers in an array.

let evenNumberAdd = [2, 4, 9, 11, 10, 13];
let sum = 0;
for (let num of evenNumberAdd) {
  if (num % 2 === 0) {
    sum += num;
  }
}
console.log(sum);

// Write an arrow function that takes an array of numbers and returns a new array with each number squared.

const sqNumbers = (numbers) => numbers.map((num) => num * 2);
const nums = [1, 2, 3, 4, 5];

const squared = sqNumbers(nums);
console.log(squared);
// Write code to perform the following:

// Create an array of numbers.
// Add a number to the end of the array.
// Remove the first number.
// Use map to create a new array where each number is doubled.
// Use filter to create a new array containing only the numbers greater than 10.
let arrayno = [1, 2, 3, 4, 5];

arrayno.push(11);

arrayno.shift();
console.log(arrayno);
let doubled = arrayno.map((num) => num * 2);
console.log(doubled);
let filtered = doubled.filter((num) => num > 10);
console.log(filtered);
// Write a function that takes an object with nested properties and flattens it into a single-level object. For example:
// Input: { a: 1, b: { c: 2, d: { e: 3 } } }
// Output: { a: 1, 'b.c': 2, 'b.d.e': 3 }
// function flattenObject(obj, prefix = "") {
//     let result = {};
//     for (let key in obj) {
//       let newKey = prefix ? `${prefix}.${key}` : key;
//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         Object.assign(result, flattenObject(obj[key], newKey));
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//     return result;
//   }

//   console.log(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }));
