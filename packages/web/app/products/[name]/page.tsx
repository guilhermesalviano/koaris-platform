"use client"
import { Button, Form, Heading, Input, Text } from "@koaris/bloom-ui";
import { Header } from "../../../components/Header";

export default function Product() {
  return (
    <div className="">
      <Header />
      <main className="pt-32 pl-4 pr-4">
        <Heading tag="h1" size="3xl" className="font-bold" >
          Informações obrigatórias
        </Heading>
        <Text>
          Para ativar o sistema de gestão online, complete as seguintes informações.
        </Text>

        <Form className="border-0 flex-col p-0 mt-10">
          <Text tag="label">
            Nome fantasia
          </Text>
          <Input placeholder="Google"
            type="text"
            value=""
            error={false} />

          <Text tag="label">
            CPF/CNPJ
          </Text>
          <Input placeholder="123.456.789-12"
            type="text"
            value=""
            error={false} />

          <Text tag="label">
            Endereço, rua e complemento
          </Text>
          <Input placeholder="texto"
            type="text"
            value=""
            error={false} />

          <Text tag="label">
            E-mail de contato
          </Text>
          <Input placeholder="email@email.com"
            type="text"
            value=""
            error={false} />

          <Text tag="label">
            Telefone
          </Text>
          <Input placeholder="(DD)123456789"
            type="text"
            value=""
            error={false} />

          <div className="flex justify-between">
            <Button variant="secondary" size="md">
              Cancelar
            </Button>
            <Button variant="primary" size="md" type="submit" disabled={false} onClick={() => console.log('a')}>
              Continuar
            </Button>
          </div>
        </Form>
      </main>
    </div>
  )
}
