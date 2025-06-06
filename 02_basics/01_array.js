const myArr = [0,1,2,3,4,5,] // javascript arrays are dynamic in nature size is variable contains of mix data types.
const myHeroes = ["shaktiman","Nagraj"]

const myArr2 = new Array(1,2,3,4,5)
//accessing the arrays
console.log(myArr[0]);
console.log(myArr2[0]);
console.log(myHeroes[1]);

// Array methods

// push => add something in array
myArr.push(6) 
myArr.push(7)
myArr.push(8)
myArr.pop() 
// pop => removes last value in array. 

//quetioning array
console.log(myArr)
console.log(myArr.includes(8)); // u can ask question whether it is present ir not ,,,answer wil; be in true or false.
console.log(myArr.indexOf(8));  //-1 means ,, not present ...

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr); // join use of convert array into string.

// slice , ,splice

console.log("A ", myArr);
const myNewArr1 =myArr.slice(1,3)
console.log(myNewArr1);

console.log("B ", myArr)
const myNewArr2 =myArr.slice(1,3)


const myNewArr3 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myNewArr3);


// splice()
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// slice()
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.