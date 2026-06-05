// if
/*
const isUserLoggedIn = true;
const temperature = 323;

if (temperature < 50) {
  console.log("bahut garmi hai ");
} else {
  console.log("temperature is greater than 50");
}  */


/*
  const score = 200

  if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);

  } */
/*
const balance = 1000;

// if(balance > 500) console.log("garib bhn ka lund "), console.log("ameer ka choda"); // ye bahut unreadble code hai to ye nahi krna h

if (balance < 500) {
  console.log(" garib madhrchod");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("lesss than 900");
} else {
  console.log("less than 1200");
  
} */

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // multiple check krne ke liye || ye sign lgate hai code me 
  console.log("user logged in");
}
