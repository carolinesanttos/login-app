import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/login" element={<Login />} />

        {/* Rota para a página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Qualquer outra rota não definida redireciona para Login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

