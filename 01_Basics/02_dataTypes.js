"use strict"; // treat all JS code as newer version.

//alert(5*2)   // It'll not run on nodeJs, It is only functional on browser.

/**   --- datatypes ---
 *  JavaScript has several built-in data types, which can be broadly categorized into two groups: primitive types and objects.
 * 
 *  ⭐Primitive Data Types:
        1. Number: Represents both integer and floating-point numbers.
        2. String: Represents a sequence of characters.
        3. Boolean: Represents true or false.
        4. Undefined: Represents a variable that has been declared but not assigned a value.
        5. Null: Represents the intentional absence of any object value.
        6. Symbol: Represents a unique identifier (introduced in ES6).
        7. BigInt: Represents integers with arbitrary precision (introduced in ES2020).

*   ⭐Objects:
           Represents a collection of properties. This includes more complex data structures like Arrays, Functions, Dates, etc.

*  "typeof" is an operator in JavaScript that is used to determine the type of a given value or expression. It returns a string that indicates the data type of the operand.
*/

// Number
let num = 42;
console.log(typeof num); // "number"

// String
let str = "Hello, World!";
console.log(typeof str); // "string"


// Boolean
let isJavaScriptFun = true;
console.log(typeof isJavaScriptFun); // "boolean"

// Undefined
let undefinedVar;
console.log(typeof undefinedVar); // "undefined"

// Null
let nullVar = null;
console.log(typeof nullVar); // "object" (this is a known quirk in JavaScript)

// Symbol
let sym = Symbol("id");
console.log(typeof sym); // "symbol"

// BigInt
let bigIntVar = BigInt(9007199254740991);
console.log(typeof bigIntVar); // "bigint"

// Object
let obj = { name: "Alice", age: 25 };
console.log(typeof obj); // "object"

// Array (which is a type of object)
let arr = [1, 2, 3];
console.log(typeof arr); // "object"

// Function (which is also a type of object)
function greet() {
  return "Hello!";
}
console.log(typeof greet); // "function"
console.log(typeof greet()); // "String" bcz the function returns a string.

