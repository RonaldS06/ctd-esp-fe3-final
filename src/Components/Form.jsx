import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    nombre: "",
    correo: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexNum = /[0-9]/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      user.nombre.trim().length >= 3 &&
      !regexNum.test(user.nombre) &&
      regexEmail.test(user.correo)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Completo: <span>*</span>
        </label>
        <input
          name="nombre"
          value={user.nombre}
          onChange={handleChange}
          type="text"
        />

        <label>
          Correo eléctronico: <span>*</span>
        </label>
        <input
          name="correo"
          value={user.correo}
          onChange={handleChange}
          type="text"
        />

        <button>Enviar</button>

        {show && (
          <p className="success">
            Gracias {user.nombre}, pronto te contactaremos.
          </p>
        )}
        {error && (
          <p className="error">
            Por favor, verifique su información nuevamente.
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
