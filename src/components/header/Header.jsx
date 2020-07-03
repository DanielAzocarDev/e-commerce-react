import React from "react";
import { Link } from "react-router-dom";

//ReactComponent lo usamos para importar Logo que es un .svg como un componente normal
import { ReactComponent as Logo } from "../../assets/image/crown.svg";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
