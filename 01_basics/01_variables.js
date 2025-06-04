const accountId = 133456
let accountEmail = "ayusharyan5801@gmail.com"
var accountPassword = "2234"
accountCity = "patna"
let accountState;

// accountId = 2 // not allowed because it it declared as const
accountEmail = "ayyysh@gmail.com "
accountPassword = "3456"
accountCity = "Pune"

/*
Prefer not to use var,,, because of issue of block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])


