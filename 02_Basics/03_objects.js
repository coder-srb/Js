// object declaration can be done in 2ways :- literal (no singleton) & constructor (singleton)
// --- Object Creation: Literal vs Constructor (Singleton) ---

// Object Literal:
      // An object literal is the simplest way to create an object in JavaScript. You can define and initialize an object in
      // one step using curly braces {}. Each object created using this method is unique, and there is no shared state across them.

const obj1 = {};
const obj2 = {}; // A new, unique object
const obj = { a: 1 };  // {key: value} pair, by default the key' names are string type; "a"
console.log(obj1 === obj2); // false, different independent objects.

      // This method creates objects by directly specifying key-value pairs in curly braces. Each invocation creates a new object.
      // In this case, obj1 and obj2 are two different objects in memory, even though they both have an empty structure.
      // They are not "singletons" since each object instance is separate and independent.


// Object Constructor (Singleton):
      // A singleton is a design pattern where only one instance of a class or object can exist. In JavaScript, you can use a constructor function,
      // or more commonly, a class to implement a singleton pattern, ensuring that only one instance of the object is created.

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const obj3 = new Singleton();
const obj4 = new Singleton();

console.log(obj3 === obj4); // true, same instance

      // In this case, both obj1 and obj2 refer to the same instance because the class Singleton ensures
      // that only one instance is created and returned every time the constructor is called. This is the singleton pattern in action.


// -----------------------------------------------------------------------------------------------------------------------------------------------


// ---Accessing Object Elements in JavaScript---
      // In JavaScript, you can access object properties in two main ways: dot notation and bracket notation.

// 1. Dot Notation:
      // Dot notation is the most common and simple way to access object properties.
      // It is used when the property name is a valid identifier (i.e., no spaces or special characters).

const person1 = {
  name: "Alice",
  age: 25,
  city: "New York",
};

console.log(person1.name); // "Alice"
console.log(person1.age); // 25
console.log(person1.city); // "New York"

// 2. Bracket Notation:
      // Bracket notation is used when the property name contains special characters, spaces, or when the property name is stored in a variable or is dynamically computed.
      // The property name must be a string inside brackets.

const person2 = {
  "full name": "Alice Johnson",
  age: 25,
  city: "New York",
};

// Accessing using bracket notation
console.log(person2["full name"]); // "Alice Johnson"
// console.log(person2.full name); // error
console.log(person2["age"]); // 25
console.log(person2["city"]); // "New York"

// Accessing dynamically using variables
const prop = "city";
console.log(person2[prop]); // "New York"

// 3. Accessing Symbol Properties:
      // When using symbols as object keys, bracket notation is required to access the value.

const mySym = Symbol("id");
const user = {
  name: "Bob",
  [mySym]: 12345,
};

console.log(user[mySym]); // 12345

/**  Summary:
 *      Dot Notation: object.propertyName
 *      Bracket Notation: object["propertyName"] (useful for dynamic keys, special characters, or symbols)
 */


// -----------------------------------------------------------------------------------------------------------------------------------------------


// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    mySym : "mykey2",  // Symbol => String (converted); this is not symbol, it is a string now.
      // when we print the object, the symbol used in object will print as last element. it automatically moves to the end of the object.
    [mySym]: "mykey1",  // Symbol syntax (if asked to use symbol in object use this syntax/
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// object values can be accessed by using "dot-notation(.)" or "Square-brackets[]"
console.log(JsUser.email)  //dot-notation(.)
console.log(JsUser["email"]) //Square-brackets-notation[]
console.log(JsUser["full name"])
console.log(JsUser.mySym)  // String  ; you can check using "typeof operator"
console.log(JsUser[mySym])  // Symbol
console.log(JsUser["mySym"]) // String
console.log(JsUser);  // symbol will be printed in the end as last element of the object



// --- modifying object values ---

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // object "JsUser" is now freezed, no modification will be effective anymore
// JsUser.email = "hitesh@microsoft.com"  // it will not give any error, but new value will not propagate in object
// console.log(JsUser["email"]);  // hitesh@chatgpt.com

// how to add a function into an object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //use of "this" keyword, to access the current object properties on which we are creating the function.
}

console.log(JsUser.greeting);  // function value will not be printed, it will simply return the reference to the function
console.log(JsUser.greeting());  // this way we can print the value of function
console.log(JsUser.greetingTwo());
console.log(JsUser);

// --- accessing function of an object using Bracket Notation[] ---
console.log(JsUser["greeting"]);  // it will just return the reference to the function
console.log(JsUser["greeting"]()); // it will print the value of the function
