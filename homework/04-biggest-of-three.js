/*
  Homework 4 — Biggest of three

  Find the biggest of three numbers and print:
  "The biggest number is 27"

  Test with different numbers — make sure it works
  when the biggest one is a, b or c.
*/

let a = 12;
let b = 27;
let c = 9;

// your code here
if (a >= b && a >= c) {
  console.log(`The biggest number is ${a}`);
} else if (b >= a && b >= c) {
  console.log(`The biggest number is ${b}`);
} else {
  console.log(`The biggest number is ${c}`);
}