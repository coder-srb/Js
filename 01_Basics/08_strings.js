const name = "hitesh"
const repoCount = 50
// we should avoid this type of out-dated syntax, instead of this use String interpolation.
console.log("Hello my name is "+name +" and my repo count is "+repoCount );

// using String interpolation.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com'); // another way of String object creation

// we can access all the methods to minipulate string object.
// console.log(gameName[0]);
// console.log(gameName.__proto__);  // to see the object , but we can only them on browser console


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));