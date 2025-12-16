import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';
import { Mail, Linkedin, Github, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Contact() {
  const { elementRef, isVisible } = useScrollAnimation();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormState('success');
    
    // Reset after showing success
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <section 
      ref={elementRef}
      className={`${styles.contact} ${isVisible ? 'animate-fade-in-up' : ''}`} 
      style={{ opacity: 0 }}
      id="contact"
    >
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
                            <a href="https://github.com/elielporto" target="_blank" className={styles.socialLink} title="GitHub">
                                <Github size={24} />
                            </a>
                            <a href="mailto:contato@elielporto.com" className={styles.socialLink} title="Email">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        {formState === 'success' ? (
                            <div className={styles.successMessage}>
                                <CheckCircle2 size={48} className={styles.successIcon} />
                                <h3>Mensagem enviada!</h3>
                                <p>Obrigado pelo contato. Retornarei em breve.</p>
                            </div>
                        ) : (
                            <>
                                <div className={styles.inputGroup}>
                                    <input type="text" required className={styles.input} placeholder=" " />
                                    <label className={styles.label}>Seu nome</label>
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="email" required className={styles.input} placeholder=" " />
                                    <label className={styles.label}>Seu melhor email</label>
                                </div>
                                <div className={styles.inputGroup}>
                                    <textarea required rows={4} className={styles.textarea} placeholder=" "></textarea>
                                    <label className={styles.label}>Sua mensagem</label>
                                </div>
                                <button type="submit" className={styles.button} disabled={formState === 'submitting'}>
                                    {formState === 'submitting' ? (
                                        <>
                                            <Loader2 size={20} className={styles.spinner} />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar Mensagem
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </>
                        )}
                    </form>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Eliel Porto. Criado com React & TypeScript.</p>
                </div>
            </div>
        </footer>
    </section>
  );
}
