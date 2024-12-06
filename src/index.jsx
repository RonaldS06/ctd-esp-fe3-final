import "./index.css";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import ContextProvider from "./Components/utils/global.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/detalle/:id" element={<Detail />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/favoritos" element={<Favs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
