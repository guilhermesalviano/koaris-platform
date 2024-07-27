"use client"
import { Button, Form, Heading, Input, Link, Text } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

type signInData = {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<signInData>()
  const { signIn } = useContext(AuthContext)

  const router = useRouter()

  const handleSignIn: SubmitHandler<signInData> = async (data) => {
    await signIn(data)
    router.push('/dashboard') // or wherever you want to redirect after successful login
  }

  return (
    <div className="w-full bg-background flex justify-center h-screen">
      <div className="w-full h-screen rounded-2xl">
        <Header />
        <main className="flex items-center justify-center pt-20 h-full pl-32 pr-32">
          <Form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col bg-neutral border-neutral rounded-md border shadow p-8 gap-2 min-w-[400px] max-w-[680px] w-full">
            <Heading className="sm:text-2xl text-xl font-bold text-left">Login</Heading>
            <Text tag="label">E-mail</Text>
            <Input {...register('email', { required: true })} error={false} type="text" name="email" placeholder="guilhermesalviano177@gmail.com" className="shadow-md text-neutral-800"></Input>
            <Text tag="label">Senha</Text>
            <Input {...register('password', { required: true })} error={false} type="password" name="password" placeholder="********" className="shadow-md text-neutral-800"></Input>
            <Link url="/recovery" newPage={false} className="text-orange-500 font-normal">Esqueci minha senha</Link>
            <div className="w-36 flex self-end">
              <Button>Login</Button>
            </div>
          </Form>
        </main>
      </div>
    </div>
  )
}
