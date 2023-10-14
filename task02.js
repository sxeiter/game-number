function recursiveFunction(arr) {
    if (arr.reduce((sum, num) => sum + num, 0) >= 50) {
      return arr;
    } else {
      const num = Math.floor(Math.random() * 11);
      arr.push(num);
      return recursiveFunction(arr);
    }
  }

  const myArray = [];
  const result = recursiveFunction(myArray);
  console.log(result);