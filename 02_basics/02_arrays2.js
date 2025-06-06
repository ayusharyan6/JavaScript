const marvelHeroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","Flash","Batman"]

marvelHeroes.push(dc_heroes)  //push => returns arrays value in existing arrays only.
console.log(marvelHeroes)
console.log(marvelHeroes[3][1])

// another method to add 2 arrays  using concat but.. concat method is basically use to combine 2 or more arrays .this method returns a new array without modifying any existing array.
const allHeroes = marvelHeroes.concat(dc_heroes)
console.log(allHeroes)

// spread method ,, 
const allNewHeroes2 = [...marvelHeroes, ... dc_heroes]
console.log(allNewHeroes2);

// flat operator method = > means returns a new array with all sub-array elements concatinated into it recursively up to spedified depth.
const another_array = [1,2,3, [6,7],[3,9],[4,5,[6,9,2]]]
const real_another_array = another_array.flat(Infinity)  //in depth u can add actual how many arrays is inside one another,, but best thing u can write Infinity there its automatically manages and print all arrays .
console.log(real_another_array);

console.log(Array.isArray("Ayush"))
console.log((Array.from("Ayush")))

console.log(Array.from({name: "Ayush"})); // it will return empty array,, because u didnt define which to make array.


//we can convert multiple declare values into arrays using (.of)
let score1 = 320
let score2 = 400
let score3 = 500

console.log(Array.of(score1,score2,score3)); // returns a new array from a set of elements.


