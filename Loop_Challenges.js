// Loop Challenges


//  #1 Print odds 1-20
// Using a loop write code that will 
// console.log all of the odd values from 1 up to 20.

function printOdds1to20() {
  var num = 1;
  while (num <= 20){
  console.log(num);
    num = num + 2;
  }
}
printOdds1to20();

// # 2 Decreasing Multiples of 3
// Using a loop write code that will 
// console.log all of the values that are 
// evenly divisible by 3 from 100 down to 0.

for (let i = 100; i >= 0; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// # 3 Print the sequence
// Using a loop write code that will console.log 
// the values in this
//  sequence 4, 2.5, 1, -0.5, -2, -3.5.

let num = 4;

while (num >= -3.5) {
  console.log(num);
  num -= 1.5;
}

// # 4 Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log 
// the result 1 + 2 + 3 + ... + 98 + 99 + 100. 
// We should get back 5050 at the end.

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);


// # 5 Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product 
// and at the end console.log 
// the result 1 * 2 * 3 * ... * 10 * 11 * 12. 
// We should get back 479001600 at the end.

let product = 1;
for (let i = 1; i <= 12; i++) {
  product *= i;
}
console.log(product);

// Fin!

