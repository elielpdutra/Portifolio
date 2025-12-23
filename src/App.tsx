import { Header } from './components/Layout/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
// import { Projects } from './components/Projects/Projects';
import { ProjectsPlaceholder as Projects } from './components/Projects/ProjectsPlaceholder';
import { Contact } from './components/Contact/Contact';
import { ParticlesBackground } from './components/Layout/ParticlesBackground';
import { Cursor } from './components/Layout/Cursor';

import { useEffect } from 'react';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    // Força o scroll para o topo ao atualizar a página
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Inicializa o Scroll Suave (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Cursor />
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
