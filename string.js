const name = "sudhanshu";
const repoCount = 33;

// console.log(name + repoCount + " value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);      // this is called string intipulation

const gameName = new String("sudhansh-ranjan");

//console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4); // last value include nhi ho rha h check krlo and substring ignore kr dega negative value doge to
//console.log(newString);

const anotherString = gameName.slice(-1); // slice me negative value bhi de skte hai negative se reverse me aayega output
console.log(anotherString);

const newStringOne = "   sudhanshu   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // unwanted spaces to remove kr deta hai


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // %20 ko replace kr dega - se 

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
