import styles from './about.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';

export default function About() {
  return (
    <div className={styles.container}>
        <Navbar/>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>Your adventure starts here. Explore the world with us!</p>
      </section>

      {/* Agency Information Section */}
      <section className={styles.infoSection}>
        <h2>Who We Are</h2>
        <p>
          Founded with a passion for travel and a commitment to excellence, our agency provides memorable travel experiences
          tailored to every explorer. We are a team of dedicated travel experts who believe in the transformative power of
          exploring the world.
        </p>
      </section>

      {/* Mission Statement */}
      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          To create unforgettable journeys that inspire, educate, and enrich the lives of our travelers. We focus on sustainable
          travel and strive to connect our clients with the world in meaningful ways.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>What Our Travelers Say</h2>
        <div className={styles.testimonialCard}>
          <p>"Our trip was beyond incredible! Everything was organized perfectly, and we had the time of our lives!"</p>
          <span>— Sarah J.</span>
        </div>
        <div className={styles.testimonialCard}>
          <p>"An unforgettable journey. The guides were amazing, and the itinerary was fantastic!"</p>
          <span>— Michael R.</span>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.contactSection}>
        <h2>Ready to Start Your Adventure?</h2>
        <p>Contact us today and let us plan the journey of your dreams.</p>
        <button className={styles.contactButton}>Contact Us</button>
      </section>
      <Footer/>
    </div>
  );
}
