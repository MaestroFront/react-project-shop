/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect, createContext, useContext } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import "./index.scss";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import { useAppContext } from "./useAppContext";

const AppContext = createContext();

export default function App() {
    const { showFullItem } = useAppContext();
    return (
        <div className="wrapper">
            <Header />
            <Categories />
            <Items />
            {showFullItem && <ShowFullItem />}
            <Footer />
        </div>
    );
}
