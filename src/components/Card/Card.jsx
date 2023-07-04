import styles from "../Card/Card.module.css";

export default function Card({ name, species, gender, image, id, onClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.buttoncontainer}>
        <button onClick={() => onClose(id)} className={styles.buttonX}>
          X
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />
        <h2 className={styles.name}>{name}</h2>
      </div>
      <div className={styles.propsContainer}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}
