import styles from './tour.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';

export default function Tour() {
  return (
    
    <div className={styles.container}>
      <Navbar/>
      <h1>Discover the Magic of Turkey: A Journey Through Timeless Beauty and Culture</h1>
      <img src="/tour1.jpg" alt="tour" className={styles.heroImage} />

      <section className={styles.section}>
        <h2>Istanbul: Where East Meets West</h2>
        <p>
          No trip to Turkey would be complete without visiting Istanbul, the country s largest city and cultural heart...
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cappadocia: A Land of Fairy Chimneys</h2>
        <p>
          Cappadocia is like stepping into another world. Known for its unique rock formations called “fairy chimneys”...
        </p>
      </section>

      <section className={styles.section}>
        <h2>Pamukkale: The Cotton Castle</h2>
        <p>
          Pamukkale, which translates to “Cotton Castle” in Turkish, is a natural wonder known for its white travertine terraces...
        </p>
      </section>

      <section className={styles.section}>
        <h2>Ephesus: A Step Back in Time</h2>
        <p>
          Ephesus is one of the best-preserved ancient cities in the world and a highlight of any trip to Turkey...
        </p>
      </section>

      <section className={styles.section}>
        <h2>Antalya: The Turquoise Coast</h2>
        <p>
          For those seeking sun, sea, and relaxation, Antalya on Turkey s Mediterranean coast is the perfect destination...
        </p>
      </section>

      <section className={styles.section}>
        <h2>Turkish Cuisine: A Culinary Adventure</h2>
        <p>
          Turkey is diverse geography and rich cultural history are reflected in its cuisine, which is a fusion of Mediterranean...
        </p>
      </section>

      <section className={styles.section}>
        <h2>Tips for Traveling in Turkey</h2>
        <ul>
          <li><strong>Best Time to Visit:</strong> Spring (April to June) and autumn (September to November)...</li>
          <li><strong>Currency:</strong> The Turkish lira (TRY) is the official currency...</li>
          <li><strong>Language:</strong> Turkish is the official language, but English is commonly spoken...</li>
          <li><strong>Dress Code:</strong> Turkey is a predominantly Muslim country...</li>
        </ul>
      </section>

      {/* Optional link to book a tour or for more details */}
      <section className={styles.ctaSection}>
        <h3>Ready to Explore Turkey?</h3>
        <Link href="/booking">
          <button className={styles.bookNow}>Book Your Tour Now</button>
        </Link>
      </section>
      <Footer/>

    </div>
  );
}
