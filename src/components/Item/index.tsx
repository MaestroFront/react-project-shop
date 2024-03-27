import React from "react";
import styles from "./Item.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";

interface Props {
    item: any;
}

const Item: React.FC<Props> = ({ item }) => {
    const { onShowItem, addToOrder } = useAppContext();

    return (
        <div className={styles.item}>
            <div className={styles.img__container}>
                <img
                    className={styles.img}
                    src={item.img}
                    alt="shoes"
                    onClick={() => onShowItem(item)}
                />
            </div>
            <h2 className={styles.title}>{item.title}</h2>
            <b className={styles.price}>{item.price}$</b>
            <button
                className={styles.btn__add}
                onClick={() => addToOrder(item)}
            >
                +
            </button>
        </div>
    );
};

export default Item;
