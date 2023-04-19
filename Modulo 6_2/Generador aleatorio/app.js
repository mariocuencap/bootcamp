var randomPick = (n, min, max) => {

    const result = [];
    while (result.length < n) {
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!result.includes(num)) {
        result.push(num);
      }
    }
    
    return result;
  };

  // Generador
console.log(randomPick(10, 1, 100)); // [2, 9, 7, 6, 10]