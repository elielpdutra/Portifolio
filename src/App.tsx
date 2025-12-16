import { Header } from './components/Layout/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App
