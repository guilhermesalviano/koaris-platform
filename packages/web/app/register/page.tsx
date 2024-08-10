"use client"
import { Button, Checkbox, Heading, Input, Link, Text } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";

export default function Login() {
  return (
    <div className="w-full bg-background flex justify-center h-screen">
      <div className="w-full h-screen rounded-2xl">
        <Header />
        <main className="flex items-center justify-center pt-20 h-full pl-32 pr-32">
          <div className="flex flex-col rounded-md border shadow p-8 gap-2 min-w-[400px] max-w-[680px] w-full">
            <Heading className="sm:text-3xl text-2xl font-bold text-left">
              Cadastro de usuário
            </Heading>
            <Text tag="label">Nome</Text>
            <Input error={false} type="text" name="name" placeholder="Rodolfo" className="shadow-md"></Input>
            <Text tag="label">E-mail</Text>
            <Input error={false} type="text" name="email" placeholder="email@email.com" className="shadow-md"></Input>
            <Text tag="label">Telefone</Text>
            <Input error={false} type="phone" name="phone" placeholder="(11)91234-5678" className="shadow-md"></Input>
            <div className="flex pt-2">
              <Checkbox
                onClick={() => { }}
                required
              />
              <Text>Aceito <Link url="/" newPage={true}>políticas de privacidade</Link> e <Link url="/" newPage={true}>termos de uso</Link>.</Text>
            </div>
            <div className="w-36 flex self-end">
              <Button>Continuar</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
