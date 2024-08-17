const myNums = [1,2,3]

let myTotal = myNums.reduce(function(accumulator,  currentValue){
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`)
    return accumulator+currentValue
}, 0)
console.log(myTotal)
// using arrow
myTotal = myNums.reduce((acc,  currVal)=> acc+currVal, 0)
console.log(myTotal)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce( (acc,curVal) => acc + curVal.price, 0 )

console.log(total);