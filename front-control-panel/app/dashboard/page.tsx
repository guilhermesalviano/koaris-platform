import Image from "next/image";
import { FiUsers, FiMessageSquare } from "react-icons/fi";

export default function Dashboard() {
  return (
    <div className="bg-dashboard-color w-full text-white flex h-screen">
      <aside className="p-4 w-60">
        <Image src="/logo.svg" width={104} height={104} alt="logo" />
        <nav className="">
          <ul className="flex align-middle justify-center flex-col">
            <li className="text-white">Home</li>
            <li className="text-white">Usuários</li>
            <li className="text-white">Produtos</li>
            <li className="text-white">Configurações</li>
          </ul>
        </nav>
      </aside>
      <div className="w-full h-screen bg-background rounded-2xl">
        <header className="border-b-2 p-6 flex justify-end">
          <h1 className="px-2">Conta:</h1>
          <ul>
            <li>Alpha</li>
          </ul>
        </header>
        <main className="flex flex-col justify-center ">
          <h1 className="text-2xl font-bold p-8">Seja bem vindo, Guilherme</h1>
          <div className="grid grid-cols-2">
            <div className="flex flex-col px-8">
              <div className="info-widget flex items-center py-2">
                <div className="info-widget-image bg-gray-100 rounded-md p-4">
                  <FiUsers className="text-black" size={30} />  
                </div>
                <div className="info-widget-text flex flex-col align-middle justify-center px-2">
                  <h1>Total de contatos</h1>
                  <p className="text-black">1</p>
                </div>
              </div>
              <div className="dashboard-card my-8 bg-primary-color rounded-xl p-4 max-w-xs h-52">
                <h2 className="text-base py-2 font-bold">Confirmar meu e-mail</h2>
                <p className="text-sm py-2 w-44">Te enviamos um e-mail de confirmação, é importante confirma-lo antes de usar a plataforma.</p>
                <button type="button" className="secundary-button my-1 rounded-md px-5 py-1">Re-enviar</button>
              </div>
              <div className="news py-6">
                <h2 className="text-2xl font-bold text-black">Novidades</h2>
                <div className="news-card rounded-xl">
                  <h3 className="text-sm text-black py-4">Destaque-se na Multidão Digital: Como Ser Relevante na Internet!</h3>
                  <p className="text-sm text-gray-500">Neste mundo cada vez mais conectado, ser relevante na internet é essencial para se destacar entre a multidão digital. Com a imensa quantidade de informações disponíveis online, é fundamental saber como chamar a atenção do público...</p>
                  <div className="text-sm text-gray-500 py-4">
                    <a href="https://google.com" target="_blank" className="text-highlight font-bold" rel="noopener noreferrer">Ler mais</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-8">
              <div className="info-widget flex items-center py-2">
                <div className="info-widget-image bg-gray-100 rounded-md p-4">
                  <FiMessageSquare className="text-black" size={30} />  
                </div>
                <div className="info-widget-text flex flex-col align-middle justify-center px-2">
                  <h1>Total de mensagens</h1>
                  <p className="text-black">1</p>
                </div>
              </div>
              <div className="dashboard-card my-8 bg-primary-color rounded-xl p-4 max-w-xs h-52">
                <h2 className="text-base py-2 font-bold">Site Institucional</h2>
                <p className="text-sm py-4 w-44">Destaque a sua marca com um site institucional profissional e moderno!</p>
                <button type="button" className="secundary-button my-1 rounded-md px-5 py-1">Orçamento</button>
              </div>
              <div className="news py-6">
                <h2 className="text-2xl font-bold text-black"></h2>
                <div className="news-card rounded-xl py-4">
                  <h3 className="text-sm text-black py-4">Transformando Ideias em Realidade com Soluções Tecnológicas de Ponta!</h3>
                  <p className="text-sm text-gray-500">Olá, leitores! Temos o prazer de apresentar a vocês a InovaTech, uma renomada software house especializada em soluções tecnológicas sob medida.</p>
                  <div className="text-sm text-gray-500 py-4">
                    <a href="https://google.com" target="_blank" className="text-highlight font-bold" rel="noopener noreferrer">Ler mais</a>
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
