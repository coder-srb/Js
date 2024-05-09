
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let score1 = 33   //number
let score2 = "33"  //string
let score2_1 = "01SRB" //string
let score3 = null //object
let score4 = true //boolean

console.log(typeof score1); 
console.log(typeof score2);  // score2 is a string.
console.log(typeof score2_1); // score2 is a string.
console.log(typeof score3);  // score3 is a null object.
console.log(typeof(score4)); // score3 is a boolean value.

// to convert a "string" dataType into a "number" type we use `Number()`

let score2InNumber = Number(score2);  //score2 is converted to "number" dataType.
console.log(typeof score2InNumber);
console.log(score2InNumber);  // returns (33) but now it is not a string anymore, it is converted into number.

let score2_1InNumber = Number(score2_1);  
console.log(typeof score2_1InNumber); /* when we try to convert a "string" value(which doesn't contain a number value) into "number" then it gets converted into "number" succesfully 
but doesn't print the value bcz the actual value() is not a number. */
console.log(score2_1InNumber);  //returns (NaN) => "Not a Number" bcz we have forced to convert a string value into a number; if we check the actual value which is "33abc" => Not a Number.

let score3InNumber = Number(score3);
console.log(typeof score3InNumber);
console.log(score3InNumber); // '0'. so when we convert a "null" object into "number" dataType, it returns (0).

let score4InNumber = Number(score4);
console.log(typeof score4InNumber);
console.log(score4InNumber); // '1' [true => 1, false => 0]

// conversion into "number" type
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// conversion into "boolean" type
// 1 => true; 0 => false
// "" => false
// "hitesh" => true