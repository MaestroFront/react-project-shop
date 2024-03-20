import React from "react";
import styles from "./ShowFullItem.module.scss";

export default function ShowFullItem(props) {
    return (
        <div className={styles.fullItem}>
            <div className={styles.container}>
                <div className={styles.img__container}>
                    <img
                        className={styles.img}
                        src={props.item.img}
                        alt="shoes"
                    />
                    <div className={styles.other__imgs}>
                        <img
                            className={styles.other__img}
                            src={props.item.img2}
                            alt="shoes"
                        ></img>
                        <img
                            className={styles.other__img}
                            src={props.item.img3}
                            alt="shoes"
                        ></img>
                        <img
                            className={styles.other__img}
                            src={props.item.img4}
                            alt="shoes"
                        ></img>
                    </div>
                </div>
                <h2 className={styles.title}>{props.item.title}</h2>
                <p className={styles.description}>{props.item.desc}</p>
                <b className={styles.price}>{props.item.price}$</b>
                <button
                    className={styles.btn__add}
                    onClick={() => props.onAdd(props.item)}
                >
                    +
                </button>
                <button
                    onClick={() => props.onShowItem(props.item)}
                    className={styles.btn__back}
                >
                    back
                </button>
            </div>
        </div>
    );
}
