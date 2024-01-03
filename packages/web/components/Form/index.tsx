"use client"
import { Input } from "@koaris/bloom-ui";

interface FormProps {
    action: string;
    target: string;
    type: string;
}

const Form = ({ 
    action, 
    target,
    type = "landing" 
} : FormProps) => {
    return (
        <form action={action} target={target}>
            <div className="flex flex-col m-2 w-6/12">
                <Input type="text" label="Nome" placeholder="Seu Nome" error={false} />
                <label className="text-lg mb-2 px-1">Nome</label>
                <input type="text" placeholder="Seu Nome" className="rounded-sm p-2 border-2 border-gray-700"/>
            </div>
            <div className="flex flex-col m-2 w-6/12">
                <label className="text-lg mb-2 px-1">Celular</label>
                <input type="phone" placeholder="(11) 91234-5678" className="rounded-sm p-2 border-2 border-gray-700"/>
            </div>
            <div className="flex flex-row items-center w-full">
                <div className="flex flex-col m-2 w-full">
                    <label className="text-lg mb-2 px-1">E-mail</label>
                    <input type="email" placeholder="seuemail@email.com.br" className="rounded-sm p-2 border-2 border-gray-700"/>
                </div>
            </div>
            <div className="flex flex-row items-center w-full">
                <div className="flex flex-col m-2 w-full">
                    <label className="mb-2 px-1">Mensagem</label>
                    <textarea className="rounded-sm p-2 border-2 border-gray-700 h-32" placeholder="Deixe-nos saber como podemos ajudar! Por favor, preencha o formulário abaixo e entraremos em contato o mais breve possível. Seus comentários e perguntas são muito importantes para nós." />
                </div>
            </div>
            <div className="flex flex-row items-end w-full">
                <div className=" flex flex-col m-2 self-end">
                    <button className="p-3 primary-button text-lg rounded-sm w-40" type="submit">
                    Enviar
                    </button>
                </div>
            </div>
        </form>
    );
}

export { Form };