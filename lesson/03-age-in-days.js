/*
  DEMO 3 — Age in days

  const age = 24;

  1. Print your age in months, days and hours.
  2. Try every operator: +  -  *  /  %
  3. What does "5" + 5 print? And "5" * 5? Why are they different?
*/

const age = 24;
const month =24*12
const days = month*30
const hours=days*24;
console.log({month,days,hours})
// your code here
console.log(5 + 5);  // 10
console.log(5 - 5);  // 0
console.log(5 * 5);  // 25
console.log(5 / 5);  // 1
console.log(5 % 5);  // 0
console.log("5" + 5); // "55" 
console.log("5" * 5); // 25
/* 
* "5" + 5 produces "55" because + joins strings when one operand is a string.
* "5" * 5 produces 25 because JavaScript converts the string "5" to a number for multiplication.
*/
