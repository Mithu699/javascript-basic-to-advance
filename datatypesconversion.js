let score = "33" // terminal me NaN aayega jiska mtlb hota hai not a number 

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
 // console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 and false => 0

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "sudhanshu" => true 

let someNumber = 33
 
let stringNumber = String(someNumber)
console.log (stringNumber);
console.log (typeof stringNumber);