//Tyes of Data 
//1. Primitive Datatypes (these all are call by value, )

//7 types : String, Number, Boolean, null, undefined, Symbol,  BigInt

// const score=100
// const scoreValue = 100.3
// const IsLoggedIn = false
// const outsideTemp =null
// let userEmail;


//how to define symbol
// const id =Symbol('123')
// const anotherId = Symbol('123')

// console.log(id===anotherId);

// const Bignumber =8462395682498598n; // n is used to represent a bigInt
// console.log(typeof(Bignumber));



//2. Refernece Type or Non-primitive (these are call  by refernece,)
//Types: Array, Objects, Functions

//Array
// const heros=["Shaktiman","Spiderman","PowerRangers"];
// console.log(heros);

//Objects
// const detail={
//     name:"Sadashiv",
//     stream:"MCA",

// }
// console.log(detail);
// console.log(detail.name);

//Functions
// const myfunction = function()
// {
//     console.log("Hello World");
    
// }
// console.log(typeof(myfunction));

//++++++++++++++++++++++++++Stack & Heap+++++++++++++++++++++++++++++++++
//memeory can be defined in two ways

//1.stack(Primitive), 2.Heap(Non-Primitive)
//  let myYoutubename= "sadashivpaul.com"


//  let anothername = myYoutubename
//  anothername="chaiaurcode"
// console.log(myYoutubename);

//  console.log(anothername);

 let user1={
    email:"user@email.com",
    upi:"user@ybl"
 }
 
 let user2 = user1
 

 user2.email="sadashiv@google.com"

 console.log(user1.email);
 console.log(user2.email);
 
 