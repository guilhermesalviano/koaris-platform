'use client'
import { Checkbox, Heading, Input } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";
import { FiSend, FiDownload, FiUserPlus } from "react-icons/fi";
import { ModalCreateUser } from "../../components/ModalCreateUser";


export default function Contacts() {
    return (
        <div className="w-full bg-background h-screen">
            <Header />
            <main className="flex flex-col pt-20 relative">
                <Heading className="sm:text-3xl text-4xl font-bold p-8">
                    Gerencie seus clientes
                </Heading>
                <ModalCreateUser opened={true} />
                <div className="flex flex-col pl-8 pr-8">
                    <table className="bg-neutral-200 shadow-md rounded shadow-neutral-400">
                        <thead>
                            <tr>
                                <td className="p-4 text-2xl" colSpan={3}>
                                    Lista de clientes
                                </td>
                                <td colSpan={3}>
                                    <div className="flex justify-center items-center gap-2 pr-4">
                                        <Input type="text" placeholder="Buscar" className="rounde w-60 h-8" error={false} />
                                        <div className="bg-orange-500 rounded-full p-2 cursor-pointer">
                                            <FiDownload size={20} color="#FFFFFF" />
                                        </div>
                                        <div className="bg-orange-500 rounded-full p-2 cursor-pointer">
                                            <FiUserPlus size={20} color="#FFFFFF" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-orange-500 text-neutral">
                                <td className="p-4">
                                    <Checkbox className="focus:bg-neutral-200"  />
                                </td>
                                <td>
                                    Nome
                                </td>
                                <td>
                                    E-mail
                                </td>
                                <td>
                                    Telefone
                                </td>
                                <td>
                                    Status
                                </td>
                                <td>
                                    Ações
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                        <tr className="odd:bg-white even:bg-neutral-100">
                                <td className="p-4">
                                    <Checkbox />
                                </td>
                                <td>
                                    Guilherme                  
                                </td>
                                <td>
                                    guilhermesalviano177@gmail.com
                                </td>
                                <td>
                                    (11)948449969
                                </td>
                                <td>
                                    Aguardando confirmação
                                </td>
                                <td>
                                    <div className="flex p-2 hover:bg-neutral-200 border-neutral-200 rounded-full cursor-pointer transition-colors duration-300">
                                        <FiSend size={24} />
                                    </div>
                                </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-neutral-100">
                                <td className="p-4">
                                    <Checkbox />
                                </td>
                                <td>
                                    Guilherme                  
                                </td>
                                <td>
                                    guilhermesalviano177@gmail.com
                                </td>
                                <td>
                                    (11)948449969
                                </td>
                                <td>
                                    Aguardando confirmação
                                </td>
                                <td>
                                    <div className="flex p-2 hover:bg-neutral-200 border-neutral-200 rounded-full cursor-pointer transition-colors duration-300">
                                        <FiSend size={24} />
                                    </div>
                                </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-neutral-100">
                                <td className="p-4">
                                    <Checkbox />
                                </td>
                                <td>
                                    Guilherme                  
                                </td>
                                <td>
                                    guilhermesalviano177@gmail.com
                                </td>
                                <td>
                                    (11)948449969
                                </td>
                                <td>
                                    Aguardando confirmação
                                </td>
                                <td>
                                    <div className="flex p-2 hover:bg-neutral-200 border-neutral-200 rounded-full cursor-pointer transition-colors duration-300">
                                        <FiSend size={24} />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}