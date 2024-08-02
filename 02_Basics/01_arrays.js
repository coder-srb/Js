// array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(typeof myArr);
const myHeors = ["shaktiman", "naagraj"]
console.log(typeof myHeors);

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);  // array elements can be accessed using index.

// Array methods
myArr.push(6)    // "push" method add new element in the end of the array
myArr.push(7)
myArr.pop()      // "pop" method removes the last element of the array
console.log(myArr);

myArr.unshift(9)   // "unshift" method add new element in the begining of the array
myArr.unshift(5)
myArr.shift()    // "shift" method removes the first element of the array
console.log(myArr);

console.log(myArr.includes(9)); // It checks for an element is present inside array or not! gives "boolean" output

console.log(myArr.indexOf(45));  // if the element is not present inside array, then it returns "-1".
console.log(myArr.indexOf(3));  // if the element is present inside array, then it returns "the index" where it is present.


// slice vs splice

console.log("A", myArr);
const arr1 = myArr.slice(1,3);  //original array [myArr] doesn't change
console.log(arr1);
console.log("B", myArr);

const arr2 = myArr.splice(1,3);   //original array [myArr] changes
console.log("C", myArr);
console.log(arr2);

