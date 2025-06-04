// TASK - React 1 week 1
// Create the "Our Crew section"
// Use the descriptions provided in /app/about_us/README.md
// Use the pictures from /public/crew

import styles from "./page.module.css";

export const OurCrew = () => {
  return (
    <div className={styles.ourCrewSection}>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>

      <div className={styles.crewMember}>
        <h3>Captain Sarah Vega</h3>
        <p>
          A former NASA astronaut with over 15 years of experience, Captain Vega
          leads our missions with unparalleled expertise and a passion for space
          exploration.
        </p>
      </div>

      <div className={styles.crewMember}>
        <h3>Dr. Leo Redding</h3>
        <p>
          Our chief astrophysicist, Dr. Redding, is a renowned scientist who has
          contributed to major space discoveries. He ensures that every journey
          is as educational as it is exhilarating.
        </p>
      </div>

      <div className={styles.crewMember}>
        <h3>Chief Engineer Hana Lee</h3>
        <p>
          With her extensive background in aerospace engineering, Hana Lee is
          responsible for the state-of-the-art technology that powers our
          spacecraft. Her innovation ensures that our travelers are always in
          safe hands.
        </p>
      </div>

      <div className={styles.crewMember}>
        <h3>Mission Specialist Alex Santos</h3>
        <p>
          As a mission specialist, Alex’s job is to ensure that every aspect of
          the journey runs smoothly. With a background in both science and
          adventure tourism, Alex is the perfect guide for our space travelers.
        </p>
      </div>

      <div className={styles.crewMember}>
        <h3>Crew Member Maya Patel</h3>
        <p>
          Maya brings a unique blend of technical skills and customer service
          experience to the team. She’s always ready to assist with any needs
          and to make sure every traveler has an unforgettable experience.
        </p>
        <div className={styles.ourTeamImageContainer}>
          <img
            className={styles.ourTeamImage}
            src="/our_team.png"
            alt="Our Crew and Team"
          />
        </div>
      </div>
    </div>
  );
};
