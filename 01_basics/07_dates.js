let myDate = new Date()
console.log(myDate.toString()); // => Wed Jun 04 2025 16:26:20 GMT+0000
console.log(myDate.toDateString()); // => Wed Jun 04 2025 16:26:58 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleString());  // => Wed Jun 04 2025. 6/4/2025, 4:28:07 PM

console.log(typeof myDate); // => object

let myCreatedDate = new Date(2025, 0, 22) // => how to declare dates !
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2025, 0, 22, 8 ,5, 6) // => hours,min,seconds
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-06-5") // => year,month,date.
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now() // => usedd for polling votes, etc.
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // => how to convert to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getMonth() + 1)
console.log(newDate.getFullYear())

newDate.toLocaleString('default', {
    weekday: "long",
}) // => customize  as like this also
