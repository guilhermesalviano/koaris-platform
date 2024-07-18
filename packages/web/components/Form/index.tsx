"use client"
import { Button, Heading, Input, Text } from "@koaris/bloom-ui";

export function FormLeads() {
  return (
    <div className="flex flex-col items-center justify-center p-2 bg-background">
      <Heading className="md:text-5xl text-4xl font-bold tracking-wider py-4 md:leading-tight ">
        Contate-nos
      </Heading>
      <div className="flex md:flex-col flex-row items-center w-full">
        <div className="flex flex-col ml-1 w-6/12">
          <Text tag="label" className="text-lg mb-1">Nome</Text>
          <Input type="text" placeholder="Seu Nome" error={false} className="rounded-sm p-2 border-2 border-gray-700" />
        </div>
        <div className="flex flex-col mr-1 w-6/12">
          <Text tag="label" className="text-lg mb-1">Celular</Text>
          <Input type="phone" placeholder="(11) 91234-5678" error={false} className="rounded-sm p-2 border-2 border-gray-700" />
        </div>
      </div>
      <div className="flex flex-row items-center w-full">
        <div className="flex flex-col m-1 w-full">
          <Text tag="label" className="text-lg mb-1">E-mail</Text>
          <Input type="text" placeholder="seuemail@email.com.br" error={false} className="rounded-sm p-2 border-2 border-gray-700" />
        </div>
      </div>
      <div className="flex flex-row items-center w-full">
        <div className="flex flex-col m-1 w-full">
          <Text tag="label" className="mb-1">Mensagem</Text>
          <textarea className="rounded-sm p-2 border-2 border-gray-700 h-32" placeholder="Deixe-nos saber como podemos ajudar! Por favor, preencha o formulário abaixo e entraremos em contato o mais breve possível. Seus comentários e perguntas são muito importantes para nós." />
        </div>
      </div>
      <div className="flex flex-row items-end w-full">
        <div className=" flex flex-col m-2 self-end">
          <Button className="" type="submit">
            Enviar
          </Button>
        </div>
      </div>
    </div>
  )
}