// Immediated invoked function expression (IIFE)
// to remove global scope pollution we use IIFE

function chai(){
    console.log(`DB is connected`);
}
chai();

// whenever we use iife; we must use semicolon(;) inorder to close the previous execution.
(function chai(){  // named-iife
    console.log(`DB is connected`);
})();

( () => {  //unnamed-iife
    console.log(`DB is connected.`);
})();

( (name) => {  //parameterised iife
    console.log(`my name is ${name}`);
})("srb");