"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import styles from "./Footer.module.css";

import { SocialMediaItem } from "./SocialMediaItem";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2025 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about_us">About us</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link href="/nasa_collaboration">NASA Collaboration</Link>
          </li>
        </ul>
      </div>

      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}
      {/* TASK - React 1 week 1 */}

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url="https://facebook.com"
            title="Facebook"
            icon="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png"
          />
          <SocialMediaItem
            url="https://instagram.com"
            title="Instagram"
            icon="https://static.vecteezy.com/system/resources/previews/018/930/415/non_2x/instagram-logo-instagram-icon-transparent-free-png.png"
          />
          <SocialMediaItem
            url="https://tiktok.com"
            title="TikTok"
            icon="https://img.freepik.com/premium-vector/tiktok-app-icon-logo-social-media-engagement_1293861-103.jpg"
          />
          <SocialMediaItem
            url="https://linkedin.com"
            title="LinkedIn"
            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
          />
          <SocialMediaItem
            url="https://google.com"
            title="Google"
            icon="https://static-00.iconduck.com/assets.00/google-icon-2048x2026-etldt9h8.png"
          />
          {/* TASK - React 1 week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* it should accept the following props */}
          {/* url, title, icon */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
        </ul>
      </div>
    </footer>
  );
};
