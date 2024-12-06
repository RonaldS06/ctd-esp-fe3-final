import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../../reducers/reducer";

export const ContextGlobal = createContext();
const docFavs = JSON.parse(localStorage.getItem("favs")) || [];
const theme = localStorage.getItem("theme") || "light";

const initialState = {
  users: [],
  favs: docFavs,
  theme,
};

const ContextProvider = ({ children }) => {
  //!Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  const API = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  useEffect(() => {
    const traerTema = localStorage.getItem("theme");
    if (traerTema) {
      dispatch({ type: "TOGGLE_THEME", payload: traerTema });
    }
  }, []);

  useEffect(() => {
    axios.get(API).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_USERS", payload: res.data });
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useUserStates = () => useContext(ContextGlobal);
