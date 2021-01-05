import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../logo.png";
import "./Navbar.scss";
const Navbar = ({ setIsOpen, isOpen }) => {
  console.log(isOpen);

  return (
    <div className="nav">
      <div className="nav-logo">
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <FaBars fontSize={32} className="bars" onClick={() => setIsOpen(true)} />
      <div className="nav-menu">
        <a href="#about" activeStyle>
          A Propos
        </a>
        <a href="#offers" activeStyle>
          Nos Offres
        </a>
        <a href="#contact" activeStyle>
          Contactez-Nous
        </a>
        <a href="#questions" activeStyle>
          Questions ?
        </a>
        <div className="navbtn-link">
          <a href="#sign-in">Télécharger l'app</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
