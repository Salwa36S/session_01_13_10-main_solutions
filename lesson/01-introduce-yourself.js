/*
  DEMO 1 — Introduce yourself

  1. Create a variable firstName with const.
  2. Create a variable age with let.
  3. Print: "My name is Ahmed and I am 24 years old"
  4. Change age to 25 and print the sentence again.
  5. Try to change firstName. What happens? Why?
*/

// your code here
const firstName ="Salwa";
let age =25;
console.log(`My name is ${name} and I am ${age} years old`);
age = 26;
//Uncaught TypeError: Assignment to constant variable.
firstName = 'Aisha';