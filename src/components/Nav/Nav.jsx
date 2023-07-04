import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "../Nav/Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div className={styles.container}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
