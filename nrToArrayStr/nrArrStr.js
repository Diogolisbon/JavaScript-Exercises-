function numberToArray(num) {
    if (typeof num === 'number') {
      return `${num}`.split('').map((n) => parseInt(n));
    } else {
      return NaN;
    }
  }
  
  console.log(numberToArray(1234)); // [1, 2, 3, 4]
  console.log(numberToArray('dsc')); // NaN