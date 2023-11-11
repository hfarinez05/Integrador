import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <Card
          id={character.id}
          name={character.name}
          gender={character.gender}
          species={character.species}
          image={character.image}
          // { ... character}
          onClose={props.onClose}
          key={character.id}
        />
      ))}
    </div>
  );
}
