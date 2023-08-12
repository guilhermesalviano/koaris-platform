import { Request, Response } from "express";

import { ContactsService } from "../services/ContactsService";

interface ContactsControllerProps {
    id?: string;
    name: string;
    email?: string;
    phone?: string;
    source?: string;
    organization_id: string;
    status?: number;
}

class ContactsController {

    async index(request: Request, response: Response): Promise<Response> {
        const contactsService = new ContactsService();

        try {
            const contacts = await contactsService.index();
            return response.json(contacts);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, phone, source, organization_id }: ContactsControllerProps = request.body;

        const data = {
            name,
            email,
            phone,
            source,
            organization_id
        };

        const contactsService = new ContactsService();

        try {
            let result = await contactsService.checkIfEmailAlreadyExistsInDB(data);
            if (result)
                return response.status(200).json({ error: "Email já cadastrado." });
            result = await contactsService.create(data);
            return response.status(201).json(result);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id, name, email, phone, source, organization_id }: ContactsControllerProps = request.body;

        const data = {
            id,
            name,
            email,
            phone,
            source,
            organization_id
        };

        const contactsService = new ContactsService();

        try {
            let result = await contactsService.checkIfEmailAlreadyExistsInDB(data);
            if (!result)
                return response.status(304).json({ error: "Contato não encontrado." });
            result = await contactsService.create(data);
            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { ContactsController }