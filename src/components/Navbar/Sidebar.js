import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Sidebar.scss";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const onPressLink = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="sidebar-container"
      style={{ opacity: isOpen ? "100%" : "0", top: isOpen ? "0" : "-100%" }}
    >
      <div className="icons">
        <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
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
        </div>
        <div className="sidebtn-wrapper">
          <a href="#sign-in" onClick={onPressLink}>
            Télécharger l'app
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
