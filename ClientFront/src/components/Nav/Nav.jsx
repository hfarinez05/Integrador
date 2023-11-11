import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div className={styles.container}>
      <Link to="/home">
        <button className={styles.homeButton}>Home</button>
      </Link>
      <Link to="/about">
        <button className={styles.aboutButton}>About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
