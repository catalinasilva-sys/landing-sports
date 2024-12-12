'use client';

import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            {/* Logo solo visible cuando el menú está cerrado */}
            <div className={`${styles.logo} ${isMenuOpen ? styles.logoHidden : ''}`}>
                Sports Store
            </div>
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                <li><a href="#catalog" onClick={closeMenu}>Catálogo</a></li>
                <li><a href="#offers" onClick={closeMenu}>Ofertas</a></li>
                <li><a href="#footer" onClick={closeMenu}>Contacto</a></li>
            </ul>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </nav>
    );
}





