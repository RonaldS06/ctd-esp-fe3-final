import React from "react";
import Card from "../Components/Card";

import { useUserStates } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {
    state: { favs, theme },
  } = useUserStates();

  return (
    <main className={theme}>
      <div className="container_gral">
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
          {favs.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Favs;
