const marvelheros = ["thor", "ironman", "spiderman"]
const dcheros = ["superman", "batman", "flash"]

// marvelheros.push(dcheros) // array ke under bhi array le skta hai

//console.log(marvelheros);
//console.log(marvelheros[3][1]);

 const allHeros = marvelheros.concat(dcheros)
// console.log(allHeros)

const allnewHeroes = [...marvelheros,...dcheros ] // spread operator

console.log(allnewHeroes);

const anotherArray = [1, 2,[ 3, 4],[ 5, 6 , 7]]
const realanotherarray = anotherArray.flat(Infinity)
console.log(realanotherarray);


console.log(Array.isArray("sudhanshu"))
console.log(Array.from("sudhanshu")) // sudhanhsu ya kuch bhi likha ho to usko array bna deta hai 


console.log(Array.isArray({name: "sudhanshu"})) // interesting for interview

let score1 = 100
let score2 = 200
let score3 = 200

console.log(Array.of(score1, score2 , score3));
