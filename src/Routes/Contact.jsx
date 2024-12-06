import React from "react";
import Form from "../Components/Form";
import { useUserStates } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {
    state: { theme },
  } = useUserStates();
  return (
    <main className={theme}>
      <div className="container_gral">
        <h2>Quieres saber más?</h2>
        <p>Envianos tus consultas y nos pondremos en contacto contigo</p>
        <Form />
      </div>
    </main>
  );
};

export default Contact;
