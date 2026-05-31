

function calculateCartPrice(...num1) {
  // ... rest operator hai ye js ka triple dot agr bhul jaoge to array ke form me nhi aayega
  return num1;
}

// console.log(calculateCartPrice(300, 300, 876));

const user = {
  username: "sudhanshu",
  price: 199
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

//handleObject(user);
handleObject({
    username : "sam", 
    price : 6754

})

const myNewArray = [652, 765, 376,765]
function returnSecondValue(getArray){
    return getArray[3]
}