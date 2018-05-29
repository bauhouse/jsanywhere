function factorial(num) {
  var factor = num - 1;
  while (factor > 1) {
    num *= factor;
    factor--;
  }
  return num;
}

console.log(factorial(4));
