const numbers = [];
const results = [];

for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    results.push("FizzBuzz");
  } else if (numbers[i] % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

for (let i = 0; i < numbers.length; i++) {
  console.log(`${numbers[i]} -> ${results[i]}`);
}

console.log(results);
