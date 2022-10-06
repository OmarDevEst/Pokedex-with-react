import React from "react";
import NavBar from "./NavBar";
import "../scss/Presentacion.scss";
import Perfil from "../image/fotoperfil.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Presentacion = () => {
  return (
    <main>
      <NavBar className="NavBar"></NavBar>
      <div className="MaxCon">
        <div className="RedCon">
          <div className="Foto">
            <div className="WhiteCon">
              <img src={Perfil} alt="Kanto"></img>
            </div>
          </div>
          <div>
            <h1>Datos</h1>
            <div>{/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Presentacion;
