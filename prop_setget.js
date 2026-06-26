function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this.email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this.password = value;
    },
  });
}

// ye sb phle ke time pe likha jata tha purani companies me 
// ye sb modern syntax hai kyuki ye sb property based bnaya hai hmlog ne 

const chai = new User("chai@gmail.com", "chai")
console.log(chai.email);
