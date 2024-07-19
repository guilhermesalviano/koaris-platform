'use client'
import { Button, Heading, Text } from "@koaris/bloom-ui";
import { Header } from "../../../../components/Header";
import { FiMoreHorizontal, FiSearch, FiSend, FiX } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function Chat() {
    const [chatSelected, setChatSelected] = useState(false)
    return (
        <div className="">
            <Header />
            <div className="chat-container flex">
                <ul className="list w-full pt-28">
                    <div className="flex items-center justify-between bg-neutral-200 p-6">
                        <Heading size="xl">Todas as conversas</Heading>
                        <FiSearch size={26} className="cursor-pointer" />
                    </div>
                    <li className="bg-orange-700 p-4 flex items-center justify-around border-b border-neutral-400 cursor-pointer" onClick={() => setChatSelected(!chatSelected)}>
                        <Image src="/contact-icon.png" alt="" width={60} height={60} />
                        <div>
                            <Text tag="strong" className="name text-neutral-200">guilherme.salviano12@outlook.com</Text>
                            <Text className="message text-neutral-200">Olá, gostaria de um orçamento para 2 impressões.</Text>
                        </div>
                        <FiMoreHorizontal size={32} color="FFFFFF" />
                    </li>
                    <li className="p-4 flex items-center justify-around border-b border-neutral-400 cursor-pointer" onClick={() => setChatSelected(!chatSelected)}>
                        <Image src="/contact-icon.png" alt="" width={60} height={60} />
                        <div>
                            <Text tag="strong" className="name text-neutral-800">guilherme.salviano12@outlook.com</Text>
                            <Text className="message text-neutral-800">Olá, gostaria de um orçamento para 2 impressões.</Text>
                        </div>
                        <FiMoreHorizontal size={32} color="000000" />
                    </li>
                    <li className="p-4 flex items-center justify-around border-b border-neutral-400 cursor-pointer" onClick={() => setChatSelected(!chatSelected)}>
                        <Image src="/contact-icon.png" alt="" width={60} height={60} />
                        <div>
                            <Text tag="strong" className="name text-neutral-800">guilherme.salviano12@outlook.com</Text>
                            <Text className="message text-neutral-800">Olá, gostaria de um orçamento para 2 impressões.</Text>
                        </div>
                        <FiMoreHorizontal size={32} color="000000" />
                    </li>
                </ul>
                <div className={`chat w-full mt-28 bg-neutral ${chatSelected ? 'absolute' : 'hidden'}`}>
                    <div className="flex gap-2 p-4">
                        <Image src="/contact-icon.png" alt="" width={60} height={60} />
                        <div className="flex flex-col justify-center">
                            <Heading>Chat com o cliente</Heading>
                            <Text tag="strong">Guilherme Farias, origem: Site</Text>
                        </div>
                        <div className="absolute right-2 top-2 cursor-pointer" onClick={() => setChatSelected(!chatSelected)}>
                            <FiX size={30}/>
                        </div>
                    </div>
                    <div className="bg-neutral-200" style={{ height: 'calc(100vh - 17rem)' }} >
                        <div className="messages-container flex flex-col gap-1 p-1">
                            <div className="message-received rounded-md bg-orange-500 p-3">
                                <Text className="text-neutral-200">Olá, gostaria de um orçamento para 2 impressões.</Text>
                            </div>
                            <div className="message-received rounded-md bg-orange-500 p-3">
                                <Text className="text-neutral-200">Olá, tudo bem?</Text>
                            </div>
                            <div className="message-received rounded-md bg-orange-500 p-3">
                                <Text className="text-neutral-200">Oi!!</Text>
                            </div>
                            <div className="message-sended rounded-md bg-neutral p-3">
                                <Text className="text-neutral-800 text-right">Olá, pode me enviar os arquivos?</Text>
                            </div>
                        </div>
                    </div>
                    <div className="message-creator flex gap-1 pl-2 pr-2 pt-2 bottom-0">
                        <input type="text" className="border border-neutral-500 rounded-xl w-full p-2" />
                        <Button className="w-14 h-14 rounded-full">
                            <FiSend size={30} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}