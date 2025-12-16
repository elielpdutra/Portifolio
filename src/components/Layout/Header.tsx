import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Nav */}
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

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
           <nav className={styles.mobileNav}>
             {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
           </nav>
        </div>
      </div>
    </header>
  );
}
