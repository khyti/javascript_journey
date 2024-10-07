const accountId = 12345
let accountEmail="khyatijha2511@gmail.com"
var accountPassword= " 12897"
//Prefer not to use var because of block level scppe and functional scope
accountCity="Jaipur"
let accountState;

// accountId=2 // not allowed
console.log(accountId)
accountEmail="hello@gmail.com"
accountPassword=1367
accountCity="Bengaluru"
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
