import { Heading, Text } from "@koaris/bloom-ui";
import { Header } from "../../../../components/Header";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";
import Image from "next/image";

export default function Chat() {
    return (
        <div className="">
            <Header />
            <div className="chat-container pt-28">
                <ul className="list">
                    <div className="flex items-center justify-between bg-neutral-200 p-6">
                        <Heading size="xl">Todas as conversas</Heading>
                        <FiSearch size={26} className="cursor-pointer" />
                    </div>
                    <li className="bg-orange-700 p-4 flex items-center justify-around border-b border-neutral-400">
                        <Image src="/contact-icon.png" alt="" width={60} height={60} />
                        <div>
                            <Text tag="strong" className="name text-neutral-200">guilherme.salviano12@outlook.com</Text>
                            <Text className="message text-neutral-200">Olá, gostaria de um orçamento para 2 impressões.</Text>
                        </div>
                        <FiMoreHorizontal size={32} color="FFFFFF" />
                    </li>
                    <li className="p-4 flex items-center justify-around border-b border-neutral-400">
                        <Image src="/contact-icon.png" alt="" width={60} height={60} />
                        <div>
                            <Text tag="strong" className="name text-neutral-800">guilherme.salviano12@outlook.com</Text>
                            <Text className="message text-neutral-800">Olá, gostaria de um orçamento para 2 impressões.</Text>
                        </div>
                        <FiMoreHorizontal size={32} color="000000" />
                    </li>
                    <li className="p-4 flex items-center justify-around border-b border-neutral-400">
                        <Image src="/contact-icon.png" alt="" width={60} height={60} />
                        <div>
                            <Text tag="strong" className="name text-neutral-800">guilherme.salviano12@outlook.com</Text>
                            <Text className="message text-neutral-800">Olá, gostaria de um orçamento para 2 impressões.</Text>
                        </div>
                        <FiMoreHorizontal size={32} color="000000" />
                    </li>
                </ul>

                <div className="chat"></div>
            </div>
        </div>
    )
}