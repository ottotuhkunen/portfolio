import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
