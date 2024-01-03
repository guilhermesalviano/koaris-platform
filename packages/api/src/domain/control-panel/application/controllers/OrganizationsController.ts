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

    async index(request: Request, response: Response): Promise<Response> {
        try {
            const organizationsService = new OrganizationsService();
            const organizations = await organizationsService.index();
            return response.json(organizations);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async create(request: Request, response: Response): Promise<Response> {
        const data: OrganizationsControllerProps = request.body;

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
}

export { OrganizationsController }