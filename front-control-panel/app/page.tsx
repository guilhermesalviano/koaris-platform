import Image from "next/image";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecundaryButton } from "../components/SecundaryButton";

export default function Landing() {
  return (
    <div className="container flex flex-col">
      <header className="flex flex-col w-11/12 p-14">
        <nav className="flex flex-row items-center justify-between px-4">
          <Image src="/logo.svg" width={104} height={104} alt="logo" />
          <ul className="space-x-8 text-lg font-bold md:flex hidden">
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
            <h1 className="md:text-5xl text-4xl font-bold tracking-wider md:leading-tight">
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
      <main className="w-full">
        <div className="reasons flex flex-col items-center justify-around p-4 bg-gray-color">
          <h1 className="md:text-5xl text-4xl font-bold tracking-wider md:leading-tight ">
            Por que escolher a Koaris?
          </h1>
          <div className="cards flex flex-col md:flex-row items-center py-4">
            <div className="card rounded-lg p-8 flex flex-col m-2 md:w-4/12">
              <img src="/card1.svg" alt="Inovação" className="py-2 w-200 self-center" />
              <h2 className="font-bold text-lg text-left">Inovação Constante</h2>
              <p className="text-base">
                Estamos na vanguarda da tecnologia, mantendo nossa equipe atualizada com as últimas tendências para oferecer soluções inovadoras e alinhadas com o futuro.
              </p>
            </div>

            <div className="card rounded-lg p-8 flex flex-col m-2 md:w-4/12">
              <img src="/card2.svg" alt="Inovação" className="py-10 w-200 self-center" />
              <h2 className="font-bold text-lg text-left">Soluções Sob Medida</h2>
              <p className="text-base">
                Cada negócio é único. Desenvolvemos soluções personalizadas que impulsionam o crescimento e proporcionam vantagem competitiva.
              </p>
            </div>

            <div className="card rounded-lg p-8 flex flex-col m-2 md:w-4/12">
              <img src="/card3.svg" alt="Inovação" className="py-4 w-200 self-center" />
              <h2 className="font-bold text-lg text-left">Suporte Contínuo</h2>
              <p className="text-base">
                Nossa parceria não termina no lançamento. Oferecemos suporte técnico contínuo para garantir o funcionamento perfeito e crescimento contínuo de sua solução.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-2 bg-background">
          <h1 className="md:text-5xl text-4xl font-bold tracking-wider py-4 md:leading-tight ">
            Contate-nos
          </h1>
          <div className="flex md:flex-col flex-row items-center w-full">
            <div className="flex flex-col m-2 w-6/12">
              <label className="text-lg mb-2 px-1">Nome</label>
              <input type="text" placeholder="Seu Nome" className="rounded-sm p-2 border-2 border-gray-700"/>
            </div>
            <div className="flex flex-col m-2 w-6/12">
              <label className="text-lg mb-2 px-1">Celular</label>
              <input type="phone" placeholder="(11) 91234-5678" className="rounded-sm p-2 border-2 border-gray-700"/>
            </div>
          </div>
          <div className="flex flex-row items-center w-full">
            <div className="flex flex-col m-2 w-full">
              <label className="text-lg mb-2 px-1">E-mail</label>
              <input type="email" placeholder="seuemail@email.com.br" className="rounded-sm p-2 border-2 border-gray-700"/>
            </div>
          </div>
          <div className="flex flex-row items-center w-full">
            <div className="flex flex-col m-2 w-full">
              <label className="mb-2 px-1">Mensagem</label>
              <textarea className="rounded-sm p-2 border-2 border-gray-700 h-32" placeholder="Deixe-nos saber como podemos ajudar! Por favor, preencha o formulário abaixo e entraremos em contato o mais breve possível. Seus comentários e perguntas são muito importantes para nós." />
            </div>
          </div>
          <div className="flex flex-row items-end w-full">
            <div className=" flex flex-col m-2 self-end">
              <button className="p-3 primary-button text-lg rounded-sm w-40" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}
