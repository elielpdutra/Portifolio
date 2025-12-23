import styles from './About.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function About() {
  const { elementRef, isVisible } = useScrollAnimation();
  const stats = [
    { value: '01+', label: 'ANO EXP.' },
    { value: '05+', label: 'PROJETOS' },
    { value: '100%', label: 'COMPROMISSO' },
  ];

  return (
    <section 
      ref={elementRef}
      className={`${styles.about} ${isVisible ? 'animate-fade-in-up' : ''}`} 
      style={{ opacity: 0 }}
      id="about"
    >
      <div className={styles.container}>
        <div className={styles.header}>
             <span className={styles.label}>SOBRE MIM</span>
        </div>

        <div className={styles.content}>
            <div className={styles.headline}>
                <h2>
                    ENGENHARIA<br />
                    DE SOLUÇÕES<br />
                    DIGITAIS
                </h2>
            </div>
            
            <div className={styles.bio}>
                <p>
                    Meu foco é criar interfaces que não apenas funcionam, mas que definem padrões. 
                    Combinando design técnico com arquitetura de software robusta.
                </p>
                <div className={styles.stats}>
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.statItem}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
