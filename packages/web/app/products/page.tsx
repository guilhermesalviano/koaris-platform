import { Card, Link } from "@koaris/bloom-ui";
import { Header } from "../../components/Header";

export default function Products() {
    return (
        <div className="">
            <Header />
            <main className="flex justify-center items-center h-screen gap-2 p-4">
                <Link url="/products/online-management" newPage={false} className="font-bold">
                    <Card
                        title="Gestão Online"
                        content="Otimize seus processos"
                        direction="col"
                        size="medium"
                        imageSize="190px" image="/product1.svg"
                        className="w-72 hover:border-orange-500"
                    ></Card>
                </Link>
                <Card
                    title="Agendamentos"
                    content="Crie sua agenda pública"
                    direction="col"
                    size="medium"
                    imageSize="200px" image="/product2.svg"
                    className="w-72 hover:border-orange-500"
                ></Card>
                <Card
                    title="Gestão Online"
                    content="Otimize seus processos"
                    direction="col"
                    size="medium"
                    imageSize="205px" image="/product3.svg"
                    className="w-72 hover:border-orange-500"
                ></Card>
            </main>
        </div>
    )
}
