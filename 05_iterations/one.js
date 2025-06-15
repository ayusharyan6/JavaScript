// for loop

for (let i = 0; i <5; i++) {
    const element = i;
    console.log(element);
    
}

// condition in loops

for (let i= 0; i <=10; i++) {
    const element = i;
    if(element==6){
        console.log("continue");
        continue
    }
    console.log(element);
    
}

// nested loop
for (let i = 0; i <=10; i++) {
    console.log(i);
    for (let j = 0; j <=10; j++) {
        console.log(j);
    }
}

let myArray = ["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}

for (let index = 0; index < 10; index++) {
    const element = [index];
    console.log(element);
    if(element == 5){
        console.log("detected");
        break
        
    }
}
