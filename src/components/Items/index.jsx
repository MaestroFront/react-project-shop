import React from "react";
import styles from "./Items.module.scss";
import Item from "./../Item";
import { useAppContext } from "../../useAppContext";

export default function Items() {

    const {items, onShowItem, onAdd} = useAppContext();

    return (
        <main className={styles.main}>
            <div className={styles.items}>
                {items.map((el) => (
                    <Item
                        key={el.id}
                        item={el}
                        onShowItem={onShowItem}
                        onAdd={onAdd}
                    ></Item>
                ))}
            </div>
        </main>
    );
}
