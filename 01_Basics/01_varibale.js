

/* In javaScript we follow CamelCase while writing a String or any word.
CamelCase is a way to separate the words in a phrase by making the first letter of each word capitalized and not using spaces. */

const accountId = 2123;
let accountEmail = "abc@gmail.com";
var accountPassword = "Srb12";   // don't use keyword "var" anymore.
accountCity = "cuttack";   // we can also initialise a varibale without any keyword(const, var, let) but it's not a good practice.
let accountState;   // returns "undefined" bcz we've not initialised the varibale yet. we've just declared it.

// accountId = 99999;        //(error) constants can't be modified.
// console.log(accountId);

console.log(accountId);  // to print output on terminal we use "console.log" 
console.log(accountEmail);

// but in-order to print values in tabular form use "console.table" 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



//  --- var vs let ---

// 1. Scope issue:
if (true) {
  var x = 10;
  let y = 20;
}
console.log(x); // 10 (var is accessible outside the block)
console.log(y); // ReferenceError: y is not defined (let is not accessible outside the block)

// 2. Re-declaration issue:
var c;
var c;   // No error, c is re-declared
let d;
let d;   // SyntaxError: Identifier 'd' has already been declared

// 3. Hoisting issue:
console.log(a); // No error, undefined (var is hoisted)
var a = 10;
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

/** 
Why We Prefer let Over var:
        1. Block Scope: let provides block-level scoping, which aligns more closely with how most other programming languages handle variable scope. 
           This helps avoid common bugs related to variable leakage outside of loops or conditionals.

        2. No Re-declaration: let prevents accidental re-declaration of variables, making the code more predictable and easier to maintain.
        
        3. Temporal Dead Zone: let avoids the issues caused by hoisting with var, making it clearer when and where a variable can be used.
 */
