import styles from './About.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function About() {
  const { elementRef, isVisible } = useScrollAnimation();
  const stats = [
    { value: '2+', label: 'Anos de Exp.' },
    { value: '10+', label: 'Projetos' },
    { value: '24/7', label: 'Comprometimento' }, // Ou 'Disponível', 'Clientes Felizes' etc.
  ];

  return (
    <section 
      ref={elementRef}
      className={`${styles.about} ${isVisible ? 'animate-fade-in-up' : ''}`} 
      style={{ opacity: 0 }}
      id="about"
    >
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
            {/* Tech-related random image from unsplash */}
          <img 
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Coding setup" 
          />
        </div>

        <div className={styles.content}>
          <span className={styles.sectionTitle}>Sobre Mim</span>
          <h2 className={styles.title}>Criando soluções através do código</h2>
          
          <p className={styles.description}>
            Tenho 24 anos e sou formado em <strong>Análise e Desenvolvimento de Sistemas</strong>. 
            Sou um desenvolvedor Fullstack apaixonado por transformar problemas complexos em 
            interfaces intuitivas e sistemas robustos.
          </p>
          <p className={styles.description}>
            Com uma base sólida em lógica de programação e arquitetura de software, busco sempre 
            a excelência técnica sem perder o foco na experiência do usuário. Estou constantemente 
            estudando novas tecnologias para entregar o que há de mais moderno no mercado.
          </p>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statNumber}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
