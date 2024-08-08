const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)   // "push" is not an effective way of merging multiple arrays.
console.log(marvel_heros);
console.log(marvel_heros[3][1]);


// To merge multiple arrays we should use {concat (or) spread}
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // spread operator [...abc]
console.log(all_new_heros);


// if we have a multi-level nested array, then we can separate all the elements according to the array they are present in;
// by using "flat(no_of_level)"
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Soubhagya"));  // checks that the input is array or not?
console.log(Array.from("Soubhagya"));  // creates an array from the input

console.log(Array.from({name: "SRB"})); // returns [] "empty array" bcz we didn't mention from which to create an array {keys? or values?}


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));