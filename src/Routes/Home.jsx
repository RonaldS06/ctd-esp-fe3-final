import React from "react";
import Card from "../Components/Card";

import { useUserStates } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {
    state: { users, theme },
  } = useUserStates();
  return (
    <main className={theme}>
      <div className="container_gral">
        <h1>Home</h1>
        <div className="card-grid">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
