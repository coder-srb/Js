//operations

let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2); //addition
console.log(2-2);  //subtraction
console.log(2*2);  //multiplication
console.log(2**3);  // power
console.log(2/3); //division
console.log(2%3);  //modulo


let str1 = "hello"
let str2 = " srb"
console.log(str1+str2);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


console.log(3 + 4 * 2 % 3);
console.log((3 + 4) * (2 % 3));


console.log(true); //true
console.log(+true);  // 1
// console.log(true+);  // error
console.log(false);  //false
console.log(+false); // 0
// console.log(false+);  // error
console.log(+""); // 0


let num1, num2, num3
num1 = num2 = num3 = 2+2  // avoid these type of practice bcz it neglects redability.
console.log(num1);


let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"