"use client"
import { Button, Heading, Input, Link, Text } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";

export default function Organization() {
  return (
    <div className="w-full bg-background flex justify-center h-screen">
      <div className="w-full h-screen rounded-2xl">
        <Header />
        <main className="flex items-center justify-center pt-20 h-full pl-32 pr-32">
          <div className="flex flex-col rounded-md border shadow p-8 gap-2 min-w-[400px] max-w-[680px] w-full">
            <Heading className="sm:text-2xl text-xl font-bold text-left">
              Cadastro de Organização
            </Heading>
            <Text tag="label">Nome</Text>
            <Input error={false} type="text" name="name" placeholder="Alpha Bureau" className="shadow-md"></Input>
            <Text tag="label">Descrição</Text>
            <Input error={false} type="text" name="description" placeholder="Detalhes da empresa" className="shadow-md"></Input>
            <Text tag="label">Logo</Text>
            <Input error={false} type="text" name="logo" placeholder="https://logo.imagem.png" className="shadow-md"></Input>
            <Text tag="label">CPF ou CNPJ</Text>
            <Input error={false} type="text" name="identification" placeholder="00.000.000/0000-0 ou 000.000.000-00" className="shadow-md"></Input>
            <div className="w-36 flex self-end">
              <Button>Login</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}