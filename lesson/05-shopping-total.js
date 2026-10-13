/*
  Task 5 — Shopping total

  You buy 4 items, each costs 2.5 OMR. You have a 1.5 OMR discount.

  Print:
  "Subtotal: 10 OMR"
  "Total after discount: 8.5 OMR"

  ★ Bonus: change the discount to 10% of the subtotal instead.
*/


const price = 2.5;
const quantity = 4;
const discount = 1.5;
// your code here
const subtotal = price * quantity;
const total = subtotal - discount;
console.log(`Subtotal: ${subtotal} OMR`);
console.log(`Total after discount: ${total} OMR`);
