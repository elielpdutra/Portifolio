import { useRef, useEffect } from 'react';
import styles from './Projects.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PROJECTS_DATA } from '../../constants';

function ProjectItem({ project }: { project: any }) {
  const itemRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    const element = itemRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      element.style.setProperty('--mouse-x', `${x}px`);
      element.style.setProperty('--mouse-y', `${y}px`);
    };

    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <a ref={itemRef} href={project.url} className={styles.projectItem}>
        {/* Glow Element */}
        <div className={styles.spotlight} aria-hidden="true" />
        
        <div className={styles.projectInfo}>
            <span className={styles.projectId}>{project.id}</span>
            <div className={styles.titleWrapper}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
            </div>
        </div>
        <div className={styles.projectMeta}>
            <span className={styles.projectTech}>{project.tech}</span>
            <span className={styles.projectYear}>{project.year}</span>
        </div>
    </a>
  );
}



export function Projects() {
  const { elementRef, isVisible } = useScrollAnimation();

  const projects = PROJECTS_DATA;

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

        <div className={styles.projectList}>
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
