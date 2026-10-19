var bonus = 5000;

function calculateSalary() {
  let salary = 40000;
  let isPermanent = true;

  if (isPermanent) {
    salary += bonus;
  }

  console.log("Total salary (permanent):", salary);

  isPermanent = false;
  let total = 40000;

  if (isPermanent) {
    total += bonus;
  }

  console.log("Total salary (not permanent):", total);
}

calculateSalary();

console.log("Global bonus after function:", bonus);
console.log("Is salary accessible outside?", typeof salary);
console.log("Is isPermanent accessible outside?", typeof isPermanent);
