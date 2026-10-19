const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
const passedStudents = scores.filter((score) => score >= 50);
const grades = scores.map((score) => (score >= 50 ? "Pass" : "Fail"));

console.log("===== Student Performance Summary =====");
console.log("Scores           :", scores.join(", "));
console.log("Results          :", grades.join(", "));
console.log("Highest Score    :", highest);
console.log("Lowest Score     :", lowest);
console.log("Average Score    :", average.toFixed(2));
console.log("Students Passed  :", passedStudents.length);
console.log("Students Failed  :", scores.length - passedStudents.length);
