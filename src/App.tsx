import { Header } from './components/Layout/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ paddingTop: '80px', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <h1 style={{ fontSize: 'var(--text-4xl)', background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Portfólio em Construção
        </h1>
        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
          Configuração do ambiente concluída com sucesso.
        </p>
      </main>
    </div>
  )
}

export default App
