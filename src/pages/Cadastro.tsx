import { Link, useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../api/BaseAPI";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import InputField from "../components/InputField";
import { z } from "zod";
import { zodResolver } from './../../node_modules/@hookform/resolvers/zod/src/zod';
import { useForm } from "react-hook-form";

const cadastroSchema = z.object({
    nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  cpf: z.string().min(11, "CPF inválido"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "Senha deve ter pelo menos 4 caracteres"),
  confirmarSenha: z.string().min(6, "Confirmação de senha deve ter pelo menos 4 caracteres"),
}).refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas precisam ser iguais!",
    path: ["confirmarSenha"],
});

type CadastroData = z.infer<typeof cadastroSchema>;

function Cadastro() {
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors} } = useForm<CadastroData>({
        resolver: zodResolver(cadastroSchema),
    });

    const mutation = useMutation({
        mutationFn: (dados: CadastroData) => cadastrarUsuario({
          nome: dados.nome,
          cpf: dados.cpf,
          email: dados.email,
          senha: dados.senha,
        }),
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

    const onSubmit = (data: CadastroData) => {
        mutation.mutate(data);
      };

    return (
        <div className="flex w-screen">
            <div className="w-1/2 bg-cover bg-bottom h-auto bg-[url('/src/assets/foto-login-cadastro.png')]"></div>

            <div className="w-1/2 flex items-center justify-center bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="p-10 rounded-2xl w-full max-w-md">
                    <div className="w-full h-20 bg-cover bg-center bg-[url('/src/assets/logo-img.jpeg')] mb-8"></div>

                    <InputField label="Nome" id="nome" type="text" placeholder="Ex: Bianca Santana" {...register("nome")} />
                    {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}

                    <InputField label="CPF" id="cpf" type="text" placeholder="Ex: 123.456.789-01" {...register("cpf")} />
                    {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}

                    <InputField label="E-mail" id="email" type="email" placeholder="Ex: professor@gmail.com" {...register("email")} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                    <InputField label="Senha" id="senha" type="password" placeholder="Crie uma senha" {...register("senha")} />
                    {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}

                    <InputField label="Confirmar senha" id="confirmarSenha" type="password" placeholder="Confirme sua senha" {...register("confirmarSenha")} />
                    {errors.confirmarSenha && <p className="text-red-500 text-sm">{errors.confirmarSenha.message}</p>}


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