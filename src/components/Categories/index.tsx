import React from "react";
import styles from "./Categories.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";

interface Category {
    key: String;
    name: String;
}

const Categories: React.FC = () => {
    const { chooseCategory } = useAppContext();

    const categories: Category[] = [
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
                    key={item.key as React.Key | null | undefined}
                    onClick={() => chooseCategory(item.key)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
};

export default Categories;
