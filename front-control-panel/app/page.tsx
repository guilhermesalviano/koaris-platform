import Image from "next/image";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecundaryButton } from "../components/SecundaryButton";

export default function Landing() {
  return (
    <div className="container flex-1 flex flex-col p-14">
      <header className="flex flex-col w-11/12">
        <nav className="flex flex-row items-center justify-between px-4">
          <Image src="/logo.svg" width={104} height={104} alt="logo" />
          <ul className="flex space-x-8 text-lg font-bold">
            <li>Início</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Novidades</li>
            <li>Contatos</li>
          </ul>
          <SecundaryButton text="Login" />
        </nav>
        <div className="flex py-10 items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold tracking-wider leading-tight">
              Transformando ideias em soluções digitais de excelência
            </h1>
            <div className="flex py-4">
              <PrimaryButton text="Eu quero!" />
              <a className="flex items-center font-bold text-highlight px-6 text-lg" href="#">
                Ver Serviços
              </a>
            </div>
          </div>
          <Image src="/banner.svg" className="lg:w-1600 w-4/6 py-8" width={1600} height={1600} sizes="100%" alt="Banner" />
        </div>
      </header>
      <main>
        <div className="reasons flex items-center justify-around">
          <div className="card rounded-lg p-8 w-4/12 flex flex-col">
            <img src="/card1.svg" alt="Inovação" className="py-4 w-3/5 self-center" />
            <h2 className="font-bold text-lg text-left">Inovação Constante</h2>
            <p className="text-base">
              Estamos na vanguarda da tecnologia, mantendo nossa equipe atualizada com as últimas tendências para oferecer soluções inovadoras e alinhadas com o futuro.
            </p>
          </div>

          <div className="card rounded-lg p-8 w-4/12 flex flex-col">
            <img src="/card2.svg" alt="Inovação" className="py-4 w-3/5 self-center" />
            <h2 className="font-bold text-lg text-left">Soluções Sob Medida</h2>
            <p className="text-base">
              Cada negócio é único. Desenvolvemos soluções personalizadas que impulsionam o crescimento e proporcionam vantagem competitiva.
            </p>
          </div>

          <div className="card rounded-lg p-8 w-4/12 flex flex-col">
            <img src="/card3.svg" alt="Inovação" className="py-4 w-3/5 self-center" />
            <h2 className="font-bold text-lg text-left">Suporte Contínuo</h2>
            <p className="text-base">
              Nossa parceria não termina no lançamento. Oferecemos suporte técnico contínuo para garantir o funcionamento perfeito e crescimento contínuo de sua solução.
            </p>
          </div>
        </div>
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}
