import Image from "next/image";
import { Button, Heading, Card, Input } from "@koaris/bloom-ui";
import { Form } from "../components/Form";

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
          <Button variant="secondary">Login</Button>
        </nav>
        <div className="flex py-10 items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col">
            <Heading variant="h1" size="7xl" /*className="font-bold md:text-5xl text-4xl font-bold tracking-wider md:leading-tight"*/>
              Transformando ideias em soluções digitais de excelência
            </Heading>
            <div className="flex py-4">
              <Button>Eu quero!</Button>
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
            <Card className="" 
              image="/card1.svg" 
              title="Inovação" 
              imageSize="200rem" 
              size="medium"
              direction="col"
              content="Estamos na vanguarda da tecnologia, mantendo nossa equipe atualizada com as últimas tendências para oferecer soluções inovadoras e alinhadas com o futuro."
            />
            {/*<div className="card rounded-lg p-8 flex flex-col m-2 md:w-4/12">
              <img src="/card1.svg" alt="Inovação" className="py-2 w-200 self-center" />
              <h2 className="font-bold text-lg text-left">Inovação Constante</h2>
              <p className="text-base">
                Estamos na vanguarda da tecnologia, mantendo nossa equipe atualizada com as últimas tendências para oferecer soluções inovadoras e alinhadas com o futuro.
              </p>
            </div>*/}

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

        <div className="flex flex-col items-center justify-center p-2 bg-neutral-400">
          <h1 className="md:text-5xl text-4xl font-bold tracking-wider py-4 md:leading-tight ">
            Contate-nos
          </h1>
          <div className="flex md:flex-col flex-row items-center w-full">
            <Form action="POST" target="/dashboard" type="landing" />
          </div>
        </div>
      </main>
      <footer className="px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center sm:text-left ">
          <div>
            <Image src="/logo.svg" width={104} height={104} alt="logo" />
          </div>
          <div>
            <h2 className="font-bold mb-2">Produtos</h2>
            <ul>
              <li>Agendamento</li>
              <li>Páginas Institucionais</li>
              <li>Gestão Online</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Recursos</h2>
            <ul>
              <li>Blog</li>
              <li>Central de ajuda</li>
              <li>Termos de Serviço</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Empresa</h2>
            <ul>
              <li>Sobre nós</li>
              <li>Entre em contato</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
