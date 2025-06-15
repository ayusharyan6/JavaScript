// truthy values and falsy values.
const userEmail = "ayush.ai"

if(userEmail){
    console.log("user have email");
    
}else{
    console.log("dont have email");
    
}

const userEmail1 = ""  // emtpy string -> return false means dont have useremail

if(userEmail1){
    console.log("user have email");
    
}else{
    console.log("dont have email");
    
}

const userEmail2 = []  // if emtpy array  -> return true means user have useremail

if(userEmail2){
    console.log("user have email");
    
}else{
    console.log("dont have email");
    
}

// false values 
// false , 0 , -0, bigInt(0n), "" (empty string), null, undefined, NaN 

// truthy values
// "0" ->(truthy values), 'false' ->(truthy values), " "->(truthy values), [] , {}, funtion(){} ->(truthy values) -> evrything in string is truthy values.


