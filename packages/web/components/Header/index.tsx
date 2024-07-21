"use client"
import { Heading, Link, Text } from "@koaris/bloom-ui";
import Image from "next/image";
import { useState } from "react";
import { FiAlertCircle, FiBarChart, FiBell, FiChevronDown, FiHome, FiMenu, FiMessageCircle, FiPieChart, FiSettings, FiShoppingBag, FiTool, FiUser, FiX } from "react-icons/fi";

export function Header() {
    const [openSidebar, setOpenSidebar] = useState(false)
    const [openUserMenu, setOpenUserMenu] = useState(false)
    const [openNotifications, setOpenNotifications] = useState(false)

    return (
        <>
            <aside className={`bg-neutral-800 py-8 z-10 fixed flex justify-center flex-col left-0 top-0 h-full transition-transform duration-300
            ${openSidebar ? 'translate-x-0' : '-translate-x-80'}`}
            >
                <div className="flex justify-center items-center gap-4 pl-8 pr-14">
                    <FiX size={30} color="FFFFFF" className="cursor-pointer" onClick={() => setOpenSidebar(!openSidebar)} />
                    <Image src="/koaris-negative.svg" width={104} height={104} alt="logo" className="self-center" />
                </div>
                <nav className="h-full mt-4">
                    <ul className="h-full text-xl flex align-middle flex-col">
                        <li className="flex items-center gap-4 text-white p-4 mt-2 rounded-lg hover:bg-neutral-700">
                            <FiHome size={32} />
                            <Link url="/dashboard" newPage={false} className="font-bold text-white">
                                Dashboard
                            </Link>
                        </li>
                        <li className="flex items-center gap-4 text-white p-4 mt-2 rounded-lg hover:bg-neutral-700">
                            <FiUser size={32} />
                            <Link url="/contacts" newPage={false} className="font-normal text-white">
                                Contatos
                            </Link>
                        </li>
                        <li className="flex items-center gap-4 text-white p-4 mt-2 rounded-lg hover:bg-neutral-700">
                            <FiMessageCircle size={32} />
                            <Link url="/chat" newPage={false} className="font-normal text-white">
                                Atendimento ao cliente
                            </Link>
                        </li>
                        <li className="flex items-center gap-4 text-white p-4 mt-2 rounded-lg hover:bg-neutral-700">
                            <FiShoppingBag size={32} />
                            <Link url="/services" newPage={false} className="font-normal text-white">
                                Serviços
                            </Link>
                        </li>
                        <li className="flex items-center gap-4 text-white p-4 mt-2 rounded-lg hover:bg-neutral-700">
                            <FiBarChart size={32} />
                            <Link url="/sales" newPage={false} className="font-normal text-white">
                                Vendas
                            </Link>
                        </li>
                        <li className="flex items-center gap-4 text-white p-4 mt-2 rounded-lg hover:bg-neutral-700">
                            <FiPieChart size={32} />
                            <Link url="/sales" newPage={false} className="font-normal text-white">
                                Analises
                            </Link>
                        </li>
                        <li className="flex items-center gap-4 text-white p-4 mt-2 rounded-lg hover:bg-neutral-700">
                            <FiTool size={32} />
                            <Link url="/settings" newPage={false} className="font-normal text-white">
                                Configurações
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <header className="border-b-2 p-6 flex justify-between fixed w-full h-20 border-neutral-200 bg-neutral">
                <div className="flex justify-center items-center gap-6">
                    <FiMenu size={36} className="cursor-pointer" onClick={() => setOpenSidebar(!openSidebar)} />
                    <Image src="/koaris.svg" width={104} height={104} alt="logo" className="self-center" />
                </div>
                <div className="flex items-center ">
                    <div className="flex p-3 bg-neutral hover:bg-neutral-200 border border-neutral-200 rounded-md transition-colors duration-300 cursor-pointer">
                        <div className="relative inline-block">
                            <span className="notification-icon top-0 right-0 bg-red-500 w-2 h-2 rounded-full absolute " />
                            <FiMessageCircle size={25} className="" />
                        </div>
                    </div>
                    <div className="flex ml-2 mr-2 p-3 bg-neutral relative hover:bg-neutral-200 border border-neutral-200 rounded-md transition-colors duration-300 cursor-pointer" onClick={() => setOpenNotifications(!openNotifications)}>
                        <div className="relative inline-block">
                            <span className="notification-icon top-0 right-0 bg-red-500 w-2 h-2 rounded-full absolute " />
                            <FiBell size={25} className="vibrate" />
                        </div>
                        <ul className={`text-neutral-800 absolute bg-neutral right-0 mt-9 rounded-lg border transition-transform duration-800 ${openNotifications ? 'translate-y-0' : '-translate-y-10 hidden'}`}>
                            <li className="p-2 border-b">
                                <Text tag="strong" size="xl" className="p-2 pr-24">Notificações</Text>
                            </li>
                            <li className="flex gap-2 items-center p-2 pl-4 border-b hover:bg-neutral-100 cursor-pointer">
                                <div className="relative inline-block">
                                    <span className="notification-icon top-0 right-0 bg-red-500 w-2 h-2 rounded-full absolute " />
                                    <FiAlertCircle size={20} />
                                </div>
                                <span>
                                    Novo Lead
                                </span>
                            </li>
                            <li className="flex gap-2 items-center p-2 pl-4 border-b hover:bg-neutral-100 cursor-pointer">
                                <div className="relative inline-block">
                                    <span className="notification-icon top-0 right-0 bg-red-500 w-2 h-2 rounded-full absolute " />
                                    <FiAlertCircle size={20} />
                                </div>
                                <span>
                                    Solicitação de orçamento
                                </span>
                            </li>
                            <li className="flex justify-center items-center p-2 hover:bg-neutral-100 cursor-pointer">
                                <span>
                                    ver todas
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center flex-col relative">
                        <h3 className="flex items-center p-3 hover:bg-neutral-200 bg-neutral border border-neutral-200 rounded-md cursor-pointer transition-colors duration-300" onClick={() => setOpenUserMenu(!openUserMenu)}>
                            Alpha Bureau
                            <FiChevronDown size={25} className="pt-1" />
                        </h3>
                        <ul className={`text-neutral-800 bg-neutral absolute right-0 mt-12 rounded-lg border transition-transform duration-800 ${openUserMenu ? 'translate-y-0' : '-translate-y-10 hidden'}`}>
                            <li className="p-2 pl-11 pr-11 hover:bg-neutral-100 cursor-pointer">
                                Usuários
                            </li>
                            <li className="p-2 pl-11 pr-11 hover:bg-neutral-100 cursor-pointer">
                                Usuários
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

