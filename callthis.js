// call bind and apply ek sath smjha skte hai koi kharabi nahi hai
function SetUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  // this.username = username
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123");

console.log(chai);

// call jo hamara current execution context kisi or function ko pass kr deta hai 
