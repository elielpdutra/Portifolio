import styles from './Projects.module.css';
import { Code2, Github } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Projects() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef}
      className={`${styles.projects} ${isVisible ? 'animate-fade-in-up' : ''}`} 
      style={{ opacity: 0 }}
      id="projects"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          Projetos <span className={styles.highlight}>Destaque</span>
        </h2>

        <div className={styles.workingOn}>
            <div className={styles.codingIcon}>
                <Code2 size={48} />
            </div>
            <h3>Em desenvolvimento</h3>
            <p>
                Estou trabalhando em projetos incríveis no momento. 
                Em breve, você poderá conferir o resultado do meu trabalho por aqui.
            </p>
            <a href="https://github.com/elielpdutra" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                <Github size={20} />
                Acompanhe meu GitHub
            </a>
        </div>
      </div>
    </section>
  );
}

