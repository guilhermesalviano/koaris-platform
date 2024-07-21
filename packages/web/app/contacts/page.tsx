'use client'
import { Checkbox, Heading, Input } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";
import { PiChatsCircleFill } from "react-icons/pi";
import { FiSend } from "react-icons/fi";


export default function Contacts() {
    return (
        <div className="w-full bg-background h-screen">
            <Header />
            <main className="flex flex-col pt-20">
                <Heading className="sm:text-3xl text-4xl font-bold p-8">
                    Gerencie seus clientes
                </Heading>
                <div className="flex flex-col pl-8 pr-8">
                    <table className="bg-neutral-200 shadow-md rounded shadow-neutral-400">
                        <thead>
                            <tr>
                                <td className="p-4 text-2xl" colSpan={3}>
                                    Lista de clientes
                                </td>
                                <td colSpan={3}>
                                    <div className="flex justify-end pr-4">
                                        <Input type="text" className="rounde w-60" error={false} />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-orange-500 text-neutral">
                                <td>
                                    <Checkbox />
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
                            <tr>
                                <td>
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
                                    <FiSend size={24} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}