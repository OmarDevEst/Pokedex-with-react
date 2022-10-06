import "../scss/NavBar.scss";
import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="NavBar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon"
        />
        <Link to="/" className="tipouno">
          <h1>Presentacion</h1>
        </Link>
        <Link to="/Kanto" className="tipouno">
          <h1>Kanto</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
