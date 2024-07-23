"use client"
import { Button, Heading, Input, Link, Text } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";

export default function Login() {
  return (
    <div className="w-full bg-background flex justify-center h-screen">
      <div className="w-full h-screen rounded-2xl">
        <Header />
        <main className="flex items-center justify-center pt-20 h-full pl-32 pr-32">
          <div className="flex flex-col rounded-md border shadow p-8 gap-2 min-w-[400px] max-w-[680px] w-full">
            <Heading className="sm:text-2xl text-xl font-bold text-left">Login</Heading>
            <Text tag="label">E-mail</Text>
            <Input error={false} type="text" placeholder="guilhermesalviano177@gmail.com" className="shadow-md"></Input>
            <Text tag="label">Senha</Text>
            <Input error={false} type="text" placeholder="********" className="shadow-md"></Input>
            <Link url="/recovery" newPage={false} className="text-orange-500 font-normal">Esqueci minha senha</Link>
            <div className="w-36 flex self-end">
              <Button>Login</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
