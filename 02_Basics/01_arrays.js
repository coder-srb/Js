/**
 * In JavaScript, arrays are powerful data structures that allow you to store multiple values in a single variable.
- Array creation
- Element access and modification methods (`push`, `pop`, `unshift`, `shift`)
- Searching methods (`includes`, `indexOf`)
- Sub-array extraction (`slice`, `splice`)
- Other methods like `concat`, `join`, `reverse`, `sort`, and iteration methods (`forEach`, `map`, `filter`, `reduce`). 
 */

// ---------------------------------------------------------------------------------------------------------------

// 1. **Array Declaration and Initialization**

/* There are two common ways to declare arrays in JavaScript:
    - Using square brackets `[]`
    - Using the `new Array()` constructor
*/    
// Using square brackets `[]`
const myArr = [0, 1, 2, 3, 4, 5];
console.log(typeof myArr);  // Output: 'object' (arrays are special objects in JS)

const myHeroes = ["Shaktiman", "Naagraj"];
console.log(typeof myHeroes);  // Output: 'object'

// Using new Array() constructor
const myArr2 = new Array(1, 2, 3, 4);

// ---------------------------------------------------------------------------------------------------------------

// 2. **Accessing Elements**
console.log(myArr[1]);  // Output: 1

// ---------------------------------------------------------------------------------------------------------------

// 3. **Array Methods**

// a) **`push()`** - Adds new elements to the **end** of the array.
myArr.push(6);  // Adds 6 to the end
myArr.push(7);  // Adds 7 to the end
console.log(myArr);  // Output: [0, 1, 2, 3, 4, 5, 6, 7]

// b) **`pop()`** - Removes the **last** element of the array.
myArr.pop();  // Removes 7
console.log(myArr);  // Output: [0, 1, 2, 3, 4, 5, 6]

//  c) **`unshift()`** - Adds new elements to the **beginning** of the array.
myArr.unshift(9);  // Adds 9 at the beginning
myArr.unshift(5);  // Adds 5 at the beginning
console.log(myArr);  // Output: [5, 9, 0, 1, 2, 3, 4, 5, 6]

// d) **`shift()`** - Removes the **first** element of the array.
myArr.shift();  // Removes 5
console.log(myArr);  // Output: [9, 0, 1, 2, 3, 4, 5, 6]

// ---------------------------------------------------------------------------------------------------------------

// 4. **Checking for Elements**

// a) **`includes()`** - Checks if an element is present in the array (returns a boolean).
console.log(myArr.includes(9));  // Output: true (9 is in the array)

//  b) **`indexOf()`** - Returns the index of the element if it exists, otherwise returns `-1`.
console.log(myArr.indexOf(45));  // Output: -1 (45 is not in the array)
console.log(myArr.indexOf(3));   // Output: 4 (3 is at index 4)

// ---------------------------------------------------------------------------------------------------------------

//  5. **`slice()` vs `splice()`**

//  a) **`slice()`** - Extracts a portion of an array **without modifying** the original array.
console.log("Original Array:", myArr);  // Output: [9, 0, 1, 2, 3, 4, 5, 6]
const slicedArr = myArr.slice(1, 3);  // Extracts elements from index 1 to 2 (3 not included)
console.log(slicedArr);  // Output: [0, 1]
console.log("After Slice:", myArr);  // Original array remains unchanged

//  b) **`splice()`** - Removes or replaces elements from an array, and **modifies the original array**.
const splicedArr = myArr.splice(1, 3);  // Removes 3 elements starting from index 1
console.log("After Splice:", myArr);  // Output: [9, 3, 4, 5, 6] (modified array)
console.log(splicedArr);  // Output: [0, 1, 2] (the removed elements)

// ---------------------------------------------------------------------------------------------------------------

//  6. **Other Useful Array Methods**

//  a) **`concat()`** - Joins two or more arrays without changing the original arrays.
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const arrC = arrA.concat(arrB);  // Combines arrA and arrB
console.log(arrC);  // Output: [1, 2, 3, 4, 5, 6]

// b) **`join()`** - Joins all elements of an array into a string.
const arrD = ["Hello", "World"];
console.log(arrD.join(" "));  // Output: 'Hello World'

//  c) **`reverse()`** - Reverses the order of elements in an array (modifies original array).
myArr.reverse();
console.log(myArr);  // Output: [6, 5, 4, 3, 9]

//  d) **`sort()`** - Sorts the elements of an array alphabetically or numerically (modifies original array).
myArr.sort();  // Sorts numerically or lexicographically
console.log(myArr);  // Output depends on data type and comparator function

// ---------------------------------------------------------------------------------------------------------------

// 7. **Iterating Over Arrays**

//  a) **`forEach()`** - Executes a function for each element in the array.
myArr.forEach((item, index) => {
  console.log(`Item at index ${index}: ${item}`);
});

// b) **`map()`** - Creates a new array by applying a function to each element.
const squaredArr = myArr.map(item => item * item);
console.log(squaredArr);  // Output: [36, 25, 16, 9, 81] (square of each element)

// c) **`filter()`** - Creates a new array with elements that pass a certain test.
const evenNumbers = myArr.filter(item => item % 2 === 0);
console.log(evenNumbers);  // Output: [6, 4] (only even numbers)

// d) **`reduce()`** - Reduces the array to a single value by applying a function.

const sum = myArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // Output: sum of all elements
