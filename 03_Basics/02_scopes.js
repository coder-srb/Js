
// var c = 3000;
// if(true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a);  //error
// console.log(b);  // error
// console.log(c);  // 30; but it shouldn't be able to access the data, as 'c' is declared inside "Block-scope".
// that's why we avoid using "var"



let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}
console.log(a); 



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/

console.log(addone(5))  // no error

function addone(num){
    return num + 1
}

addTwo(5)  // error
const addTwo = function(num){
    return num + 2
}
