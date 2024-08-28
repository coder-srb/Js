
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


//  --- Explicit conversion & Implicit conversion ---

// Number to String
let num = 42;
let strNumExplicit = String(num); // Explicit conversion
let strNumImplicit = num + "";    // Implicit conversion
console.log(strNumExplicit);      // "42"
console.log(typeof strNumExplicit); // "string"
console.log(strNumImplicit);      // "42"
console.log(typeof strNumImplicit); // "string"

// String to Number
let str = "123";
let numStrExplicit = Number(str); // Explicit conversion
let numStrImplicit = +str;        // Implicit conversion
console.log(numStrExplicit);      // 123
console.log(typeof numStrExplicit); // "number"
console.log(numStrImplicit);      // 123
console.log(typeof numStrImplicit); // "number"

// Boolean to Number
let boolTrue = true;
let numBoolTrueExplicit = Number(boolTrue); // Explicit conversion
let numBoolTrueImplicit = +boolTrue;        // Implicit conversion
console.log(numBoolTrueExplicit);       // 1
console.log(typeof numBoolTrueExplicit); // "number"
console.log(numBoolTrueImplicit);       // 1
console.log(typeof numBoolTrueImplicit); // "number"

let boolFalse = false;
let numBoolFalseExplicit = Number(boolFalse); // Explicit conversion
let numBoolFalseImplicit = +boolFalse;        // Implicit conversion
console.log(numBoolFalseExplicit);       // 0
console.log(typeof numBoolFalseExplicit); // "number"
console.log(numBoolFalseImplicit);       // 0
console.log(typeof numBoolFalseImplicit); // "number"

// Number to Boolean
let zeroNum = 0;
let boolZeroExplicit = Boolean(zeroNum); // Explicit conversion
let boolZeroImplicit = !!zeroNum;        // Implicit conversion
console.log(boolZeroExplicit);       // false
console.log(typeof boolZeroExplicit); // "boolean"
console.log(boolZeroImplicit);       // false
console.log(typeof boolZeroImplicit); // "boolean"

let nonZeroNum = 5;
let boolNonZeroExplicit = Boolean(nonZeroNum); // Explicit conversion
let boolNonZeroImplicit = !!nonZeroNum;        // Implicit conversion
console.log(boolNonZeroExplicit);       // true
console.log(typeof boolNonZeroExplicit); // "boolean"
console.log(boolNonZeroImplicit);       // true
console.log(typeof boolNonZeroImplicit); // "boolean"

// String to Boolean
let nonEmptyStr = "Hello";
let boolStrExplicit = Boolean(nonEmptyStr); // Explicit conversion
let boolStrImplicit = !!nonEmptyStr;        // Implicit conversion
console.log(boolStrExplicit);       // true
console.log(typeof boolStrExplicit); // "boolean"
console.log(boolStrImplicit);       // true
console.log(typeof boolStrImplicit); // "boolean"

let emptyStr = "";
let boolEmptyStrExplicit = Boolean(emptyStr); // Explicit conversion
let boolEmptyStrImplicit = !!emptyStr;        // Implicit conversion
console.log(boolEmptyStrExplicit);       // false
console.log(typeof boolEmptyStrExplicit); // "boolean"
console.log(boolEmptyStrImplicit);       // false
console.log(typeof boolEmptyStrImplicit); // "boolean"

// Null to Number
let nullVar = null;
let numNullExplicit = Number(nullVar); // Explicit conversion
let numNullImplicit = +nullVar;        // Implicit conversion
console.log(numNullExplicit);       // 0
console.log(typeof numNullExplicit); // "number"
console.log(numNullImplicit);       // 0
console.log(typeof numNullImplicit); // "number"

// Undefined to Number
let undefinedVar;
let numUndefinedExplicit = Number(undefinedVar); // Explicit conversion
let numUndefinedImplicit = +undefinedVar;        // Implicit conversion
console.log(numUndefinedExplicit);       // NaN
console.log(typeof numUndefinedExplicit); // "number"
console.log(numUndefinedImplicit);       // NaN
console.log(typeof numUndefinedImplicit); // "number"
