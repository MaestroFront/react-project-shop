import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className="header">
            <div>
                <nav>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>Main</li>
                        <li className={styles.menu__item}>About</li>
                        <li className={styles.menu__item}>Contacts</li>
                        <li className={styles.menu__item}>Account</li>
                    </ul>
                </nav>
                <span className={styles.logo}>Maestro's shop</span>
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
}
