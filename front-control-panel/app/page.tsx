import Image from "next/image";
import { Button } from "../components/Button";

export default function Landing() {
  return (
    <div className="flex flex-1 p-8 ">
      <header className="flex flex-col w-11/12">
        <nav className="flex flex-row items-center justify-between">
          <Image src="/logo.png" width={104} height={104} alt="logo" />
          <ul className="flex flex-row justify-between items-center">
            <li>Início</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Novidades</li>
            <li>Contatos</li>
          </ul>
          <Button text="Login" />
        </nav>
        <div className="flex py-8 items-center justify-center">
          <h1 className="text-5xl font-bold tracking-widest leading-snug ">Transformando Ideias em Soluções Digitais de Excelência</h1>
          <Image src="/banner.png" width={720} height={720} sizes="100%" alt="Banner" />
        </div>
      </header>
    </div>
  )
}
