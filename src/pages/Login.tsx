import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/BaseAPI";
import { AxiosError } from "axios";
import InputField from "../components/InputField";
import { z } from "zod";
import { zodResolver } from './../../node_modules/@hookform/resolvers/zod/src/zod';
import { useForm } from "react-hook-form";


// Criando um schema de validação com Zod
const loginSchema = z.object({
    email: z.string().email("Email inválido!"),
    senha: z.string().min(4, "A senha deve ter pelo menos 4 caracteres.")
});

// Criando o tipo dos dados baseado no schema
type LoginData = z.infer<typeof loginSchema>

function Login() {
    // Inicializando com React Hook Form com validação Zod
    const {register, handleSubmit, formState: {errors} } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    // Mutation de login
    const mutation = useMutation ({
        mutationFn: (data: LoginData) => login(data.email, data.senha), //Função que será chamada
        onSuccess: ()  => {
            alert("Login bem-sucedido");
            // falta adicionar o token, redirecionar...
        }, 
        onError: (error: AxiosError) => {
            console.error("Erro ao fazer login", error.response?.data || error.message)
        }
    });

    // Função que será chamado ano envio do formulário
    const onSubmit = (data: LoginData) => {
        mutation.mutate(data);
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-cover bg-center bg-[url('/src/assets/foto-login-cadastro.png')]"></div>

            <div className="w-1/2 flex items-center justify-center bg-white">
                {/* handleSubmit para tratar o envio */}
                <form onSubmit={handleSubmit(onSubmit)} className="p-10 rounded-2xl w-full max-w-md">
                    <div className="w-full h-20 bg-cover bg-center bg-[url('/src/assets/logo-img.jpeg')] mb-8"></div>


                    <InputField label="E-mail" type="email" id="email" placeholder="Ex: professor@gmail.com" {...register("email")} // Conectando input com React Hook Form
                    />
                    {/* Erro do campo email */}
                    {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

                    <InputField label="Senha" type="password" id="senha" placeholder="Sua senha" {...register("senha")} 
                    />
                    {/* Erro do campo senha */}
                    {errors.senha && <p className="text-red-600 text-sm">{errors.senha.message}</p>}

                    <div className="text-right mb-6">
                        <a href="#" className="text-sm text-blue-600 hover:underline">Esqueci minha senha</a>
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Entrar</button>

                    {/*Âncora (link de navegação) para mudar de rota sem recarregar a página*/}
                    <Link to="/cadastro" className="block text-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-1 transition">
                        Registra-se
                    </Link>
                </form>
            </div>
        </div>
    )


}

export default Login