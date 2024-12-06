import React from "react";
import { useUserStates } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  const { dispatch, state } = useUserStates();

  const findFav = state.favs.some((fav) => fav.id === user.id);

  const addFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: user });
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={`/detalle/${user.id}`}>
        <img src="./images/doctor.jpg" alt="" width={150} />
        <div className="dateUser">
          <h3>{user.name}</h3>
          <h4>{user.username}</h4>
        </div>
      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        onClick={addFav}
        className={`favButton ${findFav ? "favDelete" : "favAdd"}`}
      >
        {!findFav ? "Añadir a favoritos" : "Eliminar de favoritos"}
      </button>
    </div>
  );
};
export default Card;
