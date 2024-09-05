// --1. Merging Arrays--

// a) Using push() to Add an Array to Another Array:-
// The push() method adds elements to the end of an array. However, when used with arrays, it pushes the entire array as a single element, resulting in a nested array.

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); // This will push the dc_heros array as a single element
console.log(marvel_heros); // Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvel_heros[3][1]); // Accessing the nested array element "flash"
// This is not ideal for merging arrays because it creates a nested structure. To merge arrays properly, we use concat() or the spread operator.

// b) Using concat() to Merge Arrays
// concat() is used to merge two or more arrays into a new array without modifying the original arrays.

const allHeros = marvel_heros.concat(dc_heros); // Merges both arrays
console.log(allHeros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// c) Using the Spread Operator ... to Merge Arrays
// The spread operator (...) expands an array into individual elements, making it a more flexible way to merge arrays.

const all_new_heros = [...marvel_heros, ...dc_heros]; // Spreads both arrays into a new one
console.log(all_new_heros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]




// --2. Flattening Nested Arrays--

// If you have a multi-level nested array and want to flatten it into a single-level array, you can use the flat() method.

// a) Using flat() to Flatten an Array
// The flat() method creates a new array with all sub-array elements concatenated into it. You can specify the depth of flattening, or use Infinity to completely flatten deeply nested arrays.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // Flattens deeply nested arrays
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// Here, flat(Infinity) fully flattens any nested levels into a single array.




// --3. Array Utility Methods--

// a) Array.isArray()
// The Array.isArray() method checks whether a given value is an array or not, returning a boolean (true or false).

console.log(Array.isArray("Soubhagya")); // Output: false (since it's a string)
console.log(Array.isArray([1, 2, 3])); // Output: true (this is an array)


// b) Array.of()
// Array.of() creates a new array from a variable number of arguments. It is useful when you want to create an array of specific elements.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]


// c) Array.from()
// Array.from() creates a new array from an iterable (like strings, sets, or array-like objects).

const str = "Soubhagya";
const arr1 = Array.from(str);
console.log(arr1); // Output: ["S", "o", "u", "b", "h", "a", "g", "y", "a"]

console.log(Array.from({ name: "SRB" })); // returns [] "empty array" bcz we didn't mention from which to create an array {keys? or values?}

const arrayLike = {
  0: "first",
  1: "second",
  2: "third",
  length: 3,
};
const arr = Array.from(arrayLike);
console.log(arr); // Output: ["first", "second", "third"]

const obj = { name: "SRB", age: 25, profession: "Developer" };

// Array of keys
const keysArray = Object.keys(obj);
console.log("Keys:", keysArray); // Output: ["name", "age", "profession"]

// Array of values
const valuesArray = Object.values(obj);
console.log("Values:", valuesArray); // Output: ["SRB", 25, "Developer"]

// Array of key-value pairs
const entriesArray = Object.entries(obj);
console.log("Key-Value Pairs:", entriesArray); // Output: [["name", "SRB"], ["age", 25], ["profession", "Developer"]]

// Note: Array.from() works on array-like objects such as strings, node lists, or arguments objects. For non-iterables like plain objects, it returns an empty array unless you specify how to extract keys or values.
