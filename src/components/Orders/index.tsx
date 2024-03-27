import React from "react";
import styles from "./Orders.module.scss";
import deleteIcon from "../../images/delete.svg";
import { useAppContext } from "./../../useAppContext.tsx";

interface Props {
    item: any;
}

const Orders: React.FC<Props> = ({ item }) => {
    const { deleteOrder } = useAppContext();

    return (
        <div className={styles.item}>
            <div className={styles.container}>
                <div className={styles.img__container}>
                    <img className={styles.img} src={item.img} alt="shoes" />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <b className={styles.price}>{item.price}$</b>
                </div>
            </div>
            <div className={styles.deleteContainer}>
                <img
                    onClick={() => deleteOrder(item.id)}
                    className={styles.deleteIcon}
                    src={deleteIcon}
                    alt="delete"
                ></img>
            </div>
        </div>
    );
};

export default Orders;
