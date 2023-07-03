import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <Card
          name={character.name}
          gender={character.gender}
          species={character.species}
          image={character.image}
          // { ... character}
          onClose={() => window.alert("Emulamos que se cierra la card")}
          key={character.name}
        />
      ))}
    </div>
  );
}
