import React from "react";
import styles from "./Items.module.scss";
import Item from "./../Item";

export default function Items(props) {
    return (
        <main className={styles.main}>
            <div className={styles.items}>
                {props.allItems.map((el) => (
                    <Item key={el.id} item={el} onAdd={props.onAdd}></Item>
                ))}
            </div>
        </main>
    );
}
