import React from "react";
import NavBar from "./NavBar";
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">HowI'mDoing?</div>
        <NavBar></NavBar>
      </div>
    </header>
  );
}

export default Header;
