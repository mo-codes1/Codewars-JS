function atomicNumber(num) {
  var n = 1;
  var arr = [];

  while (num > 0) {
      var formula = (2 * n ** 2);
      if (num > formula) {
          arr.push(formula);
      } else {
          arr.push(num);
      }
      num -= formula;

      n++;
  }

  return arr;
}

module.exports = atomicNumber