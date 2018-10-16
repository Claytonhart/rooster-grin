import React from "react";
import igniterLogo from "../assets/igniter-logo-white.svg";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <img className="header__logo" src={igniterLogo} alt="igniter logo" />
      </nav>
    </header>
  );
};

export default Header;
