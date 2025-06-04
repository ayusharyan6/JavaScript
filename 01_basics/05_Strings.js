const name = "aayein"
const repoCount = 50

console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way of declaring stiring
const gameName = new String('AYUSH-ARYAN-COM')
console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4);
console.log(newString)

const anotherMethod = gameName.slice(0,-8);
console.log(anotherMethod);

const anotherMethod2 = gameName.slice(2,9);
console.log(anotherMethod2);


const newString1 = "     ayush aryan      "
console.log(newString1);
console.log(newString1.trim()); // trim used for remove un necesseary spacing in names or anthing else. Dont use this in password.

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '_'));

console.log(url.includes('hitesh'));
console.log(url.includes('swam'));


console.log(gameName.split('-'));
// converted to arrays split based on -    !!


