let score = "33abc" 

console.log(typeof score)
console.log(typeof (score))

// both above are same thing

 let valueInNumber = Number(score)
 console.log(typeof valueInNumber)
 console.log(valueInNumber)

//  let score1 = "32acb"
//  let valueInNumber2 = Number(score1)
//  console.log(typeof score1)

// "33" => easily converted to 33
//  "33abc" => NaN -> not a number
//  true => converted to 1, true. , false-> 0;

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//  we had done dryrun.
//  "" => false
//  "ayush" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)
