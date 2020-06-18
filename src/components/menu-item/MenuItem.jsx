import React from "react";
// withRouter es un HOC que nos ayuda a pasar las props de router al componente 
import { withRouter } from 'react-router-dom'

import "./MenuItem.scss";

// Paso
const MenuItem = ({ title, image, size, history, match }) => {
  return (
    // Aca creamos el url de manera dinamica haciendo un push a history
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${title}`)}>
      <div className="background-image" style={{ background: `url(${image})` }} />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// Esta es la forma en la que usamos witthRouter para pasar los props a MenuItem
export default withRouter(MenuItem);
