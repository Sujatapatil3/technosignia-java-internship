import Header from "./components/Header";
import Footer from "./components/Footer";

function Home({ studentName, topic }) {
  return (
    <main>
      <h2>Welcome, {studentName}!</h2>
      <p>Today's topic: {topic}</p>
      <p>
        I am learning to create reusable components
        using React.js.
      </p>
    </main>
  );
}

function App() {
  return (
    <>
      <Header title="My React Learning Page" />

      <Home
        studentName="React Learner"
        topic="React.js Introduction"
      />

      <Footer year={2026} />
    </>
  );
}

export default App;