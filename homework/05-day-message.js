/*
  Homework 5 — Day of the week

  The week starts on Sunday:
  1 = Sunday, 2 = Monday, 3 = Tuesday, 4 = Wednesday,
  5 = Thursday, 6 = Friday, 7 = Saturday

  1. Print the name of the day.
  2. Print "Work day" (Sunday–Thursday) or "Weekend!" (Friday–Saturday).
  3. If the number is not 1–7, print "Invalid day".

  Example for day = 6:
  Friday
  Weekend!
*/

let day = 6;

// your code here

if (day === 1) {
  console.log("Sunday");
  console.log("Work day");
} else if (day === 2) {
  console.log("Monday");
  console.log("Work day");
} else if (day === 3) {
  console.log("Tuesday");
  console.log("Work day");
} else if (day === 4) {
  console.log("Wednesday");
  console.log("Work day");
} else if (day === 5) {
  console.log("Thursday");
  console.log("Work day");
} else if (day === 6) {
  console.log("Friday");
  console.log("Weekend!");
} else if (day === 7) {
  console.log("Saturday");
  console.log("Weekend!");
} else {
  console.log("Invalid day");
}