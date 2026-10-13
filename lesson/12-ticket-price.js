/*
  ★ Bonus 12 — Ticket price

  under 5     → free
  5 to 17     → 2 OMR
  18 to 59    → 5 OMR
  60 or more  → 3 OMR

  Print: "Age 30 → ticket costs 5 OMR"
  Test with 3, 12, 30 and 65.
*/


let age = 30;
let ticketPrice;

if (age < 5) {
  ticketPrice = "free";
} else if (age >= 5 && age <= 17) {
  ticketPrice = "2 OMR";
} else if (age >= 18 && age <= 59) {
  ticketPrice = "5 OMR";
} else if (age >= 60) {
  ticketPrice = "3 OMR";
}

console.log(`Age ${age} → ticket costs ${ticketPrice}`);