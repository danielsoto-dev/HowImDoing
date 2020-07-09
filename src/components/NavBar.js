import React from "react";
function Header() {
  return (
    <nav className="navbar">
      <a className="link--navbar" aria-label="profile" href="/">
        Profile
      </a>
      <a className="link--navbar" aria-label="settings" href="/">
        Settings
      </a>
    </nav>
  );
}

export default Header;
