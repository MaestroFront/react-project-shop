import React from "react";
import styles from "./ShowFullItem.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";

const ShowFullItem: React.FC = () => {
    const { fullItem, onShowItem, addToOrder } = useAppContext();

    return (
        <div className={styles.fullItem}>
            <div className={styles.container}>
                <div className={styles.img__container}>
                    <img
                        className={styles.img}
                        src={fullItem.img}
                        alt="shoes"
                    />
                    <div className={styles.other__imgs}>
                        <img
                            className={styles.other__img}
                            src={fullItem.img2}
                            alt="shoes"
                        ></img>
                        <img
                            className={styles.other__img}
                            src={fullItem.img3}
                            alt="shoes"
                        ></img>
                        <img
                            className={styles.other__img}
                            src={fullItem.img4}
                            alt="shoes"
                        ></img>
                    </div>
                </div>
                <h2 className={styles.title}>{fullItem.title}</h2>
                <p className={styles.description}>{fullItem.desc}</p>
                <b className={styles.price}>{fullItem.price}$</b>
                <button
                    className={styles.btn__add}
                    onClick={() => addToOrder(fullItem)}
                >
                    +
                </button>
                <button
                    onClick={() => onShowItem(fullItem)}
                    className={styles.btn__back}
                >
                    back
                </button>
            </div>
        </div>
    );
};

export default ShowFullItem;
