// // const score = 400
// // console.log(score);


// // const balance= new Number(100)
// // console.log(balance);

// // console.log(balance.toString().length);
// // console.log(balance.toFixed(2)); // precesion value(exact value ke bad .0 ) kitne bar ana chaiye iske liye toFixed

// // const otherNumber = 1123.5678
// // console.log(otherNumber.toPrecision(3));// to precesion method matlab kitne place tak print karana hai agge se
// // // if toPrecision(3) and number is 123.56= output is 123, number is 23.567=output is 23.6 and agar toPrecision k andar 3 likha hai aur number hai 1123.8966 =output is 1.12e+3 


// // const hundreds = 100000
// // console.log(hundreds.toLocaleString('en-IN'));// iss method me big values me comma lagaya jata hai aur en-IN likhne se indian rupees  format me comma lagta hai


// // //+++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4)); //.abs me -ve value +ve hota hai

// console.log(Math.round(4.7)); // . k badd 5 se jyada hua to +1 ke deta hai nhi 

// console.log(Math.ceil(4.2)); // . k badd kuch vi number rhta hai to +1 kar deta h
// console.log(Math.floor(3.9));// . k badd kuch vi number rhta hai tab bhi value same rhta hai

// console.log(Math.min(2,3,4,5,6));// to get small value in array
// console.log(Math.max(2,3,4,5,6));// to get maximum value in array


// //we use most  Math.random()

console.log(Math.random());//always gives value decimal value form 0 to 1 e.g.0.1,0.2 etc

console.log((Math.random()*10) +1);// after multiplaying  * 10, the value is shifted to 1 or more but to avoid zero we add +1
console.log(Math.floor(Math.random()*10) +1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min +1))); // whenever sometimes  the case arrises where min and max values are decalired on that time we use to multiply  max-min +1 inplace of 10 and to avoid zero  we add the min value

