// singleton - ek hi object hai 
// object literal
// Object.create -  isse bhi object bnta hai jo singleton hota hai


const mySym = Symbol("key1")

const jsuser = {
    name : "sudhanshu",
    "full name" : "sudhanshu ranjan",
    [mySym]: "mykey1",
    age: 19, 
    location :"patna",
    email: "sudhanshuzoom1@gmail.com",
    isloggedin: false,
    lastlogindays : ["monday", "saturday"]
}

// console.log(jsuser.email)  objects ko access krne ka ye ek rasta hai or bhi hai ye wala purana ho chuka hai

//console.log(jsuser["email"]) // ye wala bhi pta rhna chahiye good for multiple resulit 
//console.log(jsuser["full name"])
//  console.log(jsuser[mySym])

jsuser.email = "sudhanshu@gmail.com"
Object.freeze(jsuser)
jsuser.email = "sudhanshu@gmail.com"
//console.log(jsuser)



jsuser.greeting = function(){
    console.log("hello sudhanshu ranjan");
}

console.log(jsuser.greeting)

jsuser.greetingTwo= function(){
    console.log(`sudhanshu is the best dev);
    
}