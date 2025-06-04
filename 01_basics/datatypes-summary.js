// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  // means not 0 its means empty no value
let userEmail; //undefined
const id = Symbol('12345')
const anotherId = Symbol('12345')

console.log(id === anotherId)

const bigNumber = 34454546746324354n



// Reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "hanuman","naagraj", "doga"];
let myObj = {
    name: "ayush",
    age: 22,
    gender: "male",


} // all things inside the curly braces are called as objects.

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof heroes);


