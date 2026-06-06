// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
 // console.log(`Each char is ${greet}`);
}

// maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of america");
map.set("Fr", "france");
// console.log(map);

for (const [key, value] of map) {
   // console.log(key, ':-',value);
    
}

const myObject = {
    'Game1' : 'NFS',
    'Game2' : 'spiderman'
}

// for (const [key, value] of myObject) {
   // console.log(key, ':-',value)
//} // ye kaam nahi krega uske liye aage dekhenge 

