// isko prop bhi kehte hai so dont confuse
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username:${this.username}`);
  }

  static createId() {
    // static add krne se vo usko rok deta h method jo bhi tm run krwaoge
    return `12345`;
  }
}

const sudhanshu = new User("sudhanshu");
// console.log(sudhanshu.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com")
console.log(iphone.createId());