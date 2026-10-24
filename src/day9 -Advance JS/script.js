
const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const searchInput = document.getElementById("searchInput");
const courseFilter = document.getElementById("courseFilter");
const formMessage = document.getElementById("formMessage");
const apiMessage = document.getElementById("apiMessage");
const loadButton = document.getElementById("loadButton");
const studentCount = document.getElementById("studentCount");
const averageMarks = document.getElementById("averageMarks");

// ES6: initial student data
let students = [
    { id: 1, name: "Asha", course: "Java", marks: 85 },
    { id: 2, name: "Riya", course: "HTML", marks: 72 },
    { id: 3, name: "Neha", course: "JavaScript", marks: 91 }
];

let nextId = 4;

// Spread operator: add a student without replacing existing records
function addStudent(student) {
    students = [...students, student];
}

// Array methods: search, filter, and calculate statistics
function renderStudents() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCourse = courseFilter.value;

    const filteredStudents = students.filter(({ name, course }) => {
        const matchesName = name.toLowerCase().includes(searchTerm);
        const matchesCourse =
            selectedCourse === "All" || course === selectedCourse;

        return matchesName && matchesCourse;
    });

    studentList.replaceChildren();

    // map(): turn student objects into display cards
    const cards = filteredStudents.map(({ name, course, marks }) => {
        const card = document.createElement("article");
        card.className = "student-card";

        const heading = document.createElement("h3");
        heading.textContent = name;

        const courseText = document.createElement("p");
        courseText.textContent = "Course: " + course;

        const marksText = document.createElement("p");
        marksText.textContent = "Marks: " + marks + "/100";

        card.append(heading, courseText, marksText);
        return card;
    });

    cards.forEach(card => studentList.appendChild(card));

    // reduce(): calculate the total marks
    const totalMarks = students.reduce(
        (total, student) => total + student.marks, 0
    );

    studentCount.textContent =
        "Students: " + filteredStudents.length +
        " (Total records: " + students.length + ")";

    averageMarks.textContent =
        "Average Marks: " +
        (students.length ? (totalMarks / students.length).toFixed(2) : "0");

    if (filteredStudents.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "No matching students found.";
        studentList.appendChild(emptyMessage);
    }
}

// Form submission event
studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const course = document.getElementById("studentCourse").value;
    const marks = Number(document.getElementById("studentMarks").value);

    if (!name || !course || marks < 0 || marks > 100) {
        formMessage.textContent = "Please enter valid student details.";
        return;
    }

    const newStudent = {
        id: nextId++,
        name,
        course,
        marks
    };

    addStudent(newStudent);
    studentForm.reset();
    formMessage.textContent = name + " added successfully!";

    renderStudents();
});

// Search and filter events
searchInput.addEventListener("input", renderStudents);
courseFilter.addEventListener("change", renderStudents);

// Fetch API: load external sample users
loadButton.addEventListener("click", async function () {
    apiMessage.textContent = "Loading sample users...";
    loadButton.disabled = true;

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Request failed: " + response.status);
        }

        const users = await response.json();

        // Convert external users into student records
        const apiStudents = users.map(user => ({
            id: nextId++,
            name: user.name,
            course: "Java",
            marks: 0
        }));

        students = [...students, ...apiStudents];

        apiMessage.textContent =
            users.length + " sample users loaded successfully.";

        renderStudents();
    } catch (error) {
        apiMessage.textContent =
            "Could not load API data. Please try again.";
        console.error("API error:", error);
    } finally {
        loadButton.disabled = false;
    }
});

// Display the initial student records
renderStudents();
