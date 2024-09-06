// --- Symbols in Objects (JavaScript) ---

// Symbols are a unique and immutable primitive data type introduced in ES6. 
// They are often used as keys in objects to create properties that are hidden or protected from accidental overwriting or conflicts.



// 1. Uniqueness of Symbols
// Each Symbol is guaranteed to be unique, even if they have the same description. 
// This uniqueness makes symbols perfect for scenarios where you need to avoid property name conflicts in an object.

const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false, each symbol is unique

    // Even though both sym1 and sym2 have the same description ("id"), they are completely different and unique symbols.



// 2. Using Symbols as Object Keys
// Symbols can be used as keys in objects. These symbol-based keys are unique, so they won’t accidentally 
// collide with other properties, even if other parts of your code define properties with the same names.

const symKey = Symbol("id");

const user = {
  [symKey]: 123, // Using symbol as a key
  name: "John"
};

console.log(user[symKey]); // 123
console.log(user.name);    // "John"

    // The property user[symKey] holds a value of 123, and it’s uniquely identified by symKey. 
    // It won’t conflict with any other properties, even if they are named "id".



// 3. Hidden or Non-Enumerable Properties
// When symbols are used as keys in an object, they are not enumerable. This means they won’t 
// show up in for...in loops, Object.keys(), or JSON.stringify(). This allows for adding hidden or private properties.

const symKey = Symbol("id");

const user = {
  [symKey]: 123,
  name: "Alice",
};

for (let key in user) {
  console.log(key); // Only "name" will be logged
}

console.log(Object.keys(user)); // ["name"]
console.log(JSON.stringify(user)); // {"name": "Alice"}

    // The symbol-keyed property symKey (with value 123) is hidden from loops or 
    // JSON serialization. Only the string-keyed properties like "name" are visible.



// 4. Preventing Property Conflicts with Symbols

// Using symbols can avoid conflicts when working with third-party code or libraries that might define properties with the same name.

const symKey = Symbol("name");

const person = {
  [symKey]: "Bob",  // Symbol key
  name: "Alice"     // String key
};

console.log(person.name);    // "Alice"
console.log(person[symKey]); // "Bob"

    // Here, the symbol-keyed property (symKey) doesn’t conflict with the string-keyed property ("name") even though their descriptions are similar.
