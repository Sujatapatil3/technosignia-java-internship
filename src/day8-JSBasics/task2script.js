
console.log("=== JavaScript Data Types ===");

// 1. Data types
let studentName = "Sujata";
let age = 22;
let percentage = 85.5;
let isLearning = true;
let futureGoal;
let emptyValue = null;
let skills = ["Java", "HTML", "CSS"];
let student = {
    name: "Sujata",
    course: "Computer Engineering"
};

// 2. Check data types
console.log("Name:", studentName, typeof studentName);
console.log("Age:", age, typeof age);
console.log("Percentage:", percentage, typeof percentage);
console.log("Is learning:", isLearning, typeof isLearning);
console.log("Future goal:", futureGoal, typeof futureGoal);
console.log("Empty value:", emptyValue, typeof emptyValue);
console.log("Skills:", skills);
console.log("Student object:", student);

// 3. Arithmetic operators
let a = 10;
let b = 3;

console.log("\n=== Arithmetic Operators ===");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// 4. Assignment operators
let score = 10;
score += 5;
console.log("\n=== Assignment Operator ===");
console.log("Score after += 5:", score);

// 5. Comparison operators
console.log("\n=== Comparison Operators ===");
console.log("10 > 3:", 10 > 3);
console.log("10 < 3:", 10 < 3);
console.log('10 === "10":', 10 === "10");
console.log("10 !== 3:", 10 !== 3);

// 6. Logical operators
console.log("\n=== Logical Operators ===");
console.log("true && false:", true && false);
console.log("true || false:", true || false);
console.log("!true:", !true);

// 7. Display results on the webpage
const results = `
DATA TYPES
Name: ${studentName}
Age: ${age}
Percentage: ${percentage}
Is learning: ${isLearning}
Future goal: ${futureGoal}
Empty value: ${emptyValue}
Skills: ${skills.join(", ")}
Student course: ${student.course}

ARITHMETIC OPERATORS
10 + 3 = ${a + b}
10 - 3 = ${a - b}
10 * 3 = ${a * b}
10 / 3 = ${a / b}
10 % 3 = ${a % b}

ASSIGNMENT OPERATOR
10 += 5 gives ${score}

COMPARISON OPERATORS
10 > 3: ${10 > 3}
10 < 3: ${10 < 3}
10 === "10": ${10 === "10"}
10 !== 3: ${10 !== 3}

LOGICAL OPERATORS
true && false: ${true && false}
true || false: ${true || false}
!true: ${!true}
`;

document.getElementById("output").textContent = results;
