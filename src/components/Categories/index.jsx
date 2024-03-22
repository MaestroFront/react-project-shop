import styles from "./Categories.module.scss";
import { useAppContext } from "../../useAppContext";

export default function Categories() {
    const { chooseCategory } = useAppContext();

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
                    onClick={() => chooseCategory(item.key)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}
