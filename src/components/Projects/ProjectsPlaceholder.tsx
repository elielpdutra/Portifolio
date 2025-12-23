import styles from './Projects.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function ProjectsPlaceholder() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef}
      className={`${styles.projects} ${isVisible ? 'animate-fade-in-up' : ''}`} 
      style={{ opacity: 0 }}
      id="projects"
    >
      <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.label}>PROJETOS SELECIONADOS</span>
        </div>

        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '200px',
            border: '1px dashed rgba(255,255,255,0.1)',
            borderRadius: '1rem'
        }}>
            <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                color: 'var(--text-secondary)',
                opacity: 0.5,
                textTransform: 'uppercase'
            }}>
                Em breve...
            </p>
        </div>
      </div>
    </section>
  );
}
