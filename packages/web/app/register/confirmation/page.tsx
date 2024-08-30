"use client"
import { Button, Checkbox, Form, Heading, Input, Link, Text } from "@koaris/bloom-ui";
import { Header } from "../../../components/Header";
import nookies from 'nookies'
import { useRouter } from "next/navigation";
import { api } from "../../../lib/api";
import { useEffect, useState } from "react";

export default function Confirmation() {
  const router = useRouter();
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  async function handleRegister() {    
    if (password !== passwordConfirmation) {
      alert('As senhas não conrrespondem.')
      return
    }

    const registerInfo = JSON.parse(nookies.get(null, 'register').register);
    
    try {
      const response = await api.post('/register',
        { ...registerInfo, password },
      )

      console.log(response.data)

      if (response.data.message) {
        alert(response.data.message);
        return;
      }

      const { access_token } = response.data
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)

      nookies.set(null, 'koaris.token', access_token, { expires, httpOnly: false })
      nookies.destroy(null, 'register')

      if (response.status === 201) {
        router.push('/register/organization')
        return
      }
      alert("Tente novamente.")
    } catch (error: any) {
      //if (error.status === 404) {
      alert(error.message + " - " + error.status);
        //return;
      //}
      console.log(JSON.stringify(error.message))
    }
  }

  function handleChange(value: string, setValue: (value: string) => void) {
    setValue(value);
  }

  useEffect(() => {

  }, [])

  return (
    <div className="w-full bg-background flex justify-center h-screen">
      <div className="w-full h-screen rounded-2xl">
        <Header />
        <main className="flex items-center justify-center pt-20 h-full pl-32 pr-32">
          <div className="flex flex-col rounded-md border shadow p-8 gap-2 min-w-[400px] max-w-[680px] w-full">
            <Form onSubmit={() => handleRegister()} method="post" className="bg-white text-neutral-800 flex-col border-0 p-0">
              <Heading className="sm:text-3xl text-2xl font-bold text-left">
                Para finalizar, defina sua senha
              </Heading>
              <Text tag="label">Senha</Text>
              <Input error={false} onChange={e => handleChange(e.target.value, setPassword)} value={password}  type="password" name="password" placeholder="**********" className="shadow-md"></Input>
              <Text tag="label">Repita sua Senha</Text>
              <Input error={false} onChange={e => handleChange(e.target.value, setPasswordConfirmation)} value={passwordConfirmation} type="password" name="password" placeholder="**********" className="shadow-md"></Input>
              <div className="w-36 flex self-end">
                <Button>Finalizar</Button>
              </div>
            </Form>
          </div>
        </main>
      </div>
    </div>
  )
}
