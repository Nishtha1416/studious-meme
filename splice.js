// Challenge 1: Remove Middle Element
// Given an array of colors, use .splice() to remove the middle element.
// Example: ["red", "green", "blue", "yellow", "purple"] → remove "blue".
let arr = ["red", "green", "blue", "yellow", "purple"];
let middleIndex = Math.floor(arr.length / 2);
arr.splice(middleIndex, 1);
console.log(arr);

let arrayno = [10, 20, 30, 40];
arrayno.splice(1, 1, "15", "25");
console.log(arrayno);

let fruits = ["apple", "mango", "kiwi", "cherry"];
removed = fruits.splice(-2);
console.log(fruits);
console.log(removed);
let add = [3, 4, 5];
add.splice(0, 0, 1, 2);
console.log(add);
let remove = [10, 20, 30, 40, 50, 60];
remove.splice(2);
console.log(remove);

function reverseString(text) {
  return text.split("").reverse().join("");
}
console.log(reverseString("hello"));
function toTitleCase(sentence) {
  return sentence.toUpperCase();
}
console.log(toTitleCase("hello world"));
