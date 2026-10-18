const marks = [78, 85, 92, 67, 88];

let totalMarks = 0;
let hasFailedSubject = false;

for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
  if (marks[i] < 35) {
    hasFailedSubject = true;
  }
}

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (hasFailedSubject || percentage < 50) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else {
  console.log("Promoted");
}
