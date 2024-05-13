const accountId = 322432
let accountEmail = "mastan@google.com"
let accountState
console.log(accountState);
var accountPassword = "12345"
accountCity = "Hyderabad"
// accountId = 12
accountEmail = "msk@gmail.com"
accountPassword = "121212"
accountCity = "Chennai"
/**
 * Prefer not to use var
 * because of issue in block scope and functional scope
 */
console.table([accountId, accountEmail, accountPassword, accountCity])