/*
  ★ Bonus 6 — Leap year

  A year is a leap year if:
  - it is divisible by 4 AND NOT divisible by 100,
  - OR it is divisible by 400.

  Print: "2024 is a leap year" or "2023 is not a leap year"
  Test with 2024, 2023, 1900 and 2000.
*/

let year = 2024;

// your code here

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) 
  console.log(`${year} is a leap year`); else 
  console.log(`${year} is not a leap year`);
