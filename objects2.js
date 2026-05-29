// objects part 2

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "divine hopelesss";
tinderUser.isloggedin = false;

// console.log(tinderUser);

const regularUser = {
  email: "ranjansudhanshu0011@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sudhanshu",
      lastname: "ranjan",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a" ,2: "b"}
const obj2 = {3: "a" ,4 : "b"}


const obj3 = {obj1, obj2}
const obj4 = Object.assign({} , obj1, obj2 )
console.log(obj3)