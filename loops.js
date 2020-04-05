var array = []
function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i === 0) {
    array.push(i)
    array[i] = `I am ${i} strange loop.`
  }
  else {
    array.push(i)
    array[i] = `I am ${i} strange loops.`
  }
}
/*  console.log(array[i])
  return (array[i])
}
}
/*
var number = 100
function whileLoop(number) {
  number > -1
  number--;
  }
  while (whileLoop()) {
  console.log(number)
  }
  return "done"


let num = 0
function doWhileLoop() {
    num = num + 1;
    return num;

}
do {
  console.log("I run once regardless.")
}
  while(doWhileLoop() < 10)
