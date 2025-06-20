"use client";

import Link from "next/link";

import styles from "./Navbar.module.css";

export const NavItem = ({ title, link, isActive, index }) => {
const itemClass = isActive ? styles.isLinkActive : styles.navbarLinks;

return (
    <li className={itemClass}>
        <Link href={link}>
        <b>0{index}</b> {title}
        </Link>
    </li>
);
}