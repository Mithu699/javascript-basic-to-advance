// immediately invoked function expressions (IIFE)


(function chai(){  // named iife
    console.log(`DB CONNECTED`);
})(); // ye semicolon ke wjh se error aa skta hai kyuki invoked hogya hai pr usko pta nhi kaha rukna hai to isiliye semicolon lgaye hai


( () => {
    console.log(`DB CONNECTED TWO`);
    
})()








// global scope ke pollution se problem hoti hai kayi baar to uss global scope ke variables ke pollution ko htane ke liye iife ka use kiya 
