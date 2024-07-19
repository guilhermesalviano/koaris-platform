"use client"
import { Heading, Link } from "@koaris/bloom-ui";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown, FiHome, FiMenu, FiShoppingBag, FiTool, FiUser, FiX } from "react-icons/fi";

export function Header() {
    const [openSidebar, setOpenSidebar] = useState(false)
    const [openUserMenu, setOpenUserMenu] = useState(false)

    return (
        <>
            <aside className={`bg-neutral-800 py-8 z-10 fixed flex justify-center flex-col left-0 top-0 h-full transition-transform duration-300
            ${openSidebar ? 'translate-x-0' : '-translate-x-72'}`}
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
                            <FiShoppingBag size={32} />
                            <Link url="/products" newPage={false} className="font-normal text-white">
                                Produtos
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
            <header className="border-b-2 p-6 flex justify-between fixed w-full h-20 bg-neutral-100">
                <div className="flex justify-center items-center gap-6">
                    <FiMenu size={36} className="cursor-pointer" onClick={() => setOpenSidebar(!openSidebar)} />
                    <Image src="/koaris.svg" width={104} height={104} alt="logo" className="self-center" />
                </div>
                <div className="flex items-center flex-col">
                    <h3 className="flex items-center gap-1 cursor-pointer" onClick={() => setOpenUserMenu(!openUserMenu)}>
                        Conta: Alpha
                        <FiChevronDown size={24} className="mt-1" />
                    </h3>
                    <ul className={`bg-neutral-100 p-2 pl-8 pr-8 text-neutral-800 ${openUserMenu ? '' : ''}`}>
                        <li>Usuários</li>
                    </ul>
                </div>
            </header>
        </>
    );
}

