
console.log("Hello, JavaScript!");

// Variables
let studentName = "Mansi";
const course = "JavaScript";

console.log("Student Name:", studentName);
console.log("Course:", course);

// Find the HTML elements
const message = document.getElementById("message");
const welcomeButton = document.getElementById("welcomeButton");

// Respond to a button click
welcomeButton.addEventListener("click", function () {
    message.textContent = "Hey " + studentName + "! Welcome to JavaScript. ✨";
});
