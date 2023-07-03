import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar(props) {
  return (
    // props = { onSearch : function() }
    <div className={styles.container}>
      <input type="search" />
      <button
        className={styles.buttonSearch}
        onClick={() => props.onSearch("Esto seria el ID de un personaje")}
      >
        Agregar
      </button>
    </div>
  );
}
