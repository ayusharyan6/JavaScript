// const coding = ["js","ruby","cpp","javascroipt"]

// const values = coding.forEach( (item)  => {
//     console.log(item);
//     return item
// })
// console.log(values); //it is showing undefined because for each loop does not have return type.


const myNums = [1,2,3,4,5,6,7,8,9,10]

const myNumbs = myNums.filter( () => {
     return num>4 //if u use scope  then u have to give return type
})
console.log(myNumbs);

// filter 