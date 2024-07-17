"use client"
import { Link } from "@koaris/bloom-ui";
import Image from "next/image";
import { useState } from "react";
import { FiHome, FiMenu, FiShoppingBag, FiTool, FiUser, FiX } from "react-icons/fi";

export function Header() {
    const [openedMenu, setOpenedMenu] = useState(false)

    return (
        <>
            <aside className={`bg-dashboard-color py-8 z-10 fixed flex justify-center flex-col left-0 top-0 h-full transition-transform duration-300
            ${openedMenu ? 'translate-x-0' : '-translate-x-72'}`}
            >
                <div className="flex justify-center items-center gap-4 pl-8 pr-14">
                    <FiX size={30} color="FFFFFF" className="cursor-pointer" onClick={() => setOpenedMenu(!openedMenu)} />
                    <Image src="/logo-negative.svg" width={104} height={104} alt="logo" className="self-center" />
                </div>
                <nav className="h-full mt-4">
                    <ul className="h-full text-xl flex align-middle flex-col">
                        <li className="flex items-center gap-4 text-white bg-dashboard-color-selected p-4 mt-2 rounded-lg">
                            <FiHome size={32} />
                            <Link url="/dashboard" newPage={false} className="font-bold">
                                Dashboard
                            </Link>
                        </li>
                        <li className="flex items-center gap-4 text-white p-4 mt-2 rounded-lg">
                            <FiUser size={32} />
                            <Link url="/users" newPage={false} className="font-normal">
                                Usuários
                            </Link>
                        </li>
                        <li className="flex items-center gap-4 text-white p-4 mt-2 rounded-lg">
                            <FiShoppingBag size={32} />
                            <Link url="/products" newPage={false} className="font-normal">
                                Produtos
                            </Link>
                        </li>
                        <li className="flex items-center gap-4 text-white p-4 mt-2 rounded-lg">
                            <FiTool size={32} />
                            <Link url="/settings" newPage={false} className="font-normal">
                                Configurações
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <header className="border-b-2 p-6 flex justify-between fixed w-full h-28 bg-background ">
                <div className="flex justify-center items-center gap-6">
                    <FiMenu size={36} className="cursor-pointer" onClick={() => setOpenedMenu(!openedMenu)} />
                    <Image src="/logo.svg" width={104} height={104} alt="logo" className="self-center" />
                </div>
                <div>
                    <h1 className="px-2">Conta:</h1>
                    <ul>
                        <li>Alpha</li>
                    </ul>
                </div>
            </header>
        </>
    );
}

