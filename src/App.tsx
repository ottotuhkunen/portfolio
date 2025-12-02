import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Work from './components/Work';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <Projects />
      <Skills />
      <Work />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
