
import { Routes, Route, NavLink, Link, useParams } from "react-router-dom";

function Home() {
  return (
    <section className="page">
      <h1>Welcome to Student Portal</h1>
      <p>Learn, explore, and manage student information.</p>
      <Link className="primary-btn" to="/students">
        View Students
      </Link>
      <Link to="/invalid-page">Test 404 Page</Link>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <h1>About Us</h1>
      <p>
        This student portal is a React application created to
        practice client-side routing.
      </p>
    </section>
  );
}

function Students() {
  const students = [
    { id: 101, name: "Aarav Patil", course: "Computer Engineering" },
    { id: 102, name: "Priya Sharma", course: "Information Technology" },
    { id: 103, name: "Rahul Joshi", course: "Computer Science" },
  ];

  return (
    <section className="page">
      <h1>Students</h1>
      <p>Select a student to view their profile.</p>

      <div className="student-list">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
            <Link to={`/students/${student.id}`}>
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function StudentDetails() {
  const { id } = useParams();

  return (
    <section className="page">
      <h1>Student Profile</h1>
      <p>Student ID: {id}</p>
      <p>This page reads the student ID from the URL.</p>
      <Link to="/students">← Back to Students</Link>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <h1>Contact Us</h1>
      <p>Email: support@studentportal.com</p>
      <p>We are happy to help!</p>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link className="primary-btn" to="/">
        Return Home
      </Link>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <Link className="brand" to="/">
          Student Portal
        </Link>

        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </main>

      <footer>
        <p>Day 12 — React Routing | TechnoSignia Internship</p>
      </footer>
    </div>
  );
}

export default App;
