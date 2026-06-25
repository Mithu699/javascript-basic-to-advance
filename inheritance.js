class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
const chai = new Teacher("chai","chai@gmail.com","123456")
// bina new likhe krnge to error aa jayega issi liye phle new pdhe or bahut zaruri bhi hai 
chai.addCourse()
chai.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log((chai instanceof Teacher));
