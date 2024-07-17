import Image from "next/image";
import { Link, Heading, Button, Text, Card } from "@koaris/bloom-ui";
import { FiUsers, FiMessageSquare } from "react-icons/fi";
import { Header } from "../../components/Header";

export default function Dashboard() {

  return (
    <div className="w-full bg-background flex justify-center h-screen">
      <div className="w-full h-screen rounded-2xl">
        <Header />
        <main className="flex flex-col justify-center pt-28">
          <Heading className="sm:text-3xl text-2xl font-bold p-8">Seja bem vindo, Guilherme</Heading>
          <div className="flex flex-col">
            <div className="flex flex-col px-8">
              <div className="widgets grid gap-4 pb-3 sm:grid-cols-2">
                <div className="info-widget flex items-center py-2">
                  <div className="info-widget-image bg-gray-100 rounded-md p-4">
                    <FiUsers className="text-black" size={30} />
                  </div>
                  <div className="info-widget-text flex flex-col align-middle justify-center px-2">
                    <h1>Total de contatos</h1>
                    <p className="text-black">1</p>
                  </div>
                </div>
                <div className="info-widget flex items-center py-2">
                  <div className="info-widget-image bg-gray-100 rounded-md p-4">
                    <FiMessageSquare className="text-black" size={30} />
                  </div>
                  <div className="info-widget-text flex flex-col align-middle justify-center px-2">
                    <h1>Total de mensagens</h1>
                    <p className="text-black">1</p>
                  </div>
                </div>
              </div>
              <div className="cards grid grid-cols-1 xl:grid-cols-2 gap-4 py-5">
                <Card
                  title="Confirmar meu e-mail"
                  content="Te enviamos um e-mail de confirmação, é importante confirma-lo antes de usar a plataforma."
                  imageSize="100px" image="/mailbox.svg"
                  className="p-8 h-48 flex-row-reverse gap-4"
                >
                  <Button variant="secondary"
                    className="secundary-button my-1 w-30"
                    size="sm">
                    Re-enviar
                  </Button>
                </Card>
                <Card
                  title="Site Institucional"
                  content="Destaque a sua marca com um site institucional profissional e moderno!"
                  imageSize="100px"
                  image="/site_institucional.svg"
                  className="p-8 h-48 flex-row-reverse gap-4"
                >
                  <Button variant="secondary"
                    className="secundary-button my-1 w-30"
                    size="sm">
                    Re-enviar
                  </Button>
                </Card>
              </div>
              <Heading className="text-3xl font-bold py-3">Novidades</Heading>
              <div className="news grid grid-cols-1 xl:grid-cols-2">
                <div className="news-card rounded-xl">
                  <h3 className="text-sm text-black py-4">Destaque-se na Multidão Digital: Como Ser Relevante na Internet!</h3>
                  <p className="text-sm text-gray-500">Neste mundo cada vez mais conectado, ser relevante na internet é essencial para se destacar entre a multidão digital. Com a imensa quantidade de informações disponíveis online, é fundamental saber como chamar a atenção do público...</p>
                  <div className="text-sm text-gray-500 py-4">
                    <a href="https://google.com" target="_blank" className="text-highlight font-bold" rel="noopener noreferrer">Ler mais</a>
                  </div>
                </div>
                <div className="news">
                  <div className="news-card rounded-xl">
                    <h3 className="text-sm text-black py-4">Transformando Ideias em Realidade com Soluções Tecnológicas de Ponta!</h3>
                    <p className="text-sm text-gray-500">Olá, leitores! Temos o prazer de apresentar a vocês a InovaTech, uma renomada software house especializada em soluções tecnológicas sob medida.</p>
                    <div className="text-sm text-gray-500 py-4">
                      <a href="https://google.com" target="_blank" className="text-highlight font-bold" rel="noopener noreferrer">Ler mais</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
