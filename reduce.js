/*

const array1 = [1, 2, 3, 4, 5];

const initialvalue = 0;
const sumwithinitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialvalue,
);
console.log(sumwithinitial);
 */

const myNums = [1, 2, 3];
/* 
const sum = myNums.reduce(function (acc, currValue) {
  console.log(`acc: ${acc} and currValue: ${currValue} `);
  return acc + currValue;
}, 0);
console.log(sum); */

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "java course",
    price: 999,
  },
  {
    itemName: "c++ course",
    price: 299,
  },
  {
    itemName: "solidity course",
    price: 29999,
  },
];

 const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

 console.log(priceToPay);
 