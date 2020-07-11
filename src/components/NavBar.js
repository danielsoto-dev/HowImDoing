import React from "react";
function Header() {
  return (
    <nav className="navbar">
      <a className="link--navbar" aria-label="profile" href="/">
        Materias
      </a>
      <a className="link--navbar" aria-label="settings" href="/">
        Configuración
      </a>
    </nav>
  );
}

export default Header;
