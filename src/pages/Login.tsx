import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/BaseAPI";
import { AxiosError } from "axios";
import InputField from "../components/InputField";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const mutation = useMutation ({
        mutationFn: () => login(email, senha),
        onSuccess: (data)  => {
            console.log("Login bem-sucedido", data);
            // falta adicionar o token, redirecionar...
        }, 
        onError: (error: AxiosError) => {
            console.error("Erro ao fazer login", error.response?.data || error.message)
        }
    });

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate();
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-cover bg-bottom h-auto bg-[url('/src/assets/foto-login-cadastro.png')]"></div>

            <div className="w-1/2 flex items-center justify-center bg-white">
                <form onSubmit={enviar} className="p-10 rounded-2xl w-full max-w-md">
                    <div className="w-full h-20 bg-cover bg-center bg-[url('/src/assets/logo-img.jpeg')] mb-8"></div>


                    <InputField label="E-mail" type="email" id="email" placeholder="Ex: professor@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <InputField label="Senha" type="password" id="senha" placeholder="Sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

                    <div className="text-right mb-6">
                        <a href="#" className="text-sm text-blue-600 hover:underline">Esqueci minha senha</a>
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Entrar</button>

                    <Link to="/cadastro" className="block text-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-1 transition">
                        Registra-se
                    </Link>
                </form>
            </div>
        </div>
    )


}

export default Login