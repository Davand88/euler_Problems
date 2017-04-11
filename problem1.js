fucntion sumOfAllMultiples(number) {
  var sum = 0;
  for(var i = 0; i<number; i++) {
    if(i % 3 || i % 5)
    sum += i;
  }
  return sum
}
console.log(sumOfAllMultiples(1000));
