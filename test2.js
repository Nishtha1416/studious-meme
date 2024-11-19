// Challenge 1: Insert Elements at a Specific Position
// Start with an array: [1, 2, 3, 7, 8, 9].
// Use .splice() to insert 4, 5, and 6 between 3 and 7.
// The result should be [1, 2, 3, 4, 5, 6, 7, 8, 9].

let arr = [1, 2, 3, 7, 8, 9];
arr.splice(3, 0, 4, 5, 6);
console.log(arr);
//Challenge 2: Remove Multiple Elements
// Start with an array: ["red", "green", "blue", "yellow", "purple", "orange"].
// Use .splice() to remove "blue", "yellow", and "purple" at once.
// The result should be ["red", "green", "orange"].
let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
colors.splice(2, 3);
console.log(colors);
// Challenge 3: Replace a Range of Elements
// Start with an array: [10, 20, 30, 40, 50].
// Use .splice() to replace 30 and 40 with 35, 37, and 39.
// The result should be [10, 20, 35, 37, 39, 50].

let range = [10, 20, 30, 40, 50];
range.splice(2, 2, 35, 37, 39);
console.log(range);
