import React, { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }

  return (
    // props = { onSearch : function() }
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Escriba un número de ID"
        value={id}
        onChange={handleChange}
      />
      <button className={styles.buttonSearch} onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
