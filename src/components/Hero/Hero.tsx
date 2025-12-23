import styles from './Hero.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef}
      className={`${styles.hero} ${isVisible ? 'animate-fade-in-up' : ''}`} 
      style={{ opacity: 0 }}
      id="home"
    >
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.label}>
             <span>DESENVOLVEDOR FULLSTACK</span>
          </div>
          
          <h1 className={styles.title}>
            ELIEL<br />
            PORTO
          </h1>
        </div>

        <div className={styles.footer}>
            <p className={styles.description}>
                Construindo experiências digitais robustas e escaláveis. 
                Focado em React, Node.js e Arquitetura de Software.
            </p>
            
            <div className={styles.scrollIndicator}>
                <div className={styles.circle}>
                    <ArrowDown size={24} />
                </div>
                <span>SCROLL DOWN</span>
            </div>
        </div>
      </div>
    </section>
  );
}
