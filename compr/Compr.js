function matches(source, target) {
    return Object.keys(source).every(
      (key) => target.hasOwnProperty(key) && target[key] === source[key]
    );
  }
  
  const car = {
    color: 'red',
    type: 'suv',
  };
  
  p1 = {
    name: 'john doe',
    car,
  };
  p2 = {
    name: 'john doe',
    car,
  };
  console.log(matches(p1, p2)); // true
  console.log(matches(p1, { color: 'red', type: 'suv' })); // false
  console.log(matches(p1, { name: 'john doe', car })); // true
  console.log(matches(p1, { name: 'jane doe', car })); // false

