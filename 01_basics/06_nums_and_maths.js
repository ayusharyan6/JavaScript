// ******************** NUMBERS *********************// 
const score = 400
console.log(score);


const balance = new Number(200)
console.log(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 212.567
console.log(otherNum.toPrecision(3));


const hundreds = 100000000
console.log(hundreds.toLocaleString());
// this string functions helps to read amounts easy.
const hundreds1 = 100000000
console.log(hundreds1.toLocaleString('en-IN')); //=> INDIAN category


// ************************** MATHS *****************************//

console.log(Math);
console.log(Math.abs(-4));  // abs => means absolute value,, change negative value into positive and it is not vice versa.
console.log(Math.round(4.4))
console.log(Math.round(4.7))
console.log(Math.floor(4.9)) //=> floor basically do round off to their lowest value.
console.log(Math.min(4,5,6,8,9))
console.log(Math.max(9,5,3,2,8))

console.log(Math.random()) // values lies only between 0 and 1.
console.log(Math.random()*10) ;


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1))+min) //=> +1 isliye qki 0 value na aaye baar baar 0 se upr aaye atleast 1 to aaye

