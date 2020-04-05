const array = []
function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i === 1) {
    array.push(`I am ${i} strange loop.`)
}
  else

    array.push(`I am ${i} strange loops.`)

  }
return array
}
forLoop(array)

function whileLoop(n) {
  while (n > 0) {
  console.log(n)
  n--
  }
  return "done"
}


function doWhileLoop(num) {
do {
  num = num + 1;
  return num;

  console.log("I run once regardless.")
}
  while(doWhileLoop(num) < 10)
}
