const accountId = 14432;
let accountEmail = "ravi123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "rv123@gmail.com"
accountPassword = "121212"
accountCity = "Delhi"
let accountState;

console.log(accountId);

/*
Prefer not to use var
b'coz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);