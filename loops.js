const array = []
function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i === 0) {
    array[i].push = "I am 1 strange loop."

}
  else

    array[i].push = `I am ${i} strange loops.`

  }
return array
}
forLoop(array)
/*
var n = 100
function whileLoop(n) {
  n > -1
  n--;
  }
  while (whileLoop(n)) {
  console.log(n)
  }
  return "done"


let num = 0
function doWhileLoop(num) {
    num = num + 1;
    return num;

}
do {
  console.log("I run once regardless.")
}
  while(doWhileLoop() < 10)*/
