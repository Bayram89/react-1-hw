import styles from "./page.module.css";
  // TASK - React 1 week 1
  // Create the "Our Partners section"
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us

export const OurPartners = () => {
  const partnerLogos = [
    "alphabet-logo.png",
    "amazon_logo.png",
    "CBC_Logo_white.png",
    "Microsoft-Logo-white.png",
    "nyu-logo.png",
    "QueensLogo_white.png",
    "samsung-logo.png",
    "sodexo-logo.png",
  ];

return (
    <div className={styles.ourPartnersSection}>
        <p className={styles.partnerIntro}>
            We collaborate with some of the most respected names in the space and
            technology industries to make every journey extraordinary.
        </p>

        <div className={styles.partnerGrid}>
            {partnerLogos.map((logo, index) => (
                <img
                    key={index}
                    src={`/${logo}`}
                    alt={`Partner ${index + 1}`}
                    className={`${styles.partnerLogos} ${styles[`delay${index}`]}`}
                />
            ))}
        </div>
    </div>
);
};
