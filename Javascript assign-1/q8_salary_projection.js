let salary = 50000;
const incrementRate = 8;
const projection = [];

for (let year = 1; year <= 5; year++) {
  salary += (salary * incrementRate) / 100;
  projection.push({ Year: year, Salary: Math.round(salary) });
}

console.table(projection);
