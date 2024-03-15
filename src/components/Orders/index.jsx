import React from "react";
import styles from "./Orders.module.scss";
import deleteIcon from "../../images/delete.svg";

export default function Orders(props) {
    return (
        <div className={styles.item}>
            <div className={styles.container}>
                <div className={styles.img__container}>
                    <img
                        className={styles.img}
                        src={props.item.img}
                        alt="shoes"
                    />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>{props.item.title}</h2>
                    {/* <p className={styles.description}>{props.item.desc}</p> */}
                    <b className={styles.price}>{props.item.price}$</b>
                </div>
            </div>
            <div className={styles.deleteContainer}>
                <img
                    onClick={() => props.onDelete(props.item.id)}
                    className={styles.deleteIcon}
                    src={deleteIcon}
                    alt="delete"
                ></img>
            </div>
        </div>
    );
}
