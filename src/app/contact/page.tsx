import styles from './contact.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';



export default function Contact() {
  return (
    <div className={styles.container}>
        <Navbar/>
      {/* Header Section */}
      <section className={styles.header}>
        <h1>Contact Us</h1>
        <p>We're here to help you plan your next adventure. Reach out to us!</p>
      </section>

      {/* Contact Form Section */}
      <section className={styles.formSection}>
        <h2>Get In Touch</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4"required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> info@the-TRAVELERS.com</p>
        <p><strong>Address:</strong> 123 Adventure Lane, Istanbul, Turkey</p>
      </section>
      <Footer/>
    </div>
  );
}
