// --- Optional Chaining in JavaScript Objects ---

// Optional Chaining (`?.`)** is a feature introduced in JavaScript (ES2020) that allows you to safely access deeply
// nested properties of an object **without causing an error** if an intermediate property is `null` or `undefined`.
// If any property in the chain is `null` or `undefined`, it stops execution and returns `undefined` instead of throwing an error.

    /**  Syntax:
     * object?.property
     * object?.[property]
     * object?.method()
     */




// 1. **Accessing Nested Properties Safely**
      // Without optional chaining, trying to access a nested property on `undefined` or `null` would result in an error.
      // With optional chaining, JavaScript checks if the property exists, and if not, it returns `undefined`.

const user = {
  name: "Alice",
  address: {
    city: "New York",
  },
};

// Accessing nested properties safely
console.log(user?.address?.city); // "New York"
console.log(user?.address?.street); // undefined (no error)
console.log(user.address.phone); // undefined
console.log(user.contact); // undefined
// console.log(user.contact.phone);  // error
console.log(user?.contact?.phone);
      // **Without Optional Chaining**: If `user.address` were `undefined`, `user.address.city` would throw an error.
      // Optional chaining avoids this error by returning `undefined` if `user.address` doesn't exist.




// 2. **Calling Methods Safely**
      // Optional chaining can also be used when calling methods. If the method does not exist or the object is `null`/`undefined`, it will return `undefined` without throwing an error.

const user3 = {
  name: "Bob",
  greet() {
    return `Hello, ${this.name}!`;
  },
};

// Safe method invocation
console.log(user3?.greet?.()); // "Hello, Bob"
console.log(user3?.sayHi?.()); // undefined (no error)
      // - Here, `user?.greet?.()` safely calls the `greet()` method, while `user?.sayHi?.()` safely returns `undefined` because the `sayHi` method doesn’t exist.




// 3. **Accessing Properties with Bracket Notation**
      // Optional chaining also works with **bracket notation**, which is useful when accessing dynamic properties.

const user1 = {
  name: "Charlie",
  preferences: {
    theme: "dark",
  },
};

const key = "theme";

// Safe dynamic property access
console.log(user1?.preferences?.[key]); // "dark"
console.log(user1?.preferences?.["mode"]); // undefined (no error)
      // - Optional chaining allows you to access dynamic properties without errors when the object or property is missing.




// 4. **Chaining with Function Calls**
      // Optional chaining works when you are unsure if the object or function exists at all. If the function exists, it will be called; if not, it returns `undefined`.

const person = {
  sayHi: () => "Hello!",
};

console.log(person.sayHi?.()); // "Hello!"
console.log(person.sayBye?.()); // undefined (safe, no error)




// 5. **Caveats**
      // Only for `null` or `undefined`: Optional chaining stops only if it encounters `null` or `undefined`. If a property exists but is something else (like `false`, `0`, or an empty string `""`), it does not stop.

const data = { value: 0 };

console.log(data?.value); // 0, optional chaining does not affect this
console.log(data?.missing); // undefined




/**  Summary:
 * - Optional chaining (`?.`) allows you to safely access deeply nested properties, call methods, or access dynamic properties without throwing errors if a reference is `null` or `undefined`.
 * - This prevents code from breaking and simplifies error handling.
 */

const user5 = null;
console.log(user5?.name); // undefined (no error)
