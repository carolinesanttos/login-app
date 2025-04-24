import { useState } from "react";
import { Link } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Login: ${email}, ${senha}`);
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-cover bg-bottom h-auto bg-[url('/src/assets/foto-login-cadastro.png')]"></div>

            <div className="w-1/2 flex items-center justify-center bg-white">
                <form onSubmit={enviar} className="p-10 rounded-2xl w-full max-w-md">
                    <div className="w-full h-20 bg-cover bg-center bg-[url('/src/assets/logo-img.jpeg')] mb-8"></div>


                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">E-mail</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border rounded-t-md border-b-2 outline-1" 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: professor@gmail.com" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="senha" className="block mb-2 text-sm font-medium">Senha</label>
                        <input type="password" id="senha" className="w-full px-4 py-2 border rounded-t-md border-b-2 outline-1" 
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Sua senha" required />
                    </div>

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