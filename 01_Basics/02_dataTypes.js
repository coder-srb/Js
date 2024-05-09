"use strict"; // treat all JS code as newer version.

//alert(5*2)   // It'll not run on nodeJs, It is only functional on browser.

let name = "srb";
let age = 23;
let isLoggedIn = false;
let state = null;

//number => 2^53
//bigint
//string => ""
//boolean => true/false
//null => (object) standAlone value
//undefined => undefined
//symbol => unique

//object

// "typeof()" is used to show the dataType of a varibale
console.log(typeof age);  // number
console.log(typeof(age));  // number  //another way of using 

console.log(typeof "name");  // string
console.log(typeof isLoggedIn);  // boolean
console.log(typeof state);   //currently state is empty as we have passed "null" => an (object).
console.log(typeof undefined);  // undefined
console.log(typeof Symbol);
