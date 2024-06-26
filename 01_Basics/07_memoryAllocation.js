

/**
 *  Stack [Premitive types], Heap [Non-Premitive]
 *  So when we store data in "Stack" memory; by changing the value, change in original data doesn't reflect. it changes only the copy of the value. bcz actual original data is not passed here.
 * But when we store data in "Heap" memory; by changing the value, original data also gets changed, bcz here original data is passed by passing reference of the address. 
*/

// Stack memory example
let myNickName = "Chintu"  // string
let myFullName = myNickName
myFullName = "Soubhagya"  // Copy of original value is passed

console.log(myNickName);  // as the copy of original value was passed, that's why by changing the new variable, original data didn't change.
console.log(myFullName);


// Heap memory example
let student = {    // object
    name : "srb",
    ph : 21343433453
}
let anotherStudent = student;
student.name = "Fortune";  // reference of original value is passed meaning actual data is passed

console.log(student);  // as the reference of original value was passed, that's why by changing the new variable, original data also got changed.
console.log(anotherStudent);
