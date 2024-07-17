import { Card } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";

export default function Product() {
    return (
        <div className="">
            <Header />
            <main className="flex justify-center items-center h-screen gap-2 p-4">
                <Card
                    title="Gestão Online"
                    content="Otimize seus processos"
                    direction="col"
                    size="medium"
                    imageSize="190px" image="/product1.svg"
                    className="w-72"
                ></Card>
                <Card
                    title="Agendamentos"
                    content="Crie sua agenda pública"
                    direction="col"
                    size="medium"
                    imageSize="200px" image="/product2.svg"
                    className="w-72"
                ></Card>
                <Card
                    title="Gestão Online"
                    content="Otimize seus processos"
                    direction="col"
                    size="medium"
                    imageSize="205px" image="/product3.svg"
                    className="w-72"
                ></Card>
            </main>
        </div>
    )
}
