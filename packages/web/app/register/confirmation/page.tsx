"use client"
import { Button, Checkbox, Heading, Input, Link, Text } from "@koaris/bloom-ui";
import { Header } from "../../../components/Header";

export default function Login() {
  return (
    <div className="w-full bg-background flex justify-center h-screen">
      <div className="w-full h-screen rounded-2xl">
        <Header />
        <main className="flex items-center justify-center pt-20 h-full pl-32 pr-32">
          <div className="flex flex-col rounded-md border shadow p-8 gap-2 min-w-[400px] max-w-[680px] w-full">
            <Heading className="sm:text-3xl text-2xl font-bold text-left">
              Para finalizar, defina sua senha
            </Heading>
            <Text tag="label">Senha</Text>
            <Input error={false} type="password" name="password" placeholder="**********" className="shadow-md"></Input>
            <Text tag="label">Repita sua Senha</Text>
            <Input error={false} type="password" name="password" placeholder="**********" className="shadow-md"></Input>
            <div className="w-36 flex self-end">
              <Button>Finalizar</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
