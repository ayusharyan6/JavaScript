//  if statement
// const isUserLoggedIn = true
// const temperature = 41

// if(temperature < 50){
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");


// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");    
// }

const score = 200;
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);   
}

// const score = 200;
// if(score > 100){
//     const power = "fly"
//    // console.log(`User power: ${power}`);   
// }
// console.log(`User power: ${power}`);   
// not executed because u r defining const outside the scope fucntion if u use var it will be executed because var is globally accesseed.

// shorthand notation
// const balance = 2000
// if(balance > 400) console.log("test"); // u can also write as this but use curly braces intead of tbis i prefer.

const balance2 = 2000
if(balance2 <= 30000){
    console.log("Balanced is left");
}else{
    console.log("not sufficient amount");
    
}

// multiple checking
const balance = 5000
if(balance < 500){
    console.log("less than");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
    
}else{
    console.log("less than 12200");
}

const isUserLoggedIn = true
const debitCard = true

if(isUserLoggedIn && debitCard ){
    console.log("allowed for shopping");
    
}else{
    console.log("not allowed for shooping");
    
}
const onlinePayment = true;
const cash = true
if(onlinePayment || cash){
    console.log("u can do shoping");
}else{
    console.log("not allowed");
    
}

// switch statement

const month = 4

switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("aug");
        break;
    case 9:
        console.log("sept");
        break;
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("nov");
        break;
    case 12:
        console.log("dec");
        break;
        case defalut:
            console.log("invalid input");
            break
}