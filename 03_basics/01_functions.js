// defination of function
function myName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}
// function => keyword   myName => variable name.
myName()

function add2Num(number1, number2){
    console.log(number1+number2);
}
add2Num(4,6)

function add2num(num1 ,num2){
    let result = num1+num2
    console.log("ayush");
    return result
}
const result = add2Num(3,5)
console.log("Result: ",result);

// example 
// create a login with function

function loginUserName(username){
    return `${username} "just logged in!" `
}
console.log(loginUserName("Ayush"))


// USING REST operator u can pass multiple values 
// => symbol =>  (...) this is also called REST and SPREAD operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,5000,300));


const user = {
    username:"ayush",
    price: 999
}

function userName(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
userName(user)

// using arrays
const myNewArray = [200,300,400]

function getmyNewArray(getArray){
    return getArray[1]
}
console.log(getmyNewArray(myNewArray));
