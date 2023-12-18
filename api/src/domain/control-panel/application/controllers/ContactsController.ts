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
        try {
            const contactsService = new ContactsService();
            const contacts = await contactsService.index();
            return response.json(contacts);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async create(request: Request, response: Response): Promise<Response> {
        const data: ContactsControllerProps = request.body;

        try {
            const contactsService = new ContactsService();
            const result = await contactsService.create(data);
            return response.status(201).json(result);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        const data: ContactsControllerProps = request.body;

        try {
            const contactsService = new ContactsService();
            const result = await contactsService.update(data);
            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const data: ContactsControllerProps = request.body;

        try {
            const contactsService = new ContactsService();
            const result = await contactsService.delete(data);
            const resultConfig = (result)? { status: 200, message: "Contato deletado." } : { status: 404, message: "Contato não encontrado." };
            return response.status(resultConfig.status).json({ message: resultConfig.message });
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { ContactsController }