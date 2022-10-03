import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Kanto" element={<App />} />
    </Routes>
  </BrowserRouter>
);
