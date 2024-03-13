import React from "react";
import styles from "./Item.module.scss";

export default function Item(props) {
    return (
        <div className={styles.item}>
            <div className={styles.img__container}>
                <img className={styles.img} src={props.item.img} alt="shoes" />
            </div>
            <h2 className={styles.title}>{props.item.title}</h2>
            {/* <p className={styles.description}>{props.item.desc}</p> */}
            <b className={styles.price}>{props.item.price}$</b>
            <button
                className={styles.btn__add}
                onClick={() => props.onAdd(props.item)}
            >
                Add
            </button>
        </div>
    );
}
