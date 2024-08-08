// object declaration can be done in 2ways :- literal (no singleton) & constructor (singleton)

// const obj1 = new object()   // singleton object
// const onj2 = {}  // non-singleton object


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