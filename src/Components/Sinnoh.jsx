import React from "react";
import App from "./PlantillaPoxedex";
const Sinnoh = () => {
  const Medalla = "Sinnoh";
  const limiteInferior = 387;
  const limiteSuperior = 493;
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

export default Sinnoh;
