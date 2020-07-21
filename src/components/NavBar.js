import React from "react";
import { useConfigModal } from "../contexts/ModalsContext";

function Header() {
  const { setConfigModal } = useConfigModal();
  const handleClick = (e) => {
    e.preventDefault();
    setConfigModal(true);
  };
  return (
    <nav className="navbar">
      <a
        onClick={handleClick}
        className="link--navbar"
        aria-label="settings"
        href="/"
      >
        Configuración
      </a>
    </nav>
  );
}

export default Header;
