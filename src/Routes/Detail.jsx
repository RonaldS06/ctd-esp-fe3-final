import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [user, setUser] = useState({});
  const params = useParams();
  console.log(params);
  const API = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(API).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, []);

  return (
    <main>
      <div className="container_gral">
        <h1>Dentista id</h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}

        <table>
          <tr>
            <td>Nombre</td>
            <td>Correo</td>
            <td>Telefono</td>
            <td>Sitio Web</td>
          </tr>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
          </tr>
        </table>

        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </main>
  );
};

export default Detail;
