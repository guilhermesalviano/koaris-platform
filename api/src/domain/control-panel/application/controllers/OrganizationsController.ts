import { Request, Response } from "express";

import { OrganizationsService } from "../services/OrganizationsService";

interface OrganizationsControllerProps {
    identification: string;
    name: string;
    description: string;
    logo?: string;
    user_id: string;
}

class OrganizationsController {
    async create(request: Request, response: Response): Promise<Response> {
        const { identification, name, description, logo, user_id }: OrganizationsControllerProps = request.body;

        const data = {
            identification,
            name,
            description,
            logo,
            user_id
        };

        try {
            const organizationsService = new OrganizationsService();
            const organization = await organizationsService.create(data);
            return response.status(201).json(organization);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async index(request: Request, response: Response): Promise<Response> {
        const organizationsService = new OrganizationsService();

        try {
            const organizations = await organizationsService.index();
            return response.json(organizations);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { OrganizationsController }