import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          let existe = characters.find((e) => e.id === data.id);
          if (existe) {
            alert("Este ID ya se muestra en pantalla");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        }

        //window.alert("No hay personajes con ese ID");
      })
      .catch((error) => window.alert(error.response.data.error));
  }

  function onClose(id) {
    const newCharacters = characters.filter(
      (characters) => characters.id !== Number(id)
    );

    setCharacters(newCharacters);
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <hr />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
