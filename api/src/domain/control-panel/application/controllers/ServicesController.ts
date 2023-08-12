import { Request, Response } from "express";

import { ServicesService } from "../services/ServicesService";

interface ServicesControllerProps {
    name: string;
    description: string;
    logo: string;
    price?: string;
}

class ServicesController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, description, logo, price }: ServicesControllerProps = request.body;

        const data = {
            name,
            description,
            logo,
            price
        };

        const servicesService = new ServicesService();

        try {
            const service = await servicesService.create(data);
            return response.status(201).json(service);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async index(request: Request, response: Response): Promise<Response> {
        const servicesService = new ServicesService();

        try {
            const services = await servicesService.index();
            return response.json(services);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { ServicesController }