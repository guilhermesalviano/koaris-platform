import { Button, Heading, Text } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";

export default function Estimations() {
    return (
        <div className="w-full bg-background h-screen">
            <Header />
            <main className="flex flex-col items-center  h-full pt-20 bg-neutral-100">
                <div className="header pt-20 pb-2">
                    <Heading size="3xl" className="font-bold">Configurações</Heading>
                </div>
                <div className="container flex">
                    <div className="menu mr-4">
                        <ul className="flex flex-col gap-1">
                            <li className="rounded-3xl p-2 pl-4">Conta</li>
                            <li className="rounded-3xl p-2 pl-4">Segurança</li>
                            <li className="selected bg-orange-500 text-white rounded-3xl p-2 pl-4">Organizações</li>
                            <li className="rounded-3xl p-2 pl-4">Método de Pagamentos</li>
                            <li className="rounded-3xl p-2 pl-4">Histórico</li>
                        </ul>
                    </div>
                    <div className="content bg-white p-8 mx-6 rounded-lg flex flex-col gap-2">
                        <Heading size="xl" className="">Organizações</Heading>
                        <Text>Lista de Organizações</Text>
                        <ul className="min-w-[360px]">
                            <li className="bg-neutral-100 p-4">Alphabureau</li>
                            <li className="p-4">
                                <Button disabled={true}>Nova Orgranização</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}