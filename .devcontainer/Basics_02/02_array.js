const marbleHeroes = ["thor","Ironman","Spiderman"]
const dcHeroes=["Superman","Flash","Batman"]

// marbleHeroes.push(dcHeroes) // push is also used to merge the array but in term of nested
// console.log(marbleHeroes);
// console.log(marbleHeroes[3][1]);

// const allheroes = marbleHeroes.concat(dcHeroes); // concat is used to merge the array , but diffenece is that here we nned to assign a new variable for the array
// console.log(allheroes);

//+++++ Spread Operator +++++++++++++

const all_new_heroes =[...marbleHeroes,...dcHeroes] // another way to merge array by using spread operator which is "..." 
//  console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
 const real_another_array = another_array.flat(Infinity) // to raise from the condition in line 16, we use flat that is used to combine all the array ehich are nested together
//  console.log(real_another_array);


console.log(Array.isArray("Hitesh")); // isarray is used to ask whether an element is array or not
console.log(Array.from("Hitesh")); // from is used to convert the element into array
console.log(Array.from({name:"Hitesh"})); // Interesting


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); // of is used to convert a group of variables or elements into array




 


 


