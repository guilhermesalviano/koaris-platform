import { Request, Response } from "express";

import { ContactsService } from "../services/ContactsService";

interface ContactsControllerProps {
    name: string;
    email?: string;
    phone?: string;
    source?: string;
    organization_id: string;
}

class ContactsController {
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
            const contact = await contactsService.create(data);
            return response.status(201).json(contact);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

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
}

export { ContactsController }