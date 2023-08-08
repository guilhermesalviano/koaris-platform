import { Request, Response } from "express";

import { OrganizationsService } from "../services/OrganizationsService";


class OrganizationsController {
    async create(request: Request, response: Response): Promise<Response> {
        const { identification, name, description, logo, user_id } = request.body;

        const data = {
            identification,
            name,
            description,
            logo,
            user_id
        };

        const organizationsService = new OrganizationsService();

        try {
            const organization = await organizationsService.create(data);
            return response.json(organization);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { OrganizationsController }