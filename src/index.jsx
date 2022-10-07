import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Kanto from "./Components/Kanto";
import Johto from "./Components/Johto";
import Hoenn from "./Components/Hoenn";
import Sinnoh from "./Components/Sinnoh";
import Presentacion from "./Components/Presentacion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Presentacion />} />
      <Route path="/Kanto" element={<Kanto />} />
      <Route path="/Johto" element={<Johto />} />
      <Route path="/Hoenn" element={<Hoenn />} />
      <Route path="/Sinnoh" element={<Sinnoh />} />
    </Routes>
  </BrowserRouter>
);
