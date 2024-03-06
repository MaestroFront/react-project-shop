import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className="header">
            <div>
                <span className="logo">Shop Name</span>
            </div>
            <div className="presentation"></div>
        </header>
    );
}
