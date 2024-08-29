// Basic comparisons
console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false (loose equality)
console.log(2 != 1);  // true (loose inequality)

/*  --- Type coercion ---
  Type coercion in JavaScript is the automatic conversion of one data type to another during an operation, 
  such as comparing values or performing arithmetic. For example, when comparing a string `"5"` and a number `5` using `==`,
  JavaScript converts the string to a number before making the comparison, resulting in `true`. 
  This can happen implicitly in various operations, which is why strict equality (`===`) is recommended to avoid unexpected results.
*/

/*
  Loose Equality (`==`)in JavaScript checks if two values are equal after performing type coercion, meaning it converts the values 
  to a common type before comparison. For example, `"5" == 5` returns `true` because the string `"5"` is coerced to the number `5`.

  Strict Equality (`===`) checks if two values are equal without performing type coercion
*/

// Loose equality vs. strict equality
console.log("2" == 2);  // true: "2" (string) is converted to 2 (number) before comparison
console.log("02" != 2); // false: "02" (string) is converted to 2 (number) before comparison

console.log("2" === 2);  // false: different types (string vs. number), no type conversion
console.log("02" !== 2); // true: different types (string vs. number), no type conversion

// Additional examples of loose vs. strict equality
console.log(false == 0);    // true: false is coerced to 0 (number)
console.log(false === 0);   // false: different types (boolean vs. number)
console.log(null == undefined); // true: null and undefined are loosely equal
console.log(null === undefined); // false: different types (null vs. undefined)

/* Comparisons with "null" and "undefined" can behave unexpectedly due to the way JavaScript handles these values, 
   so it's important to be aware of these behaviors when writing code. */

// Comparisons with null
console.log(null > 0);    // false: null is not converted to a number, not greater than 0
console.log(null == 0);   // false: null is not loosely equal to 0, only to undefined
console.log(null >= 0);   // true: null is converted to 0, so 0 >= 0 is true

// Additional examples with null
console.log(null < 1);    // true: null is converted to 0, so 0 < 1
console.log(null <= 0);   // true: null is converted to 0, so 0 <= 0

// Comparisons with undefined
console.log(undefined == 0);  // false: undefined is not loosely equal to 0
console.log(undefined > 0);   // false: undefined is not converted to a number
console.log(undefined < 0);   // false: undefined is not converted to a number

// Additional examples with undefined
console.log(undefined == null); // true: undefined is loosely equal to null
console.log(undefined === null); // false: different types (undefined vs. null)
console.log(undefined >= 0); // false: undefined is not converted to a number
console.log(undefined <= 0); // false: undefined is not converted to a number

// Other type coercion examples
console.log("10" > "2");  // false: compares strings lexicographically (as text)
console.log("10" > 2);    // true: "10" (string) is converted to 10 (number) before comparison
console.log(true == 1);   // true: true is coerced to 1 (number)
console.log(false == 0);  // true: false is coerced to 0 (number)
