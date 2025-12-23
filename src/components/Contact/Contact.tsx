import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';
import styles from './Contact.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SOCIAL_LINKS } from '../../constants';

export function Contact() {
  const { elementRef, isVisible } = useScrollAnimation();
  const [state, handleSubmit, reset] = useForm("xovgzbel");

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset();
      }, 5000); // Reseta após 5 segundos

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  if (state.succeeded) {
      return (
        <section 
          ref={elementRef}
          className={`${styles.contact} ${isVisible ? 'animate-fade-in-up' : ''}`} 
          id="contact"
        >
          <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>VAMOS CONVERSAR</h2>
                <div className={styles.successWrapper}>
                    <p className={styles.successMessage} style={{ fontSize: '1.5rem', marginTop: '2rem' }}>
                        Obrigado! Sua mensagem foi enviada.
                    </p>
                    <p className={styles.subtitle} style={{ marginTop: '1rem' }}>
                        O formulário voltará em instantes...
                    </p>
                    <button 
                        onClick={() => reset()} 
                        className={styles.button} 
                        style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                    >
                        ENVIAR OUTRA AGORA
                    </button>
                </div>
            </div>
          </div>
        </section>
      );
  }

  return (
    <section 
      ref={elementRef}
      className={`${styles.contact} ${isVisible ? 'animate-fade-in-up' : ''}`} 
      style={{ opacity: 0 }}
      id="contact"
    >
      <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>VAMOS CONVERSAR</h2>
            <p className={styles.subtitle}>
                Tem um projeto em mente? Vamos transformar sua ideia em realidade.
            </p>
        </div>

        <div className={styles.content}>
            <div className={styles.links}>
                <a href={SOCIAL_LINKS.EMAIL} className={styles.linkItem}>
                    elielpdutra.dev@gmail.com
                    <span className={styles.arrow}>→</span>
                </a>
                <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                    LINKEDIN
                    <span className={styles.arrow}>→</span>
                </a>
                <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                    GITHUB
                    <span className={styles.arrow}>→</span>
                </a>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <input 
                        id="name"
                        type="text" 
                        name="name" 
                        required 
                        className={styles.input} 
                        placeholder="NOME" 
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.errorMessage} />
                </div>
                <div className={styles.inputGroup}>
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        required 
                        className={styles.input} 
                        placeholder="EMAIL" 
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.errorMessage} />
                </div>
                <div className={styles.inputGroup}>
                    <textarea 
                        id="message"
                        name="message" 
                        required 
                        rows={1} 
                        className={styles.textarea} 
                        placeholder="MENSAGEM"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.errorMessage} />
                </div>
                
                <button type="submit" className={styles.button} disabled={state.submitting}>
                    {state.submitting ? 'ENVIANDO...' : 'ENVIAR PROPOSTA'}
                </button>

                {state.errors && (
                    <p className={styles.errorMessage}>Ocorreu um erro. Verifique os campos.</p>
                )}
            </form>
        </div>

        <div className={styles.footer}>
            <p>© {new Date().getFullYear()} ELIEL PORTO. </p>
        </div>
      </div>
    </section>
  );
}
