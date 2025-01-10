const accountId = 144553 // const means value  Can't chnage further
let accountEmail = "Sadashivpaul@gmail.com" // Let means value can be chnaged and it is used in wide range
var accountPassword = "12345" //In var also  value can be chnaged and it is  old and not used anymore bcz of its scope problem
accountCity = "Bhubneswar" // We can also reserve the memory of the variable without writing anything. But it is not good and safe
let accountState; // By calling this variable which doeen't contain any value returns the output 'Undefined'

// accountId = 2 // Not allowed here to redeclair the accountId variable
accountEmail="spaul@gmail.com"
accountPassword="56789"
accountCity="Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); // Console.table command use krke sare variables ko table me print kr skte h

/*
 Prefer not to use Var because of issue in block scope and functional scope
*/
