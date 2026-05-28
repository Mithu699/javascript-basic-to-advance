// ******************** ARRAY *********************************

const myArr = [0, 1, 2, 3, 4, 5]; // js array copy operation create shallow copies rather than deep copies
const myHeros = ["thor", "john snow"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[0]);

// array methods
/*
myArr.push(6)
myArr.push(7)
myArr.pop(7) */

// myArr.unshift(9)  // starting me add kr deta hai array me element jaise 9 ko
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

//const newArr = myArr.join()
//console.log(myArr);
//console.log( typeof newArr);

// slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);

// slice and splice me ye difference hai ki ek me range include hota hai or ek me nahi slice me nhi hota include range and splice me ho jata hai ye sb sawal job ke liye pucha ja skta hai
