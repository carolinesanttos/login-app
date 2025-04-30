// services/auth.ts
import axios from "axios";

// URL base da API
const API_URL = 'http://localhost:8000' 

// Função assíncrona login de usuário
export const login = async (email: string, senha: string) => {
  // Envia uma requisição POST para a rota /login com os dados de e-mail e senha
  const response = await axios.post(`${API_URL}/login`, {
    email,
    senha,
  });
  console.log(response.data)
  // Retorna os dados da resposta
  return response.data;
};

export const cadastrarUsuario = async (data: {
    nome: string;
    cpf: string;
    email: string;
    senha: string;}
) => {
    const response = await axios.post(`${API_URL}/cadastro`, data);
    return response.data;
}
