// // Dates
let myDate = new  Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// // let myCreateDate = new Date(2023,0,23) //format 1
// // let myCreateDate = new Date(2023,0,23,5,3) //format 2
// // let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-05-2024")
// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now()
// // console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1)



newDate.toLocaleString('default',{
  //by clicking contrl+space all properties
  weekday:"long",

})