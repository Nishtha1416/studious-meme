// let hello = "hello world";
// console.log(hello.length);

// let javas = "Javascript is fun";
// console.log(javas.toUpperCase());
// console.log(javas.toLowerCase());

// let fun1 = "Nishtha";
// console.log(fun1.charAt(2));
// let text = "hello world";
// console.log(text.indexOf("l"));
// console.log(text.lastIndexOf("d"));

// let hi = "JavaScript is fun";
// console.log(hi.includes("hi"));

// let funny = "Hello I am blessed";
// console.log(funny.slice(4, 10));

// let hello3 = "My name is Nishtha";
// console.log(hello3.substring(4, 10));
// let fun4 = "Hello World I am blessed, I am happy";
// console.log(fun4.replaceAll("I am", "you are"));
// console.log(fun4.replace("I am", "you are"));

// const fun5 = "   My name     is Nishtha Pahwa         ";
// console.log(fun5.trim());
// console.log(fun5.trimStart());
// console.log(fun5.trimEnd());
// console.log(fun5.split(" "));

// let text1 = "hello hi";
// let text2 = "World world world";
// console.log(text1.concat(" ", text2));
// console.log(text1.startsWith("hello"));
// console.log(text2.endsWith("World"));
// console.log(text2.repeat(4));
// challengse for string methods
function getInitials(fullName) {
  const nameParts = fullName.split(" ");
  const intials = nameParts.map((name) => name[0].toUpperCase()).join(".");
  return intials + ".";
}
console.log(getInitials("nishtha pahwa"));

function reverseString(text) {}

// string methods theory plus challenges
// JavaScript String Methods
// 1. .length
// Returns the length of a string (number of characters).
// Example:
// javascript
// Copy code
// let text = "hello";
// console.log(text.length); // 5
// 2. .toUpperCase() and .toLowerCase()
// Converts the string to uppercase or lowercase letters.
// Example:
// javascript
// Copy code
// let text = "Hello";
// console.log(text.toUpperCase()); // "HELLO"
// console.log(text.toLowerCase()); // "hello"
// 3. .charAt(index)
// Returns the character at the specified index.
// Example:
// javascript
// Copy code
// let text = "hello";
// console.log(text.charAt(1)); // "e"
// 4. .indexOf(substring) and .lastIndexOf(substring)
// .indexOf returns the index of the first occurrence of the substring. If not found, it returns -1.
// .lastIndexOf returns the last occurrence of the substring.
// Example:
// javascript
// Copy code
// let text = "hello world";
// console.log(text.indexOf("o")); // 4
// console.log(text.lastIndexOf("o")); // 7
// 5. .includes(substring)
// Checks if a substring exists within the string. Returns true or false.
// Example:
// javascript
// Copy code
// let text = "hello world";
// console.log(text.includes("world")); // true
// 6. .slice(start, end)
// Extracts part of the string, from start to end (not inclusive).
// Example:
// javascript
// Copy code
// let text = "hello world";
// console.log(text.slice(0, 5)); // "hello"
// 7. .substring(start, end) and .substr(start, length)
// .substring is similar to .slice but doesn’t accept negative indexes.
// .substr extracts a substring from start for a specific length.
// Example:
// javascript
// Copy code
// let text = "hello world";
// console.log(text.substring(0, 5)); // "hello"
// console.log(text.substr(6, 5));    // "world"
// 8. .replace(oldSubstring, newSubstring) and .replaceAll(oldSubstring, newSubstring)
// Replaces the first (or all) occurrences of a substring with a new one.
// Example:
// javascript
// Copy code
// let text = "hello world world";
// console.log(text.replace("world", "there"));    // "hello there world"
// console.log(text.replaceAll("world", "there")); // "hello there there"
// 9. .trim(), .trimStart(), and .trimEnd()
// Removes whitespace from both ends of a string (.trim()), the start (.trimStart()), or the end (.trimEnd()).
// Example:
// javascript
// Copy code
// let text = "  hello world  ";
// console.log(text.trim()); // "hello world"
// 10. .split(separator)
// Splits a string into an array of substrings, divided by the specified separator.
// Example:
// javascript
// Copy code
// let text = "hello world";
// console.log(text.split(" ")); // ["hello", "world"]
// 11. .concat(string1, string2, ...)
// Concatenates two or more strings.
// Example:
// javascript
// Copy code
// let text1 = "hello";
// let text2 = "world";
// console.log(text1.concat(" ", text2)); // "hello world"
// 12. .startsWith(substring) and .endsWith(substring)
// Checks if the string starts or ends with the specified substring.
// Example:
// javascript
// Copy code
// let text = "hello world";
// console.log(text.startsWith("hello")); // true
// console.log(text.endsWith("world"));   // true
// 13. .repeat(count)
// Repeats the string count times.
// Example:
// javascript
// Copy code
// let text = "hi ";
// console.log(text.repeat(3)); // "hi hi hi "
// Challenge: String Manipulation Practice
// Using what you've learned, complete the following tasks:

// Initials Extractor
// Write a function getInitials(fullName) that takes a full name (first and last name) and returns the initials in uppercase.
// Example: "Jane Doe" → "J.D."

// Reverse a String
// Write a function reverseString(text) that takes a string and returns it in reverse order.
// Example: "hello" → "olleh"

// Word Count
// Write a function countWords(sentence) that counts the number of words in a sentence. Assume words are separated by spaces.
// Example: "I love JavaScript" → 3

// Masking Email
// Write a function maskEmail(email) that takes an email address and masks part of it for privacy.
// Mask all characters in the username except for the first and last characters and keep the domain as is.
// Example: "johndoe@example.com" → "j*****e@example.com"

// Palindrome Checker
// Write a function isPalindrome(text) that checks if a string reads the same forwards and backwards, ignoring case and spaces.
// Example: "Racecar" → true, "hello" → false

// Find Longest Word
// Write a function findLongestWord(sentence) that returns the longest word in a sentence.
// Example: "JavaScript is fun" → "JavaScript"
