// const tinderUser = new Object()  // singleton object
const tinderUser = {}  // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

// nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// merging of multiple objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);

const obj5 = Object.assign({}, obj1, obj2, obj4)  // take an empty array and merge all the source objects into the empty array.
console.log(obj5);

const obj6 = {...obj1, ...obj2}
console.log(obj6);


// objects inside array
const users = [
    {
        id: 1,
        email: "g@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]
console.log(users[1].email);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

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