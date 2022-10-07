import "../scss/App.scss";
import NavBar from "./NavBar";
import { useState } from "react";
import { useEffect } from "react";
import Kanto from "../image/Medalla_Arco.png";
import Johto from "../image/Medalla_Catarina.png";
import Hoenn from "../image/Medalla_corazon.webp";
import Sinnoh from "../image/Medalla_Caparazon.webp";
import React from "react";

const App = ({ Medalla, LimiteSuperior, LimiteInferior, URLs }) => {
  // eslint-disable-next-line
  const [Data, setData] = useState(null);
  // eslint-disable-next-line
  const [Loading, setLoading] = useState(false);
  const [Pokemon, setPokemon] = useState({
    name: "",
    pokedex: LimiteInferior,
    weight: "",
    height: "",
  });
  const [iImage, setiImage] = useState(0);

  const arriba = () => {
    if (iImage < 3) {
      setiImage(iImage + 1);
    } else {
      setiImage(0);
    }
  };

  const abajo = () => {
    if (iImage > 0) {
      setiImage(iImage - 1);
    } else {
      setiImage(3);
    }
  };

  const derecha = () => {
    setiImage(0);
    if (Pokemon.pokedex < LimiteSuperior) {
      setPokemon({ ...Pokemon, pokedex: Pokemon.pokedex + 1 });
    } else {
      setPokemon({ ...Pokemon, pokedex: LimiteInferior });
    }
  };

  const izquierda = () => {
    console.log(Pokemon.pokedex);
    setiImage(0);
    if (Pokemon.pokedex === LimiteInferior) {
      setPokemon({ ...Pokemon, pokedex: LimiteSuperior });
    } else {
      setPokemon({ ...Pokemon, pokedex: Pokemon.pokedex - 1 });
    }
  };

  useEffect(() => {
    fetch(URLs + Pokemon.pokedex, { mode: "cors" }) //Link y acepto condicones
      .then((res) => res.json()) //tranformo a json
      .then((data) => {
        //set a data
        setData(data);
        console.log(Pokemon.pokedex);
        console.log(URLs);
        if (data.types.length === 1) {
          setPokemon({
            name: data.name,
            pokedex: data.id,
            imagen: [
              data.sprites.front_default,
              data.sprites.back_default,
              data.sprites.front_shiny,
              data.sprites.back_shiny,
            ],
            shiny: data.sprites.front_shiny,
            weight: data.weight,
            height: data.height,
            types: data.types.length,
            type1: data.types[0].type.name,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
          });
        }
        if (data.types.length === 2) {
          setPokemon({
            name: data.name,
            pokedex: data.id,
            imagen: [
              data.sprites.front_default,
              data.sprites.back_default,
              data.sprites.front_shiny,
              data.sprites.back_shiny,
            ],
            weight: data.weight,
            height: data.height,
            types: data.types.length,
            type1: data.types[0].type.name,
            type2: data.types[1].type.name,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
          });
        }
        setLoading(true);
      });

    return () => {
      //aqui va algo
    };
  }, [Pokemon.pokedex, URLs]);

  return (
    <main className="Kanto">
      <NavBar className="NavBar"></NavBar>
      {Loading === true ? (
        <section className="Pokedex">
          <section className="pestana_izquierda">
            <section className="insignia">
              <img
                src={
                  {
                    Kanto: Kanto,
                    Johto: Johto,
                    Hoenn: Hoenn,
                    Sinnoh: Sinnoh,
                  }[Medalla]
                }
                alt="Kanto"
              ></img>
            </section>
            <section className="Pokemon">
              <div>
                <img src={Pokemon.imagen[iImage]} alt={Pokemon.name}></img>
              </div>
            </section>
            <section className={Pokemon.types === 2 ? "dostipos" : "untipos"}>
              <div className="tipo">
                <h2>{Pokemon.type1}</h2>
              </div>

              {Pokemon.types === 2 ? (
                <div className="tipo">
                  <h2>{Pokemon.type2}</h2>
                </div>
              ) : (
                ""
              )}
            </section>
            <section className="cruzeta">
              <div className="gridcruz">
                <div className="griditem"></div>
                <div className="arriba" onClick={arriba}></div>
                <div className="griditem"></div>
                <div className="izquierda" onClick={izquierda}></div>
                <div className="centro"></div>
                <div className="derecha" onClick={derecha}></div>
                <div className="griditem"></div>
                <div className="abajo" onClick={abajo}></div>
                <div className="griditem"></div>
                <div />
              </div>
            </section>
          </section>
          <section className="pestana_derecha">
            <div className="containerPantalla">
              <div className="pantallaNegra">
                <div className="pantalla_gris">
                  <div className="caracteristica">HP:</div>
                  <div className="numero">{Pokemon.hp}</div>
                </div>
                <div className="pantalla_gris">
                  <div className="caracteristica">ATTACK:</div>
                  <div className="numero">{Pokemon.attack}</div>
                </div>
                <div className="pantalla_gris">
                  <div className="caracteristica">DEFENSE:</div>
                  <div className="numero">{Pokemon.defense}</div>
                </div>
              </div>
            </div>
            <div className="pantallaAzul">
              <div className="Nombre">{Pokemon.name}</div>
              <div className="Nombre">No#:{Pokemon.pokedex}</div>
            </div>
            <div className="circleContainer">
              <div className="circulo"></div>
            </div>
          </section>
        </section>
      ) : (
        ""
      )}
    </main>
  );
};

export default App;
