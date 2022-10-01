import "./App.scss";
import NavBar from "./NavBar";
import { useState } from "react";
import { useEffect } from "react";
import Kanto from "./image/Medalla_Arco.png";

const App = () => {
  const URLs = "https://pokeapi.co/api/v2/pokemon/";
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Pokemon, setPokemon] = useState({
    name: "",
    pokedex: 1,
    weight: "",
    height: "",
  });

  const derecha = () => {
    if (Pokemon.pokedex < 151) {
      setPokemon({ ...Pokemon, pokedex: Pokemon.pokedex + 1 });
    } else {
      setPokemon({ ...Pokemon, pokedex: 1 });
    }
  };

  const izquierda = () => {
    if (Pokemon.pokedex === 1) {
      setPokemon({ ...Pokemon, pokedex: 151 });
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
        setLoading(false);
        console.log(data.types.length);
        console.log(data);

        if (data.types.length === 1) {
          setPokemon({
            name: data.name,
            pokedex: data.id,
            imagen: data.sprites.front_default,
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
            imagen: data.sprites.front_default,
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
      });

    return () => {
      //aqui va algo
    };
  }, [Pokemon.pokedex]);

  return (
    <main>
      <NavBar className="NavBar"></NavBar>
      <section className="Pokedex">
        <section className="pestana_izquierda">
          <section className="insignia">
            <img src={Kanto} alt="Kanto"></img>
          </section>
          <section className="Pokemon">
            <div>
              <img src={Pokemon.imagen} alt={Pokemon.name}></img>
            </div>
          </section>
          <section className="tipos">
            <div className="tipo">
              <h2>{Pokemon.type1}</h2>
            </div>
            <div className="tipo">
              <h2>{Pokemon.types === 2 ? Pokemon.type2 : ""}</h2>
            </div>
          </section>
          <section className="cruzeta">
            <div className="gridcruz">
              <div className="griditem"></div>
              <div className="arriba"></div>
              <div className="griditem"></div>
              <div className="izquierda" onClick={izquierda}></div>
              <div className="centro"></div>
              <div className="derecha" onClick={derecha}></div>
              <div className="griditem"></div>
              <div className="abajo"></div>
              <div className="griditem"></div>
              <div />
            </div>
          </section>
        </section>
        <section className="pestana_derecha">
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
          <div className="pantallaAzul">
            <div className="Nombre">{Pokemon.name}</div>
            <div>No#:{Pokemon.pokedex}</div>
          </div>
          <div className="circleContainer">
            <div className="circulo"></div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default App;
