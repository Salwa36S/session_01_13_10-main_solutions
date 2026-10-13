/*
  DEMO 9 — Grade from score

  90 or more → "A"
  75 or more → "B"
  60 or more → "C"
  otherwise  → "F"

  Print: "Score 82 → Grade B"
*/

let score = 82;
let Grade;
if(score>=90){
  Grade='A'
}else if(score>=75){
Grade='B'
}else if(score>=60){
Grade='C'
}else{
  Grade='F'
}
console.log(`Score ${score} → Grade ${Grade}`)
// your code here
