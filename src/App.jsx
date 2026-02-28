import "./styles.css";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Project/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
