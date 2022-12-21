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

let a = [16, 1, 4, 2, 14];
let b = [7, 11, 2, 0, 15];
let k = 743;

console.log(countTinyPairs(a, b, k));
