
/**
 * Overally DataTypes in Js is divided into 2 types :- "premitive" & "non-premetive".
 * This classification is based on how data is stored and accessed from memory:- "call_by_Value" & "call_by_Reference".
 * 
 * {Premitive DataTypes}
 * All the premitive datatypes are call-by_Value types, the actual original data is not passed, only a copy of data is passed. 
 * It means we get a copy of the original value not the reference to the address where the original data is stored.
 * So the changes we made to that data it only reflects in copied data, not in the original data.
 * 7 types : String, Number, Boolean, null, undefined, Symbol, bigint
 * 
 * {Non-Premitive DataTypes}
 * All the premitive datatypes are call-by_Reference types, here the actual original data is passed, 
 * by giving the reference to the address where original data is stored.
 * types : Array, Objects, Functions
 * 
 * Since JS is a [dynamic typed] language, we don't have to mention the datatypes of the variables while declaring them.
 * dynamically-typed languages perform type checking at runtime, while statically typed languages perform type checking at compile time.
 * statically-typed languages => Java, C, C++
 * dynamically-typed languages => Python, JavaScript
 */


//Symbol
const id = Symbol('123')
const anotheId = Symbol('123')
console.log(id === anotheId);
console.log(typeof anotheId);


//bigint
const bigNumber = 1231222222225555n
console.log(typeof bigNumber);


//Array
const heros = ["shaktiman", "nagraaj", "doga"];
console.log(typeof heros);  // Array is also an "object".


//object
let myobj = {
    name : "srb",
    age : 23
}
console.log(typeof myobj);


// Function
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction); // function is also a "function object"

// All the Non-Premitive Datas are object reference {object, array object, function object}