import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useUserStates } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {
    state: { theme },
    dispatch,
  } = useUserStates();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={theme}>
      <div className="nav_container">
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <img src="./images/Hospital-DH.svg" alt="Logo DH odonto" />

        <div className="menu_nav">
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/favoritos">Favoritos</Link>
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <button className="btn_theme" onClick={toggleTheme}>
            {theme === "dark" ? <FaMoon /> : <FaRegMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
