import React from "react";
import NavBar from "./NavBar";
import "../scss/Presentacion.scss";
import Perfil from "../image/white-fotoperfil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Presentacion = () => {
  const Twitter = "https://twitter.com/OmarReverse";
  const Github = "https://github.com/OmarDevEst?tab=repositories";
  const Instagram = "//www.instagram.com/coding_with_omar/";
  return (
    <main className="Presentacion">
      <NavBar className="NavBar"></NavBar>
      <div className="MaxCon">
        <div className="RedCon">
          <div className="Foto">
            <img src={Perfil} alt="Imagen de perfil"></img>
          </div>
          <div className="datos">
            <div className="texto">
              <section>
                <h1>This pokedex was devoloped for Omar Esteban Gutierrez</h1>
              </section>
              <section>
                <h2>
                  I am a programmer who enjoys designing web pages and loves
                  video games and programming. I work in Python, C, React,
                  Flutter. developed ,you could know me better in :
                </h2>
              </section>
            </div>
            <div className="Iconos">
              <div className="iconos_con">
                <a href={Twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="logo" />
                </a>
                <a href={Github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="logo" />
                </a>
                <a href={Instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Presentacion;
