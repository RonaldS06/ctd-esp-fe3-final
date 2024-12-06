import React from "react";
import { useUserStates } from "../Components/utils/global.context";

const Footer = () => {
  const {
    state: { theme },
  } = useUserStates();
  return (
    <footer className={theme}>
      <p>Hecho por Ronald Santamaria🚀😎</p>
    </footer>
  );
};

export default Footer;
