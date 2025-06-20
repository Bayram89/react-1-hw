import styles from "./page.module.css";

// TASK - React 1 week 1
// Create the "Our Values" section
// Use the descriptions provided in /app/about_us/README.md
// Some inspiration ideas found in /data/inspiration_about_us

export const OurValues = () => {
  return (
    <div className={styles.ourValuesSection}>
      <div className={styles.valueBox}>
        <h3>Exploration</h3>
        <p>
          We are driven by a deep-seated desire to explore the unknown. We
          believe that the pursuit of discovery is at the heart of human nature,
          and we are committed to pushing the boundaries of what is possible.
        </p>
      </div>
      <div className={styles.valueBox}>
        <h3>Innovation</h3>
        <p>
          At Galactica, we prioritize cutting-edge technology and innovation. We
          are constantly evolving our spacecraft, safety protocols, and services
          to ensure that our travelers experience the most advanced and secure
          space journeys available.
        </p>
      </div>
      <div className={styles.valueBox}>
        <h3>Sustainability</h3>
        <p>
          We are committed to making space exploration sustainable for future
          generations. Our space missions are designed to minimize environmental
          impact, both on Earth and in space, and to foster a spirit of
          responsibility towards our universe.
        </p>
      </div>
      <div className={styles.valueBox}>
        <h3>Community</h3>
        <p>
          We believe in the power of collective exploration. Our journeys are
          not just about reaching new destinations; they are about building a
          community of space enthusiasts who share a passion for the stars.
        </p>
        <div className={styles.ourValuesImageContainer}>
          <img
            className={styles.ourValuesImage}
            src="/our_values.png"
            alt="Our values and ideas"
          />
        </div>
      </div>
    </div>
  );
};
