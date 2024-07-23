import Image from "next/image"
import { PrimaryButton } from "../components/PrimaryButton"
import { SecundaryButton } from "../components/SecundaryButton"
import { FormLeads } from "../components/Form"
import { Card, Heading } from "@koaris/bloom-ui"

export default function Landing() {
  return (
    <div className="container flex flex-col">
      <header className="flex flex-col w-11/12 p-14">
        <nav className="flex flex-row items-center justify-between px-4">
          <Image src="/koaris.svg" width={104} height={104} alt="logo" />
          <ul className="space-x-8 text-lg font-bold md:flex">
            <li>Início</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Novidades</li>
            <li>Contato</li>
          </ul>
          <SecundaryButton text="Login" />
        </nav>
        <div className="flex py-10 items-center flex-col-reverse lg:flex-row">
          <div className="flex flex-col">
            <Heading tag="h1" className="md:text-4xl text-6xl font-bold tracking-wider md:leading-tight">
              Transformando ideias em soluções digitais de excelência
            </Heading>
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
          <Heading className="md:text-5xl text-4xl font-bold tracking-wider md:leading-tight ">
            Por que escolher a Koaris?
          </Heading>
          <div className="cards flex flex-col-reverse items-center gap-2 py-4 md:flex-row">
            <Card
              title="Suporte Contínuo"
              content="Nossa parceria não termina no lançamento. Oferecemos suporte técnico contínuo para garantir o funcionamento perfeito e crescimento contínuo de sua solução."
              direction="col"
              size="medium"
              imageSize="205px" image="/card3.svg"
              className=""
            ></Card>
            <Card
              title="Soluções Sob Medida"
              content="Cada negócio é único. Desenvolvemos soluções personalizadas que impulsionam o crescimento e proporcionam vantagem competitiva."
              direction="col"
              size="medium"
              imageSize="205px" image="/card2.svg"
              className=""
            ></Card>
            <Card
              title="Inovação Constante"
              content="Estamos na vanguarda da tecnologia, mantendo nossa equipe atualizada com as últimas tendências para oferecer soluções inovadoras e alinhadas com o futuro."
              direction="col"
              size="medium"
              imageSize="205px" image="/card1.svg"
              className=""
            ></Card>
          </div>
        </div>
        <div className="reasons flex flex-col items-center justify-around p-4 bg-gray-color">
          <Heading className="md:text-5xl text-4xl font-bold tracking-wider md:leading-tight ">
            Passo-a-passo:
          </Heading>
          <div className="cards flex flex-col-reverse items-center gap-2 py-4 md:flex-row">
            <ol className="">
              <li>1. <a>Crie</a> sua conta na Koaris</li>
              <li>2. Crie a conta de sua empresa</li>
              <li>3. Selecione o produto desejado</li>
              <li>4. Configure a opção de pagamento mais adequada</li>
              <li>5. Pronto, você já está apto a usar seu novo software!</li>
            </ol>
          </div>
        </div>
        <div className="reasons flex flex-col items-center justify-around p-4 bg-gray-color">
          <Heading className="md:text-5xl text-4xl font-bold tracking-wider md:leading-tight ">
            Dúvidas frequêntes
          </Heading>
          <div className="cards flex flex-col-reverse items-center gap-2 py-4 md:flex-row">
            <ol className="">
              <li>Afinal, o que é a Koaris?</li>
              <li>A Koaris é um software de gestão de produtos. Nele centralizamos o controle dos outros softwares, como o <a>Gestão Online</a>, <a>Agendamentos</a> e <a>Landing Pages</a>.</li>
            </ol>
          </div>
        </div>
        <div>
          <FormLeads />
        </div>
      </main>
      <footer className="px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center sm:text-left ">
          <div className="flex justify-center">
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
