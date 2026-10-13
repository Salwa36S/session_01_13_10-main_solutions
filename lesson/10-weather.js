/*
  Task 10 — Weather advice

  more than 40 → "Stay inside, it's too hot!"
  more than 25 → "Warm day, drink water"
  otherwise    → "Cool day, enjoy!"

  Test with 43, 30 and 20.
*/

let temperature = 43;
if(temperature>40){
  console.log(`Stay inside, it's too hot! `)
}else if(temperature>25){
   console.log(`Warm day, drink water `)
}else{
   console.log(`Cool day, enjoy! `)
}
// your code here
