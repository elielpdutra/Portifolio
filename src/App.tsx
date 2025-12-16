import { Header } from './components/Layout/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { ParticlesBackground } from './components/Layout/ParticlesBackground';

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
