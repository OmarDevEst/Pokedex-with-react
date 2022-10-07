import "../scss/NavBar.scss";
import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="NavBar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon"
        />
        <Link to="/" className="PresentacionNav">
          <h1>Home</h1>
        </Link>
        <Link to="/Kanto" className="KantoNav">
          <h1>Kanto</h1>
        </Link>
        <Link to="/Johto" className="Johto">
          <h1>Johto</h1>
        </Link>
        <Link to="/Hoenn" className="Hoenn">
          <h1>Hoenn</h1>
        </Link>
        <Link to="/Sinnoh" className="Sinnoh">
          <h1>Sinnoh</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
