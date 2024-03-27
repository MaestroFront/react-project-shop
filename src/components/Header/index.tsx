import React, { useState } from "react";
import styles from "./Header.module.scss";
import basket from "../../images/basket.svg";
import account from "../../images/acc-logo.svg";
import Orders from "../Orders/index.tsx";
import { useAppContext } from "./../../useAppContext.tsx";

const Header: React.FC = () => {
    const { orders } = useAppContext();

    let [cartOpen, setCartOpen] = useState<Boolean>(false);

    const showOrders = () => {
        let total = 0;

        orders.forEach((elem: any) => (total += +elem.price));

        return (
            <div>
                {orders.map((el: any) => (
                    <Orders key={el.id} item={el} />
                ))}
                <p className={styles.total}>Итого: {total}$</p>
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
                                    setCartOpen(
                                        (prevCartOpen: any) => !prevCartOpen
                                    )
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
                    {orders.length > 0 ? showOrders() : showNothing()}
                </div>
            )}
            <div className={styles.presentation}></div>
        </header>
    );
};

export default Header;
