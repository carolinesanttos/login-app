import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../api/BaseAPI";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import InputField from "../components/InputField";



function Cadastro() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const navigate = useNavigate();

    const mutation = useMutation ({
        mutationFn: () => cadastrarUsuario({nome, cpf, email, senha, confirmarSenha}),
        onSuccess: () => {
            alert("Cadastro realizado com sucesso!");
            navigate("/login");
        },
        onError: (error: AxiosError) => {
            const data = error.response?.data as { message?: string };
            const mensagem = data?.message || "Erro ao cadastrar usuário.";
            alert(mensagem);
        },
    });

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            alert("Senhas não coincidem!");
            return;
        }
        mutation.mutate();
    }

    return (
        <div className="flex w-screen">
            <div className="w-1/2 bg-cover bg-bottom h-auto bg-[url('/src/assets/foto-login-cadastro.png')]"></div>

            <div className="w-1/2 flex items-center justify-center bg-white">
                <form onSubmit={enviar} className="p-10 rounded-2xl w-full max-w-md">
                    <div className="w-full h-20 bg-cover bg-center bg-[url('/src/assets/logo-img.jpeg')] mb-8"></div>

                    <InputField label="Nome" type="text" id="nome" placeholder="Ex: Bianca Santana" value={nome} onChange={(e) => setNome(e.target.value)} required />

                    <InputField label="CPF" type="text" id="cpf" placeholder="Ex: 123.456.789.01" value={cpf} onChange={(e) => setCpf(e.target.value)} required />

                    <InputField label="E-mail" type="email" id="email" placeholder="Ex: professor@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <InputField label="Senha" type="password" id="senha" placeholder="Crie uma senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

                    <InputField label="Confirmar senha" type="password" id="senha" placeholder="Confirme sua senha" value={senha} onChange={(e) => setConfirmarSenha(e.target.value)} required />

                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Cadastrar</button>

                    <p className="text-sm text-center mt-4">
                        Já tem uma conta? <Link to="/login" className="text-sm text-blue-600 hover:underline">Entrar</Link>
                    </p>
                </form>
            </div>

        </div>

    )
}

export default Cadastro