
// --- Ways to Merge Multiple Objects in JavaScript ---

// 1. Using Object.assign()
    // Object.assign() is a method that copies properties from one or more source objects to a target object. It modifies the target object and returns it.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 3, c: 4 }
    // Note: If properties overlap, the values from the later objects will overwrite earlier ones.


// 2. Using the Spread Operator (...)
    // The spread operator allows you to merge objects by spreading their properties into a new object. This is often the most concise and modern way to merge objects.

const obj11 = { a: 1, b: 2 };
const obj21 = { b: 3, c: 4 };

const merged1 = { ...obj11, ...obj21 };
console.log(merged1); // { a: 1, b: 3, c: 4 }
    // Similar to Object.assign(), the later objects overwrite the earlier ones when properties overlap.


// 3. Using for...in Loop (Manual Merge)
    // You can manually iterate over the properties of each object using a for...in loop to copy them into a new object.

const obj12 = { a: 1, b: 2 };
const obj22 = { b: 3, c: 4 };

const merged2 = {};

for (let key in obj1) {
  merged2[key] = obj12[key];
}
for (let key in obj2) {
  merged2[key] = obj22[key];
}

console.log(merged2); // { a: 1, b: 3, c: 4 }
    // This method gives you full control but is more verbose compared to the built-in methods.


// -----------------------------------------------------------------------------------------------------------------------------


// practice
const obj17 = {1: "a", 2: "b"}
const obj27 = {3: "a", 4: "b"}
const obj47 = {5: "a", 6: "b"}

const obj37 = { obj1, obj2 }
console.log(obj3);

const obj57 = Object.assign({}, obj17, obj27, obj47)  // take an empty array and merge all the source objects into the empty array.
console.log(obj57);

const obj67 = {...obj17, ...obj27}
console.log(obj67);


// -----------------------------------------------------------------------------------------------------------------------------


// objects inside array
const users = [
    {
        id: 1,
        email: "g@gmail.com",
        "first name": "soubhagya"
    },
    {
        id: 1,
        email: "h@gmail.com",
        "first name": "fortune"
    },
    {
        id: 1,
        email: "s@gmail.com",
        "first name": "srb"
    },
]
console.log(users[1].email);
console.log(users[1]["email"]);
console.log(users[1]["first name"]);

console.log(Object.keys(users));  // returns indices
console.log(Object.values(users));  // returns every index value
console.log(Object.entries(users));  // returns the complete object
console.log(users);  // returns the array


// ----------------------------------------------------------------------------------------------------------------------------


const tinderUser = {}  // non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // returns all the keys
console.log(Object.values(tinderUser));  // returns all the key values
console.log(Object.entries(tinderUser));  // returns the complete object

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // returns a boolean value checking the mentioned property present or not
console.log(tinderUser.hasOwnProperty('isLogged'));  // false


// ---------------------------------------------------------------------------------------------------------------------------------


// destructuing of objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor);  // we can aslo access this with optimised way

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instr} = course  // we can also create our varibale
console.log(instr);


//API 

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
