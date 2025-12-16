import styles from './Skills.module.css';
import { Code2, Database, Layout, Smartphone, Server, Wrench } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: <Layout size={24} />,
      title: 'Frontend Development',
      description: 'Criação de interfaces responsivas e interativas com foco na experiência do usuário.',
      techs: ['React', 'TypeScript', 'Tailwind', 'Next.js']
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Desenvolvimento de APIs robustas e performáticas.',
      techs: ['Node.js', 'Express', 'NestJS', 'Python']
    },
    {
      icon: <Database size={24} />,
      title: 'Database',
      description: 'Modelagem e otimização de bancos de dados.',
      techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma']
    },
    {
      icon: <Code2 size={24} />,
      title: 'Clean Code',
      description: 'Código limpo, testável e seguindo os princípios SOLID.',
      techs: ['Jest', 'Cypress', 'Design Patterns']
    },
     {
      icon: <Smartphone size={24} />,
      title: 'Mobile',
      description: 'Desenvolvimento de aplicações móveis multiplataforma.',
      techs: ['React Native', 'Expo']
    },
    {
      icon: <Wrench size={24} />,
      title: 'DevOps & Tools',
      description: 'Configuração de ambiente e CI/CD.',
      techs: ['Docker', 'Git', 'AWS', 'Vercel']
    }
  ];

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Minhas <span className={styles.highlight}>Habilidades</span>
        </h2>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {skill.icon}
              </div>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <p className={styles.skillDesc}>{skill.description}</p>
              
              <div className={styles.techList}>
                {skill.techs.map(tech => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
