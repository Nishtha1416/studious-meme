// Challenge 1: Storing and Retrieving Information
// Create a Map to store information about a book collection.
// Each key should be the book title, and each value should be the author's name.
// Add at least three books to the collection.
// Retrieve and print the author of one specific book.
let myCollection = new Map();
myCollection.set("To Kill a Mockingbird", "Harper Lee");
myCollection.set("1984", "George Orwell");
myCollection.set("The Great Gatsby", "F. Scott Fitzgerald");

let specificBook = "To Kill a Mockingbird";
console.log(
  `The author of "${specificBook}" is ${myCollection.get(specificBook)}.`,
);

// Challenge 2: Checking and Removing Elements
// Create a Map to store user information where keys are usernames and values are email addresses.
// Check if a specific username exists in the map.
// If it exists, remove it from the map and print the updated map.

let information = new Map();
information.set("nishtha", "nishtha@gmail.com");
information.set("nishtha2", "nish@gmail.com");
information.set("rajat", "rajat@gmail.com");
let userNameToCheck = "rajat";
if (information.has(userNameToCheck)) {
  information.delete(userNameToCheck);
  console.log(`Username "${userNameToCheck}" was found and removed.`);
} else {
  console.log(`Username "${userNameToCheck}" does not exist in the map.`);
}
console.log("Updated map:", information);
// Challenge 3: Word Count
// Create a function countWords(sentence) that takes a sentence as a parameter.
// Use a Map to count the occurrences of each word in the sentence.
// Print the word count map.

function countWords(sentence) {
  const words = sentence.split(" ");
  const wordCount = new Map();
  words.forEach((word) => {
    if (wordCount.has(word)) {
      wordCount.set(word, wordCount.get(word) + 1);
    } else {
      wordCount.set(word, 1);
    }
  });

  console.log(wordCount);
}

countWords("this is a test this is only a test");
// Challenge 4: Inventory Management
// Create a Map to represent an inventory where each key is an item name and each value is the quantity of that item.
// Add some items to the inventory.
// Write a function restock(item, amount) that increases the quantity of an item by a specified amount.
// Write a function sell(item, amount) that decreases the quantity of an item by a specified amount, but only if there’s enough stock.
// Print the inventory map after some restocking and selling.
// Challenge 5: Converting Between Maps and Arrays
// Create a Map with some sample data (like studentID and studentName).
// Convert the Map into an array of arrays.
// Reverse the process by creating a Map from that array.
// Print both the array and the new Map to verify they’re the same.
// Challenge 6: Multi-Type Keys
// Create a Map with different types of keys: a string, a number, and an object.
// Set values for each key type and retrieve them.
// Print each key-value pair to verify that Map can handle various key types.

let inventory = new Map([
  ["apple", 10],
  ["kiwi", "20"],
  ["orange", "90"],
]);
function restock(item, amount) {
  if (inventory.has(item)) {
    inventory.set(item, inventory.get(item) + amount);
  } else {
    inventory.set(item, amount);
  }
}
function sell(item, amount) {
  if (inventory.has(item) && inventory.get(item) >= amount) {
    inventory.set(item, inventory.get(item) - amount);
  } else {
    console.log(`Not enough stock to sell ${amount} of ${item}.`);
  }
}
restock("apple", 5); // Adds 5 to apple's quantity
sell("banana", 3); // Reduces banana's quantity by 3
sell("orange", 10); // Not enough stock, should display a message

// Print the updated inventory
console.log(inventory);

const studentMap = new Map([
  [101, "Alice"],
  [102, "Bob"],
  [103, "Charlie"],
]);

// Step 2: Convert the Map to an array of arrays
const studentArray = Array.from(studentMap);

// Step 3: Convert the array back to a Map
const newStudentMap = new Map(studentArray);

// Print the array and the new Map
console.log("Array of arrays:", studentArray);
console.log("Reconstructed Map:", newStudentMap);
// Step 1: Create a Map with different types of keys
const multiKeyMap = new Map();

// Set different types of keys and values
multiKeyMap.set("name", "John Doe"); // String key
multiKeyMap.set(42, "The Answer"); // Number key
const objKey = { id: 1 }; // Object key
multiKeyMap.set(objKey, "Object Key Value");

// Step 2: Retrieve and print each value
console.log("String key:", multiKeyMap.get("name"));
console.log("Number key:", multiKeyMap.get(42));
console.log("Object key:", multiKeyMap.get(objKey));

// Print the entire Map to verify
console.log("Multi-Type Key Map:", multiKeyMap);

// Expected output:
// String key: John Doe
// Number key: The Answer
// Object key: Object Key Value
// Multi-Type Key Map: Map { 'name' => 'John Doe', 42 => 'The Answer', { id: 1 } => 'Object Key Value' }
