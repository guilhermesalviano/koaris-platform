import { Request, Response } from "express";

import { ContactsService } from "../services/ContactsService";


class ContactsController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, phone, source, organization_id } = request.body;

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
            return response.json(contact);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { ContactsController }