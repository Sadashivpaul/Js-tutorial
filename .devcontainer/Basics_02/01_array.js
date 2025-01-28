// +++++++++++++++++ Arrays ++++++++++++++++++
 
const myArray = [0,1,2,3,4,5,true," sadashiv"]

// console.log(myArray);

const myHeroes = ["Shaktiman", "Nagraaj"]
// console.log(myHeroes.length);

// myHeroes.push("Ram");
// console.log(myHeroes);

// myHeroes.pop()
// console.log(myHeroes);

//Operations
// myHeroes.unshift(9)
// console.log(myHeroes);
// myHeroes.shift()
// console.log(myHeroes);

// console.log(myArray.includes("Shaktiman"));
// console.log(myHeroes.indexOf(3));


// const newArr = myHeroes.join() // By using join, we can bind to another array and convert it to string as well
// console.log(myHeroes);
// console.log(newArr);

//+++++ Slice and splice in array +++++++++++++

console.log("A", myArray);
const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3)
console.log("C",myArray);
console.log(myn2);











