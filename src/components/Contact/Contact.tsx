import styles from './Contact.module.css';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section className={styles.contact} id="contact">
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Vamos trabalhar <span className={styles.highlight}>juntos?</span></h2>
                        <p className={styles.description}>
                            Estou sempre aberto a novos desafios e oportunidades. 
                            Envie uma mensagem e vamos criar algo incrível.
                        </p>
                        
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} title="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className={styles.socialLink} title="GitHub">
                                <Github size={24} />
                            </a>
                            <a href="mailto:contato@elielporto.com" className={styles.socialLink} title="Email">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Seu nome" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Seu email" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <textarea placeholder="Sua mensagem" rows={4} className={styles.textarea}></textarea>
                        </div>
                        <button type="submit" className={styles.button}>Enviar Mensagem</button>
                    </form>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Eliel Porto. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    </section>
  );
}
