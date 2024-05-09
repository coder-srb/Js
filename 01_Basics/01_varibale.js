

/* In javaScript we follow CamelCase while writing a String or any word.
CamelCase is a way to separate the words in a phrase by making the first letter of each word capitalized and not using spaces. */

const accountId = 2123;
let accountEmail = "abc@gmail.com";
var accountPassword = "Srb12";   // don't use keyword "var" anymore.
accountCity = "cuttack";   // we can also initialise a varibale without any keyword(const, var, let) but it's not a good practice.
let accountState;   // returns "undefined" bcz we've not initialised the varibale yet. we've just declared it.

// accountId = 99999;        //(error) constants can't be modified.
// console.log(accountId);

/* prefer not to use keyword "var" for declaring or intialising varibales 
because of issue in block scope and functional scope. */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* to print output on terminal we use "console.log" 
but in-order to print values in tabular form use "console.table" */