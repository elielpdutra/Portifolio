import styles from './About.module.css';

export function About() {
  const stats = [
    { value: '2+', label: 'Anos de Exp.' },
    { value: '10+', label: 'Projetos' },
    { value: '24/7', label: 'Comprometimento' }, // Ou 'Disponível', 'Clientes Felizes' etc.
  ];

  return (
    <section className={styles.about} id="about">
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
            Sou o Eliel Porto, um apaixonado por tecnologia e resolução de problemas. 
            Como desenvolvedor Fullstack, busco sempre a união perfeita entre uma interface 
            elegante e um backend robusto.
          </p>
          <p className={styles.description}>
            Meu objetivo é transformar necessidades em aplicações reais, performáticas e 
            que entreguem valor verdadeiro. Estou sempre aprendendo novas tecnologias para 
            me manter na vanguarda do desenvolvimento web.
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
