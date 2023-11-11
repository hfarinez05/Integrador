import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const location = useLocation();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const userName = "hfarinez@soyhenry.com";
  const password = "Soyhenry05";

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
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

  const login = (userData) => {
    if (userData.userName === userName && userData.password === password)
      setAccess(true);
    navigate("/home");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <hr />
      <Routes>
        <Route path="/" element={<Form login={login} />} />
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
