import React, { useState } from "react";
import styles from "./Header.module.scss";
import basket from "../../images/basket.svg";
import account from "../../images/acc-logo.svg";
import Orders from "../Orders";
import { useAppContext } from "../../useAppContext";

export default function Header() {

    const { orders, onDelete } = useAppContext();

    let [cartOpen, setCartOpen] = useState(false);

    const showOrders = () => {
        let total = 0;

        orders.forEach(
            (elem) => (total += +elem.price)
        );

        return (
            <div>
                {orders.map((el) => (
                    <Orders onDelete={onDelete} key={el.id} item={el} />
                ))}
                <p className={styles.total}>
                    Итого: {total}$
                </p>
            </div>
        );
    };

    const showNothing = () => {
        return (
            <div className={styles.empty}>
                <h2>Корзина пустая</h2>
            </div>
        );
    };

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
                    {orders.length > 0
                        ? showOrders()
                        : showNothing()}
                </div>
            )}
            <div className={styles.presentation}></div>
        </header>
    );
}
