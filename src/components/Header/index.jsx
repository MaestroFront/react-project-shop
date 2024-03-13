import React, { useState } from "react";
import styles from "./Header.module.scss";
import basket from "../../images/basket.svg";
import account from "../../images/acc-logo.svg";

export default function Header() {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header className="header">
            <div>
                <nav>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>Main</li>
                        <li className={styles.menu__item}>About</li>
                        <li className={styles.menu__item}>Contacts</li>
                        <li className={styles.menu__item}>
                            <img
                                className={styles.account}
                                src={account}
                                alt="account"
                            ></img>
                        </li>
                        <li className={styles.menu__item}>
                            <img
                                src={basket}
                                alt="basket"
                                onClick={() =>
                                    setCartOpen((cartOpen = !cartOpen)) 
                                }
                                className={`${styles.basket} ${
                                    cartOpen ? styles.active : ""
                                }`}
                            ></img>
                        </li>
                    </ul>
                </nav>
                <span className={styles.logo}>Maestro's shop</span>
            </div>
            {cartOpen && (
                <div className={styles.shopCart}>
                    
                </div>
            )}
            <div className={styles.presentation}></div>
        </header>
    );
}
