"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">the-TRAVELERS</Link>
      </div>

      {/* Desktop Menu */}
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/tour">Tour</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
      
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Hamburger Button for Mobile */}
      <div className={styles.hamburgerButton} onClick={toggleMobileMenu}>
        <span className={styles.hamburgerIcon}></span>
      </div>
    </nav>
  );
}
