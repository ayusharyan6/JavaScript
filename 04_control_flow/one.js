//  if statement
const isUserLoggedIn = true
const temperature = 41

// if(temperature < 50){
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");


if(temperature < 50){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");    
}

const score = 200;
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);   
}

const score = 200;
if(score > 100){
    const power = "fly"
   // console.log(`User power: ${power}`);   
}
console.log(`User power: ${power}`);   
// not executed because u r defining const outside the scope fucntion if u use var it will be executed because var is globally accesseed.