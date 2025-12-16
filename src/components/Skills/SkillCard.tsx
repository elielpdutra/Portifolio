import { useRef } from 'react';
import styles from './Skills.module.css';
import { useMouseMove } from '../../hooks/useMouseMove';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  techs: string[];
}

export function SkillCard({ icon, title, description, techs }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  useMouseMove(cardRef);

  return (
    <div ref={cardRef} className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.skillTitle}>{title}</h3>
      <p className={styles.skillDesc}>{description}</p>
      
      <div className={styles.techList}>
        {techs.map(tech => (
          <span key={tech} className={styles.techTag}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
