import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Cria instância do QueryClient usada para gerenciar as requisições e cache
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    {/*Torna o cliente disponível em toda a aplicação */}
    <QueryClientProvider client={client}>
      <App />  
    </QueryClientProvider>
    
  </React.StrictMode>
);