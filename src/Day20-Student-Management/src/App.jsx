
import { useEffect, useState } from "react";
import StudentService from "./services/StudentService";
import "./App.css";

function App() {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({
        name: "",
        email: "",
        phone: "",
        course: ""
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = () => {
        StudentService.getAllStudents()
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error("Error loading students:", error);
                alert("Unable to load students. Check whether the backend is running.");
            });
    };

    const handleChange = (event) => {
        setStudent({
            ...student,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const request = editingId
            ? StudentService.updateStudent(editingId, student)
            : StudentService.addStudent(student);

        request
            .then(() => {
                alert(editingId ? "Student updated successfully!" : "Student added successfully!");
                resetForm();
                loadStudents();
            })
            .catch(error => {
                console.error("Error saving student:", error);
                alert("Unable to save student. Please check the details and backend.");
            });
    };

    const handleEdit = (selectedStudent) => {
        setStudent({
            name: selectedStudent.name,
            email: selectedStudent.email,
            phone: selectedStudent.phone,
            course: selectedStudent.course
        });
        setEditingId(selectedStudent.id);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            StudentService.deleteStudent(id)
                .then(() => {
                    alert("Student deleted successfully!");
                    loadStudents();
                })
                .catch(error => {
                    console.error("Error deleting student:", error);
                    alert("Unable to delete student.");
                });
        }
    };

    const resetForm = () => {
        setStudent({
            name: "",
            email: "",
            phone: "",
            course: ""
        });
        setEditingId(null);
    };

    return (
        <div className="app-container">
            <header className="header">
                <h1>Student Management System</h1>
                <p>Manage student records easily</p>
            </header>

            <main className="main-content">
                <section className="form-section">
                    <h2>{editingId ? "Update Student" : "Add New Student"}</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Student Name"
                            value={student.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={student.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={student.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="course"
                            placeholder="Course"
                            value={student.course}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">
                            {editingId ? "Update Student" : "Add Student"}
                        </button>

                        {editingId && (
                            <button type="button" className="cancel-button" onClick={resetForm}>
                                Cancel
                            </button>
                        )}
                    </form>
                </section>

                <section className="table-section">
                    <h2>Student Records</h2>

                    <p className="student-count">
                        Total Students: {students.length}
                    </p>

                    {students.length === 0 ? (
                        <p className="empty-message">No students found. Add your first student!</p>
                    ) : (
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Course</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {students.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.course}</td>
                                            <td>
                                                <button onClick={() => handleEdit(item)}>
                                                    Edit
                                                </button>
                                                <button
                                                    className="delete-button"
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
