const accountId = 46273
let accountEmail = "hello@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState

// accountId = 3 //not allowed

console.log(accountId);

accountEmail = "lol@gmail.com"
accountPassword = "47732"
accountCity = "Mumbai"

/* Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])