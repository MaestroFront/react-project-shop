import React from "react";
import styles from "./Items.module.scss";
import Item from "../Item/index.tsx";
import { useAppContext } from "./../../useAppContext.tsx";

const Items: React.FC = () => {
    const { currentItems } = useAppContext();

    return (
        <main className={styles.main}>
            <div className={styles.items}>
                {currentItems.map((el: any) => (
                    <Item key={el.id} item={el}></Item>
                ))}
            </div>
        </main>
    );
};

export default Items;
