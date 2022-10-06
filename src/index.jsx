import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Components/App";
import Presentacion from "./Components/Presentacion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Presentacion />} />
      <Route path="/Kanto" element={<App />} />
    </Routes>
  </BrowserRouter>
);
