let a = 10;
const b = 20;
var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// block scope and global scope

if(true){
    let d = 10;
    const e = 20;
    t= 33;

}
console.log(d);
//  this is block scope => u cannot access varibale outside the block code
var y = 44
if(true){
    let x = 55
}
console.log(y);  // this is global scope u can access the variable outside the block code

if(true){
    const userName = "ayush"
    if(userName==="ayush"){
        const website = "youtube"
        console.log(userName+website); //only this will run. because it is inside the block
    }
    // console.log(website);
}
// console.log(userName);
