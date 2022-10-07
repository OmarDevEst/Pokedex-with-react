import React from "react";
import App from "./PlantillaPoxedex";
const Hoenn = () => {
  const Medalla = "Hoenn";
  const limiteInferior = 252;
  const limiteSuperior = 386;
  const Api = "https://pokeapi.co/api/v2/pokemon/";

  return (
    <App
      Medalla={Medalla}
      LimiteInferior={limiteInferior}
      LimiteSuperior={limiteSuperior}
      URLs={Api}
    />
  );
};

export default Hoenn;
