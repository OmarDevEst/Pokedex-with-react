import React from "react";
import App from "./PlantillaPoxedex";
const Kantho = () => {
  const Medalla = "Kanto";
  const limiteInferior = 1;
  const limiteSuperior = 151;
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

export default Kantho;
