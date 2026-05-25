// primitive

// 7 types : string , number , boolean , null , undefined , symbol(adv js)(make things unique) , bigInt (bigger values)



const score =  100
const scoreValue  =  100.3

const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id = Symbol('1223')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 976549762135976123549768n



// reference ( non primitive)

// array , objects , functions


const heroes = ["shaktiman" , "naagraj" ,  "doga"]
let obj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("hello sudhanshu");
}

console.log(typeof heroes);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof bigNumber);
console.log(typeof isLoggedIn);
