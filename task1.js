const countTinyPairs = (a, b, k) => {
  let output = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = b.length - 1; j > 0; j--) {
      if (!output.includes(output[i])) {
        output.push(`${a[i]}${b[i]}`);
      }
    }
  }
  let count = 0;
  for (let i = 0; i < output.length; i++) {
    if (output[i] < k) {
      count = count + 1;
    }
  }

  return count;
};

let a = [1, 2, 3];
let b = [1, 2, 3];
let k = 31;

console.log(countTinyPairs(a, b, k));
