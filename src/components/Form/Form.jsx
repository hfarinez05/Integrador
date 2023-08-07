import { useEffect, useState } from "react";
import { Validate } from "./Validate";
import styles from "../Form/Form.module.css";

export default function Form(props) {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      Validate({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <img
        src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/05/rick-morty-temporada-4-llegara-noviembre.jpg?tf=3840x"
        alt=""
      />
      <br />
      {errors.userName ? (
        <p style={{ color: "red" }}>{errors.userName}</p>
      ) : null}
      <label htmlFor="">Username: </label>
      <input
        className={styles.formulario}
        type="text"
        value={userData.userName}
        name="userName"
        placeholder="Ingrese su email"
        onChange={handleChange}
      />
      {errors.password ? (
        <p style={{ color: "red" }}>{errors.password}</p>
      ) : null}
      <label htmlFor="">Password: </label>
      <input
        className={styles.formulario}
        type="password"
        value={userData.password}
        name="password"
        placeholder="Ingrese su password"
        onChange={handleChange}
      />
      <br />
      <button type="submit" className={styles.buttonlogin}>
        Login
      </button>
    </form>
  );
}
