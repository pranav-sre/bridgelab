const expenses = [4500, 2000, 12000, 3200, 1800];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}

const average = total / expenses.length;
let finalAmount = total;
finalAmount *= 1.1;

console.log("Total Expense:", total.toFixed(2));
console.log("Average Expense:", average.toFixed(2));
console.log("Final Amount (+10% tax):", finalAmount.toFixed(2));
