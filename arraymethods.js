// let arr1 = ["apple", "mango", "grapes"];
// arr1.push("cherry");
// console.log(arr1);

// let fruits = ["mango", "apple", "banana"];
// fruits.pop("mango");
// console.log(fruits);

// let cars = ["volvo", "bmw", "audi"];
// newCars = cars.shift();
// console.log(newCars);
// let cars = ["volvo", "bmw", "audi"];
// cars.unshift("swift");
// console.log(cars);
// let fruits = ["apple", "mango", "kiwi"];

// let someFruits = fruits.slice(1, 3);
// console.log(someFruits);

// let fruits = ["apple", "mango", "kiwi"];
// let someFruits = fruits.slice(1, 3);
// console.log(someFruits);

// let test1 = ["cars"];
// let test2 = ["newcars"];
// let test3 = test2.concat(test1);
// console.log(test3);

// let fruits = ["apple", "mango", "cherry"];
// console.log(fruits.join(" . "));
// let fruits = ["apple", "mango", "cherry"];
// fruits.reverse();
// console.log(fruits);

// let multipleOfTwo = [1, 2, 3, 4];
// let doubled = multipleOfTwo.map((num) => num * 2);
// console.log(doubled);

// let number = [1, 2, 4, 9, 12];
// let evens = number.filter((num) => num % 2 === 0);
// console.log(evens);
// let sum = number.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// Create an array of your favorite colors.
// Add a color to the end of the array and one to the beginning.
// Remove the last color and the first color.
// Print the modified array.

// let favColor = ["red", "blue", "white", "black"];
// favColor.unshift("pink");
// favColor.push("green");
// console.log(favColor);
// favColor.shift();
// favColor.pop();
// console.log(favColor);

// Challenge 2: Filter and Transform
// Create an array of numbers from 1 to 10.
// Use .filter() to create a new array of even numbers.
// Then, use .map() on the even numbers array to multiply each by 3.
// Print the resulting array.

// let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// newArry = arrayNumber.filter((num) => num % 2 === 0);
// console.log(newArry);
// let multipleThree = newArry.map((num) => num * 3);
// console.log(multipleThree);

// Challenge 3: Sum of Prices
// Create an array of objects, each representing an item with name and price properties.
// Use .reduce() to calculate the total price of all items.
// Print the total.

// let items = [
//   { name: "apple", price: 1500 },
//   { name: "mango", price: 150 },
//   { name: "banana", price: 10 },
// ];
// let newprice = items.reduce((sum, item) => sum + item.price, 0);
// console.log(newprice);
// Challenge 4: Find the Longest Word
// Create an array of words.
// Use .reduce() to find the longest word in the array.
// Print the longest word.
// practice again

// let arry = ["Javascript", "sadsffdgffgfghgnf", "fggfgfggdgd"];
// let long = arry.reduce((longest, curr) => {
//   return curr.length > longest.length ? curr : longest;
// }, "");
// console.log(long);
// Challenge 5: Stringify the Array
// Create an array of your favorite animals.
// Use .join() to convert the array into a single string, separated by commas.
// Print the result.

let favAnimals = ["panda", "bhallu", "parrot"];
let newList = favAnimals.join(", ");
console.log(newList);

// Challenge 6: Reverse and Sort
// Create an array of numbers in random order.
// Sort the array in ascending order.
// Then, reverse the sorted array to get it in descending order.
// Print the sorted array.
// understood problem first
// let arry1 = [1, 4, 6, 7, 8, 0, 12, 14, 6];
// newarry = arry1.reverse();
// console.log(newarry);
// sortarray = newarry.sort((a, b) => b - a);

// console.log(sortarray);
