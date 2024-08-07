"use client"
import { Button, Heading, Input, Text } from "@koaris/bloom-ui";

interface ModalCreateUserProps {
    opened: boolean;
}


export function ModalCreateUser({ opened }: ModalCreateUserProps) {
    return (
        <div className="container bg-neutral-800 absolute p-10 z-50">
            <div className={`flex flex-col top-[50%] p-4 bg-background bg-neutral-200 min-w-[600px] rounded-lg ${opened? "block" : "hidden"} `}>
                <div className="modal-head border-b border-neutral-400 pb-2">
                    <Heading className="text-xl">Criar um novo usuário</Heading>
                </div>
                <div className="modal-body flex flex-col w-full pt-2">
                    <Text>E-mail</Text>
                    <Input type="text" error={false}></Input>
                    <Text>Nome completo</Text>
                    <Input type="text" error={false}></Input>
                    <Text>Celular</Text>
                    <Input type="phone" placeholder="(11) 91234-5678" error={false}></Input>
                    <Text>Telefone</Text>
                    <Input type="phone" placeholder="(11) 1234-5678" error={false}></Input>
                    <Text>Tipo de cadastro</Text>
                    <select>
                        <option value="">Cliente</option>
                        <option value="">Operador</option>
                    </select>
                    <Text>Organização</Text>
                    <select>
                        <option value="">Alphapoint</option>
                        <option value="">Alphamarket</option>
                    </select>
                </div>
            </div>
        </div>
    )
}