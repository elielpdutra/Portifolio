import styles from './Skills.module.css';

export function Skills() {
  const skills = [
    "REACT", "TYPESCRIPT", "NODE.JS", "NEXT.JS", 
    "POSTGRESQL", "MYSQL", "TAILWIND", "GIT", "REST API",
    "REACT", "TYPESCRIPT", "NODE.JS", "NEXT.JS", 
    "POSTGRESQL", "MYSQL", "TAILWIND", "GIT", "REST API"
  ];

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.marqueContainer}>
        <div className={styles.marqueeContent}>
          {skills.map((skill, i) => (
            <span key={i} className={styles.skillItem}>{skill}</span>
          ))}
        </div>
        <div className={styles.marqueeContent} aria-hidden="true">
          {skills.map((skill, i) => (
            <span key={`clone-${i}`} className={styles.skillItem}>{skill}</span>
          ))}
        </div>
      </div>

      <div className={styles.staticList}>
        {Array.from(new Set(skills)).map((skill) => (
             <span key={skill} className={styles.staticItem}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
