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
                        onClick={() => props.onShowItem(props.item)}
                    />
                </div>
                <h2 className={styles.title}>{props.item.title}</h2>
                {/* <p className={styles.description}>{props.item.desc}</p> */}
                <b className={styles.price}>{props.item.price}$</b>
                <button
                    className={styles.btn__add}
                    onClick={() => props.onAdd(props.item)}
                >
                    +
                </button>
            </div>
        </div>
    );
}
