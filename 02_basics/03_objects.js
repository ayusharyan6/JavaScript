// singleton  => when u make by using constructor ,,,ek hi tarah k objects banta h..

// objects literals

const mySym = Symbol("key1")
const jsUser = {
    name: "ayush",
    "full name": "AYush Aryan",
    [mySym] :  "key1",
    age: 18,
    location: "jaipur",
    email: "ayush@gmail.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday","friday"]
}
//u can access object by using . also there is anothere method to access objects is that ,,
// by using square brackets also by make sure have semicolon on whatever u are accessing because square brackets take everything in string.
console.log(jsUser["age"]);
console.log(jsUser[" full name"]); // u can not access string declared key with dot ,,,u have to put [] these if u want to access u declared key as in string.
console.log(jsUser.isLoggedIn);
console.log(jsUser[mySym]); // Accessed by using dot operator.

// Object.freeze(jsUser) // if u want to freeze anything u dont want to change. further

jsUser.greeting = function(){
    console.log("Hello world and js users");
    
}
jsUser.greetingTwo= function(){
    console.log(`Hello world and js users ${this.name}`);
}
// this is used to know everything existing inside that objecct.
console.log(jsUser.greeting); // => this will throw undefined
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())


// 2nd method of creating objects
Object.create