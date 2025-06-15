// for-of loop

// ["","",""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world"

for (const print of greetings) {
    console.log(print);
}

// Maps
const map = new Map()
map.set('bihar',"IN")
map.set('USA',"United state of America")
map.set('SA',"SOUTHAFRICA")
console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-' ,value);
    
}

const myObject = {
    'game1' : 'BGMI',
    'game2' : 'COC',
    'game3' : 'NFS'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-' , value);
    
// } not iterable