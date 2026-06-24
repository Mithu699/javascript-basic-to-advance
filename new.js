// prototype is behaviour of javascript
function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 2;

console.log(multipleBy5);
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
// function function bhi pr function object bhi hai ]

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function(){
  console.log(`price is ${this.score}`)
}

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

// myArray.prototype.map() // aisse nhi likhte 

chai.printMe()
