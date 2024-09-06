// object declaration can be done in 2ways :- literal (no singleton) & constructor (singleton)
// --- Object Creation: Literal vs Constructor (Singleton) ---

// Object Literal:
      // An object literal is the simplest way to create an object in JavaScript. You can define and initialize an object in
      // one step using curly braces {}. Each object created using this method is unique, and there is no shared state across them.

const obj1 = {};
const obj2 = {}; // A new, unique object
const obj = { a: 1 };  // {key: value} pair
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


// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    mySym : "mykey2",  // Symbol => String (converted)
    [mySym]: "mykey1",  // Symbol syntax
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
console.log(JsUser.mySym)  // String
console.log(JsUser[mySym])  // Symbol
console.log(JsUser["mySym"]) // String
console.log(JsUser);


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // object "JsUser" is now freezed, no modification will be effective anymore
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser["email"]);

// how to add a function into an object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //use of this keyword
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);
