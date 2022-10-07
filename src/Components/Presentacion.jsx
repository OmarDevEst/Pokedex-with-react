import React from "react";
import NavBar from "./NavBar";
import "../scss/Presentacion.scss";
import Medalla from "../image/medalla_pesa.jpg";
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
      <section className="Pokedex">
        <section className="pestana_izquierda">
          <section className="insignia">
            <img src={Medalla} alt="Kanto"></img>
          </section>
          <section className="Pokemon">
            <div>
              <img src={Perfil} alt="Perfil"></img>
            </div>
          </section>
          <section className="untipos">
            <div className="tipo">
              <h2>Human</h2>
            </div>
          </section>
          <section className="cruzeta">
            <div className="gridcruz">
              <div className="griditem"></div>
              <div className="arriba"></div>
              <div className="griditem"></div>
              <div className="izquierda"></div>
              <div className="centro"></div>
              <div className="derecha"></div>
              <div className="griditem"></div>
              <div className="abajo"></div>
              <div className="griditem"></div>
              <div />
            </div>
          </section>
        </section>
        <section className="pestana_derecha">
          <div className="containerPantalla">
            <div className="pantallaNegra">
              <div className="pantalla_gris">
                <div className="caracteristica">
                  <h1>This pokedex was devoloped for Omar Esteban Gutierrez</h1>
                </div>
                <div className="numero">
                  <h2>
                    I am a programmer who enjoys designing web pages and loves
                    video games and programming. I work in Python, C, React,
                    Flutter. developed ,you could know me better in :
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="pantallaAzul">
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
          <div className="circleContainer">
            <div className="circulo"></div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Presentacion;
