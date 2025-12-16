import styles from './Header.module.css';

export function Header() {
  const navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <a href="#" className={styles.logo}>
          Eliel Porto<span style={{ color: 'var(--primary-color)' }}>.</span>
        </a>

        <nav className={styles.naviagtion}>
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={styles.navLink}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
