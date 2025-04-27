// services/auth.ts
import axios from "axios";

const API_URL = 'http://localhost:8000' 

export const login = async (email: string, senha: string) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    senha,
  });
  console.log(response.data)
  return response.data;
};

export const cadastrarUsuario = async (data: {
    nome: string;
    cpf: string;
    email: string;
    senha: string;}
    //confirmarSenha: string}
) => {
    const response = await axios.post(`${API_URL}/cadastro`, data);
    return response.data;
}
