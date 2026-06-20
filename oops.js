// object literal

const user = {
  username: "sudhanshu ranjan",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from the database ");
    // console.log(`Username: ${this.username}`);  // bina this ke run nhi krega
    console.log(this);
  },
};

console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this); // global context me print krwaya hai

// CONSTRUCTOR FUNCTION  - ek object literal se multiple instances bna saku yhi krta hai constructor and kaafi zaruri hai aage ke liye

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`welcome ${this.username}`);
    
  }
  return this;
}

const userOne = new User("sudhanshu", 12, true);
const userTwo = new User("chaiaurcode", 11, false);
// agr aise code run kroge to userone console me rehke bhi user2 print hoga kyuki overwrite kr dega to isko thik krne ke liye hmlog jab bhi naya user bnayenege to ek uske aage new user ya jo naam diya ho to new laga do bss ho jayega taki overwrite na kre

console.log(userOne.constructor); // refernce hota hai khud ke bare me ek or kuch nahi hota
console.log(userTwo);
