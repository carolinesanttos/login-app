import React, { useState } from "react"
import { Link } from "react-router-dom";


function Cadastro() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            alert("Senhas não coincidem!");
            return;
        }

    }

    return (
        <div className="flex w-screen">
            <div className="w-1/2 bg-cover bg-bottom h-auto bg-[url('/src/assets/foto-login-cadastro.png')]"></div>

            <div className="w-1/2 flex items-center justify-center bg-white">
                <form onSubmit={enviar} className="p-10 rounded-2xl w-full max-w-md">
                    <div className="w-full h-20 bg-cover bg-center bg-[url('/src/assets/logo-img.jpeg')] mb-8"></div>

                    <div className="mb-4">
                        <label htmlFor="nome" className="block mb-2 text-sm font-medium">Nome:</label>
                        <input type="text" 
                            id="nome" 
                            className="w-full px-4 py-2 border rounded-t-md border-b-2 outline-1"
                            placeholder="Ex: Bianca Santana" 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required  />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="cpf" className="block mb-2 text-sm font-medium">CPF:</label>
                        <input 
                            type="text" 
                            id="cpf" 
                            className="w-full px-4 py-2 border rounded-t-md border-b-2 outline-1"
                            placeholder="Ex: 123.456.789.01" 
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">E-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-2 border rounded-t-md border-b-2 outline-1"
                            placeholder="Ex: professor@gmail.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="senha" className="block mb-2 text-sm font-medium">Senha</label>
                        <input 
                            type="password" 
                            id="senha" 
                            className="w-full px-4 py-2 border rounded-t-md border-b-2 outline-1"
                            placeholder="Crie uma senha" 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmarSenha" className="block mb-2 text-sm font-medium">Confirmar Senha</label>
                        <input 
                            type="password" 
                            id="confirmarSenha" 
                            className="w-full px-4 py-2 border rounded-t-md border-b-2 outline-1"
                            placeholder="Confirme sua senha" 
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            required 
                        />
                    </div>

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