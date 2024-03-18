import React from "react";
import styles from "./Categories.module.scss";

export default function Categories(props) {
    const categories = [
        {
            key: "all",
            name: "All",
        },
        {
            key: "street",
            name: "Street",
        },
        {
            key: "sport",
            name: "Sport",
        },
        {
            key: "party",
            name: "Party",
        },
    ];

    return (
        <div className={styles.categories}>
            {categories.map((item) => (
                <button
                    className={styles.btnSort}
                    key={item.key}
                    onClick={() => props.chooseCategory(item.key)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}
