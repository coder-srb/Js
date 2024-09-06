// --- 1. Destructuring Objects ---  
// destructuring is done using curly braces {}
// Object destructuring allows you to extract properties from an object and assign them to variables in one statement.

/*
Basic Syntax:   const { key1, key2 } = object;
*/

// Example:
const user = {
  name: "Alice",
  age: 25,
  city: "New York",
};

// Destructuring
const { name, age } = user;
console.log(name); // "Alice"
console.log(age); // 25

// Renaming Variables:  You can rename the variable when destructuring by using a colon (:).
const user1 = { name1: "Alice", age1: 25 };
const { name1: userName, age1: userAge } = user1;

console.log(userName); // "Alice"
console.log(userAge); // 25

// Default Values:  You can set default values if the property does not exist in the object.
const user2 = { name2: "Alice" };
const { name2, age2 = 18 } = user2;
console.log(age); // 18 (default value)

// Nested Destructuring:  You can also destructure nested objects.
const user3 = {
  name: "Alice",
  address: { city: "New York", country: "USA" },
};

const {
  address: { city, country },
} = user3;
console.log(city); // "New York"
console.log(country); // "USA"


// ------------------------------------------------------------------------------------------------------------


// --- 2. Destructuring Arrays ---
            // Array destructuring allows you to unpack values from an array into distinct variables.
                
/* Basic Syntax:  const [item1, item2] = array; */

// Example:
const numbers = [1, 2, 3];

// Destructuring
const [first, second] = numbers;
console.log(first);  // 1
console.log(second); // 2

// Skipping Values:   You can skip elements in an array by leaving empty spaces between commas.
const numbers1 = [1, 2, 3, 4];
const [first1, , third1] = numbers1;  // Skipping the second value
console.log(third1); // 3


// Default Values:    You can set default values for array elements if the index does not exist.
const numbers2 = [1];
const [first2, second2 = 0] = numbers2;
console.log(second2); // 0 (default value)

// Rest Operator (...):    You can use the rest operator (...) to gather the remaining elements into a new array.
const numbers3 = [1, 2, 3, 4];
const [first3, ...rest] = numbers3;// Rest operator to gather remaining values
console.log(rest);  // [2, 3, 4]

// Nested Destructuring:    You can destructure arrays inside arrays.
const nestedArray = [1, [2, 3]];
const [first4, [second4, third4]] = nestedArray;

console.log(second4); // 2
console.log(third4);  // 3
