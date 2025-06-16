// array.reduce

const myNums = [1,2,3]

const total = myNums.reduce(function (accumulator, currentValue){
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    
    return accumulator+currentValue
}, 0)

console.log(total);

// with arrow function
const myTotal = myNums.reduce( (accumulator,currentValue) => accumulator+currentValue,0). // starting with 0 because we have to give the starting position from where to start.
console.log(myTotal);


// one more ex:

const shoppingCart = [
    {
        itemName : "mouse",
        price : 299
    },
    {
        itemName : "PS5",
        price : 15999
    },
    {
        itemName : "parker",
        price : 299
    },
    {
        itemName : "python course",
        price : 2999
    },
    {
        itemName : "AI/Ml course",
        price : 4999
    }
]

const price2 = shoppingCart.reduce( (accumulator,items) => accumulator+items.price, 0)
console.log(price2);
// 