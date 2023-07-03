import styles from "../Card/Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <div className={styles.buttoncontainer}>
        <button onClick={props.onClose} className={styles.buttonX}>
          X
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img src={props.image} alt="" />
        <h2 className={styles.name}>{props.name}</h2>
      </div>
      <div className={styles.propsContainer}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}
