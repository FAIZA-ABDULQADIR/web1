import styles from './hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>WELCOME TO TURKEY</h1>
        <button className={styles.bookNow}>Book Now</button>
      </div>
    </section>
  );
}