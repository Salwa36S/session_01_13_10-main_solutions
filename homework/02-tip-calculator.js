/*
  Homework 2 — Tip calculator

  Your restaurant bill is 18 OMR. You want to leave a 10% tip.

  Print:
  "Tip: 1.8 OMR"
  "Total: 19.8 OMR"

  ★ Bonus: you split the total between 2 friends. How much does each pay?
*/

const bill = 18;
const tipPercent = 10;

// your code here
let tip = bill * 10 /100;
let total = tip + bill;
console.log(`Tip : ${tip} OMR \n Total: ${total} OMR`)
let friends = 2;
console.log(`each frinds pay ${total/friends} OMR`)