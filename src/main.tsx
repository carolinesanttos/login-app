import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ← nosso componente com rotas
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);