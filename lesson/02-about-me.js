/*
  Task 2 — About me

  Create three variables: city, favoriteFood, birthYear.
  Print one sentence that uses all three, for example:
  "I live in Muscat, I love shuwa and I was born in 2002."

  ★ Bonus: create currentYear and print how old you are.
*/
let city='DamaWteen'
let favoriteFood ='burger'
let birthYear =2001;
console.log(`I live in ${city}, I love ${favoriteFood} and I was born in ${birthYear}`)
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log(`I am ${age} years old`);
