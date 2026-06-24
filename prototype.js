let myName = "sudhanshu                                          ";
let mychannel = "chai      ";
console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: " hammer and stormbreaker",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.sudhanshu = function () {
  console.log(`sudhanshu is present in all objects `);
};

Array.prototype.heySudhanshu = function () {
  console.log(`sudhanshu says hello to all of you`);
};
//heroPower.sudhanshu()

myHeros.sudhanshu();
myHeros.heySudhanshu();
// heroPower.heySudhanshu()

// inheritance

const User = {
  name: "sudhanshu",
  email: "sudhanshu@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User;

// modern syntax ===> new code bases me yahi milega or yhi use hoga zyada tar

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chaiorcode      ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`true length is : ${this.trim().length}`);
};

anotherUsername.trueLength()
"sudhanshu".trueLength()
"iceTea".trueLength()