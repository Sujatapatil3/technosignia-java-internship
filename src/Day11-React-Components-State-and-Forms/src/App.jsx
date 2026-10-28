
import { useState } from "react";
import "./App.css";

const courses = [
  { name: "React", icon: "◈", detail: "Frontend development" },
  { name: "Java", icon: "☕", detail: "Backend development" },
  { name: "Python", icon: "⌘", detail: "Programming fundamentals" },
  { name: "Web Development", icon: "⌘", detail: "Build for the web" },
];

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [student, setStudent] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
      form: "",
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.course) {
      newErrors.course = "Please select a course.";
    }

    setErrors(newErrors);
    setStudent(null);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setStudent({
      name: form.name.trim(),
      email: form.email.trim(),
      course: form.course,
    });
  }

  function resetForm() {
    setForm({ name: "", email: "", course: "" });
    setErrors({});
    setStudent(null);
  }

  return (
    <main className="page-shell">
      <nav className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">F.</span>
          <span>FORM<span className="brand-light">/LAB</span></span>
        </a>
        <span className="nav-tag">STUDENT PORTAL <span>●</span></span>
      </nav>

      <section className="layout" id="home">
        <div className="intro">
          <div className="eyebrow">
            <span className="live-dot" />
            YOUR LEARNING JOURNEY STARTS HERE
          </div>

          <h1>
            Your next
            <br />
            chapter
            <br />
            starts <span>here.</span>
          </h1>

          <p className="intro-text">
            One small step today. A whole new set of
            possibilities tomorrow. Find your course and
            start building something meaningful.
          </p>

          <div className="feature-list">
            <div className="feature">
              <span className="feature-icon">↗</span>
              <div>
                <strong>Learn by doing</strong>
                <p>Turn curiosity into practical skills.</p>
              </div>
            </div>

            <div className="feature">
              <span className="feature-icon">✳</span>
              <div>
                <strong>Choose your direction</strong>
                <p>Pick a course that interests you.</p>
              </div>
            </div>
          </div>

          <div className="left-footer">
            <span>MADE FOR YOUR NEXT MOVE.</span>
            <span>01 — 04</span>
          </div>
        </div>

        <div className="form-panel">
          {!student ? (
            <>
              <div className="form-heading">
                <div>
                  <span className="step-label">YOUR FIRST STEP </span>
                  <h2>Let's get you enrolled.</h2>
                  <p>Tell us a little about yourself.</p>
                </div>
                <span className="form-number">01</span>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">FULL NAME</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <span className="error">{errors.name}</span>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="field">
                  <div className="label-row">
                    <label>CHOOSE YOUR COURSE</label>
                    <span className="optional">PICK ONE</span>
                  </div>

                  <div className="course-grid">
                    {courses.map((course) => (
                      <button
                        className={`course-option ${
                          form.course === course.name ? "selected" : ""
                        }`}
                        type="button"
                        key={course.name}
                        onClick={() =>
                          handleChange({
                            target: {
                              name: "course",
                              value: course.name,
                            },
                          })
                        }
                        aria-pressed={form.course === course.name}
                      >
                        <span className="course-icon">{course.icon}</span>
                        <span className="course-name">{course.name}</span>
                        <span className="course-check">
                          {form.course === course.name ? "✓" : "+"}
                        </span>
                      </button>
                    ))}
                  </div>

                  {errors.course && (
                    <span className="error">{errors.course}</span>
                  )}
                </div>

                {errors.form && <p className="error">{errors.form}</p>}

                <button className="submit-button" type="submit">
                  <span>Complete registration</span>
                  <span className="submit-arrow">↗</span>
                </button>

                <p className="privacy-note">
                  <span>✳</span> Just the basics. No complicated process.
                </p>
              </form>
            </>
          ) : (
            <div className="success-panel">
              <div className="success-icon">✓</div>
              <span className="step-label">REGISTRATION COMPLETE / 02</span>
              <h2>You're on your way, {student.name.split(" ")[0]}.</h2>
              <p className="success-copy">
                Your details have been captured successfully.
                Here's your registration summary.
              </p>

              <div className="student-details">
                <span className="detail-label">STUDENT NAME</span>
                <strong>{student.name}</strong>

                <span className="detail-label">EMAIL ADDRESS</span>
                <strong className="detail-email">{student.email}</strong>

                <span className="detail-label">SELECTED COURSE</span>
                <strong>{student.course}</strong>
              </div>

              <button
                className="submit-button"
                onClick={resetForm}
                type="button"
              >
                <span>Register another student</span>
                <span className="submit-arrow">↗</span>
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className="page-footer">
        <span>FORM / LAB © 2026</span>
        <span>LEARN SOMETHING. BUILD SOMETHING.</span>
        <span>DAY 11 — REACT</span>
      </footer>
    </main>
  );
}

export default App;
