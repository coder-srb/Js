// Example 1: IIFE with no parameters (Basic)
(function() {
    console.log("This IIFE runs immediately without parameters!");
})();

// Example 2: IIFE with parameters
(function(a, b) {
    console.log(`The sum of ${a} and ${b} is:`, a + b);
})(5, 7);

// Example 3: IIFE to avoid global scope pollution
var globalVar = "I'm global!";

(function() {
    var localVar = "I'm local to the IIFE!";
    console.log(globalVar);  // Can access global variable
    console.log(localVar);   // Local to IIFE
})();

// console.log(localVar);  // Error: localVar is not defined outside the IIFE

// Example 4: IIFE with an arrow function
(() => {
    console.log("This is an IIFE using an arrow function!");
})();

// Example 5: IIFE for Module Pattern
const counterModule = (function() {
    // Private variable
    let counter = 0;

    return {
        increment: function() {
            counter++;
            console.log("Counter:", counter);
        },
        reset: function() {
            counter = 0;
            console.log("Counter reset to:", counter);
        }
    };
})();

counterModule.increment();  // Output: Counter: 1
counterModule.increment();  // Output: Counter: 2
counterModule.reset();      // Output: Counter reset to: 0

// Example 6: Combining IIFE and the Module Pattern for a more complex use case
const mathOperations = (function() {
    // Private data (hidden from outside)
    let result = 0;

    return {
        add: function(a, b) {
            result = a + b;
            console.log(`Sum: ${result}`);
            return result;
        },
        multiply: function(a, b) {
            result = a * b;
            console.log(`Product: ${result}`);
            return result;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            console.log("Result reset to:", result);
        }
    };
})();

mathOperations.add(3, 4);        // Output: Sum: 7
mathOperations.multiply(5, 6);   // Output: Product: 30
console.log("Current Result:", mathOperations.getResult());  // Output: Current Result: 30
mathOperations.reset();          // Output: Result reset to: 0



/**
 * Each IIFE is executed as soon as it's defined.
 * Variables inside IIFEs are protected from the global scope, which ensures that we avoid global pollution.
 * The module pattern allows us to encapsulate functionality and expose only the needed methods, while keeping the data (counter or result) private.
 */
