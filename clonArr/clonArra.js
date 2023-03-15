// using spread operator
function cloneArr(arr) {
    return [...arr];
  }
  
  console.log([1, 2, 3, 4, 5]);
  
  // using for slice
  function cloneArr(arr) {
    return arr.slice();
  }
  
  console.log([1, 2, 3, 4, 5]);
  
  // using JSON object
  function cloneArr(arr) {
    return JSON.parse(JSON.stringify(arr));
  }
  
  console.log([1, 2, 3, 4, 5]);
  
  // using Array.from
  function cloneArr(arr) {
    return Array.from(arr);
  }
  
  console.log([1, 2, 3, 4, 5]);