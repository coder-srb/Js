// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// comarision bet diff dataTypes.
// javascript automatically converts datatypes of "string" into "number" then compares them.
console.log("2" == 2); // avoid this type of practice; use "Strict Check"
console.log("02" != 2);
// [strict check] => By using this we are restricting JavaScript to auto-change the dataType.
console.log("2" === 2);  // so always try to use strict check.
console.log("02" !== 2);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// comparision with "undefined" will always five "false".
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

