// const user = {
//     username: "Ayush",
//     price: 99,

//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website`, `${this.price},this is my age`);
//     }
// }
// user.welcomeMessage()

// Arrow Function 
const chai = () => {
    let userN = "ayush"
    console.log(this.userN);
     
}
chai()
const chaii = () => {
    let userN = "ayush"
    console.log(this);  
     
}
chaii()
// these are basic arrow return fucntion

// Arrow function with parameters
const addTwo = (num1, num2) =>  (num1+num2). // in parenthesis u dont have to write return type.
console.log(addTwo(3,4));
// this is implicit return arrow function -> where u dont have to put curly braces...


