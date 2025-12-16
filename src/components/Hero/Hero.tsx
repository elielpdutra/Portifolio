import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.greeting}>Olá, eu sou</span>
          <h1 className={styles.title}>
            Desenvolvedor <br />
            <span className={styles.highlight}>Fullstack</span>
          </h1>
          <p className={styles.description}>
            Transformo ideias complexas em experiências digitais memoráveis. 
            Especialista em construir aplicações web modernas, performáticas e escaláveis.
          </p>
          
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              Ver Projetos
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Entrar em contato
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          {/* Placeholder for user image or 3D element */}
          <div className={styles.profileImage}>
            🚀
          </div>
        </div>
      </div>
    </section>
  );
}
