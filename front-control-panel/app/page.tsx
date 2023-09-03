import Image from "next/image";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecundaryButton } from "../components/SecundaryButton";

export default function Landing() {
  return (
    <div className="container flex-1 flex flex-col p-14">
      <header className="flex flex-col w-11/12">
        <nav className="flex flex-row items-center justify-between px-4">
          <Image src="/logo.png" width={104} height={104} alt="logo" />
          <ul className="flex space-x-8 text-lg font-bold">
            <li>Início</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Novidades</li>
            <li>Contatos</li>
          </ul>
          <SecundaryButton text="Login" />
        </nav>
        <div className="flex py-8 items-center justify-center">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold tracking-widest leading-snug ">Transformando Ideias em Soluções Digitais de Excelência</h1>
            <PrimaryButton text="Eu quero!" />
          </div>
          <Image src="/banner.png" width={1080} height={1080} sizes="100%" alt="Banner" />
        </div>
      </header>
      <main>
        main
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}
