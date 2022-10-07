import React from "react";
import App from "./PlantillaPoxedex";
const Johto = () => {
  const Medalla = "Johto";
  const limiteInferior = 152;
  const limiteSuperior = 251;
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

export default Johto;
