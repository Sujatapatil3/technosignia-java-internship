
const calculateButton = document.getElementById("calculateButton");
const output = document.getElementById("output");

function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total;
}

function calculateGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 75) {
        return "A";
    } else if (percentage >= 60) {
        return "B";
    } else if (percentage >= 40) {
        return "C";
    } else {
        return "Fail";
    }
}

calculateButton.addEventListener("click", function () {
    const mark1 = document.getElementById("subject1").value;
    const mark2 = document.getElementById("subject2").value;
    const mark3 = document.getElementById("subject3").value;

    if (mark1 === "" || mark2 === "" || mark3 === "") {
        output.textContent = "Please enter marks for all three subjects.";
        return;
    }

    const marks = [Number(mark1), Number(mark2), Number(mark3)];

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100) {
            output.textContent = "Each mark must be between 0 and 100.";
            return;
        }
    }

    const total = calculateTotal(marks);
    const percentage = total / marks.length;
    const grade = calculateGrade(percentage);

    output.textContent =
        "Total Marks: " + total + " / 300" +
        " | Percentage: " + percentage.toFixed(2) + "%" +
        " | Grade: " + grade;
});
