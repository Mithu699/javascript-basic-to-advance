// SCOPE AND LOCAL SCOPE //

// {} => yahi scope hai jab kisi function ke sath aata h
var c = 300
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(a);
console.log(b);
console.log(c);
