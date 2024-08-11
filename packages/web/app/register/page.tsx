"use client"
import { Button, Checkbox, Form, Heading, Input, Link, Text } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod';
import { api } from "../../lib/api";

const createEanSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

type registerData = z.infer<typeof createEanSchema>;

export default function Register() {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ terms, setTerms ] = useState(false)
  const [disableButton, setDisableButton ] = useState(false)
  const router = useRouter();

  function handleChange(value: string, setValue: (value: string) => void) {
    setValue(value);
  }

  async function handleRegister() {
    try {
      const response = await api.post('/users',
        { name, email, role: "administrator", password: '123ajsdajd212312!' },
      )
      if (response.status === 201) {
        router.push('/register/organization')
        return
      }
      alert("Tente novamente.")
    } catch (error: any) {
      console.log(JSON.stringify(error.message))
    }
  }

  return (
    <div className="w-full bg-background flex justify-center h-screen">
      <div className="w-full h-screen rounded-2xl">
        <Header />
        <main className="flex items-center justify-center pt-20 h-full pl-32 pr-32">
          <div className="flex flex-col rounded-md border shadow p-8 gap-2 min-w-[400px] max-w-[680px] w-full">
            <Heading className="sm:text-3xl text-2xl font-bold text-left">
              Cadastro de usuário
            </Heading>
            <Form onSubmit={() => handleRegister()} method="post" className="bg-white flex-col border-0 p-0">
              <Text tag="label">Nome</Text>
              <Input onChange={e => handleChange(e.target.value, setName)} value={name} error={false} type="text" name="name" required placeholder="Rodolfo" className="shadow-md text-neutral-800"></Input>
              <Text tag="label">E-mail</Text>
              <Input onChange={e => handleChange(e.target.value, setEmail)} value={email} error={false} type="text" name="email" required placeholder="email@email.com" className="shadow-md text-neutral-800"></Input>
              <Text tag="label">Telefone</Text>
              <Input onChange={e => handleChange(e.target.value, setPhone)} value={phone} error={false} type="phone" name="phone" placeholder="(11)91234-5678" className="shadow-md text-neutral-800"></Input>
              <div className="flex pt-2">
                <Checkbox
                  id="terms"
                  onClick={(e) => setTerms(true)}
                  required
                />
                <Text>Aceito <Link url="/privacy" newPage={true}>políticas de privacidade</Link> e <Link url="/terms" newPage={true}>termos de uso</Link>.</Text>
              </div>
              <div className="w-36 flex self-end">
                <Button type="submit" disabled={disableButton} onClick={() => {
                  setDisableButton(true)
                  setTimeout(() => {setDisableButton(false)}, 500)
                }}>Continuar</Button>
              </div>
            </Form>
          </div>
        </main>
      </div>
    </div>
  )
}
