"use client"
import { Button, Card, Form, Heading, Input, Text } from "@koaris/bloom-ui"
import { Header } from "../../../components/Header"

export default function Payment() {
    return (
        <div className="">
            <Header />
            <main className="pt-24 pl-4 pr-4">
                <Heading tag="h1" size="3xl" className="font-bold" >
                    Mensalidade
                </Heading>
                <Text>
                    Selecione qual modalidade você deseja assinar.
                </Text>
                <Form className="border-0 flex-col p-0 mt-10 bg-neutral">
                    <Text tag="strong" size="xl">
                        1. Tipo de assinatura
                    </Text>
                    <div className="flex gap-2">
                        <Card
                            title="Assinatura Mensal"
                            content="Assine agora mesmo e comece a utilizar."
                            imageSize="80px"
                            image="/site_institucional.svg"
                            className="p-8 h-36 gap-2"
                        ></Card>
                        <Card
                            title="Assinatura Trimestral"
                            content="Adiante o pagamento dos próximos três meses com 17% de desconto."
                            imageSize="80px"
                            image="/site_institucional.svg"
                            className="p-8 h-36 gap-2"
                        ></Card>
                    </div>
                    <Text tag="strong" size="xl">
                        2. Método de pagamento
                    </Text>
                    <div className="flex gap-2 w-full">
                        <Card
                            title="Boleto"
                            imageSize="80px"
                            image="/site_institucional.svg"
                            className="p-8 h-36 gap-2"
                            size="sm"
                        ></Card>
                        <Card
                            title="Pix"
                            imageSize="80px"
                            image="/site_institucional.svg"
                            className="p-8 h-36 gap-2"
                            size="sm"
                        ></Card>
                        <Card
                            title="Cartão de crédito"
                            imageSize="80px"
                            image="/site_institucional.svg"
                            className="p-8 h-36 gap-2"
                            size="sm"
                        ></Card>
                    </div>
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
