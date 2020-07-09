import React from "react";
import NavBar from "./NavBar";
function Header() {
  return (
    <header className="app-header">
      <div className="app-header__container">
        <div className="logo">HowAmDoing?</div>
        <NavBar></NavBar>
      </div>
    </header>
  );
}

export default Header;
