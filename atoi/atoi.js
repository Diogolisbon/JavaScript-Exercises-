function atoi(str) {
    let num = 0;
    let sign = 1;
    let i = 0;
    
    // Check for leading whitespace
    while (str[i] === ' ') {
      i++;
    }
    
    // Check for a sign
    if (str[i] === '-') {
      sign = -1;
      i++;
    } else if (str[i] === '+') {
      i++;
    }
    
    // Convert digits to a number
    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
      num = num * 10 + (str[i] - '0');
      i++;
    }
    
    return sign * num;
  }

  console.log(atoi("123")); // Output: 123
console.log(atoi("-456")); // Output: -456
console.log(atoi("   +789")); // Output: 789
