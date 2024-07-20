import { Heading } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";
import { PiChatsCircleFill } from "react-icons/pi";


export default function Contacts() {
    return (
        <div className="w-full bg-background h-screen">
            <Header />
            <main className="flex flex-col pt-20">
                <Heading className="sm:text-3xl text-4xl font-bold p-8">
                    Gerencie seus clientes
                </Heading>
                <div className="flex flex-col pl-8 pr-8">
                    <table className="border border-neutral-800 rounded-md bg-neutral-200">
                        <thead>
                            <tr>
                                <td colSpan={4}>
                                    <div className="flex justify-end">
                                        <input type="text" className="rounded-lg" />
                                    </div>
                                </td>
                                <td>
                                    test
                                </td>
                            </tr>
                            <tr className="bg-orange-500 text-neutral">
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
                                    <PiChatsCircleFill size={28} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}