import { Request, Response } from "express";

import { ServicesService } from "../services/ServicesService";

interface ServicesControllerProps {
    name: string;
    description: string;
    logo: string;
    price?: string;
}

class ServicesController {

    async index(request: Request, response: Response): Promise<Response> {
        try {
            const servicesService = new ServicesService();
            const services = await servicesService.index();
            return response.json(services);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async create(request: Request, response: Response): Promise<Response> {
        const data: ServicesControllerProps = request.body;

        try {
            const servicesService = new ServicesService();
            const service = await servicesService.create(data);
            return response.status(201).json(service);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        const data: ServicesControllerProps = request.body;

        try {
            const servicesService = new ServicesService();
            const result = await servicesService.update(data);
            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const contact: ServicesControllerProps = request.body;

        try {
            const servicesService = new ServicesService();
            const result = await servicesService.delete(contact);
            const resultConfig = (result)? { status: 200, message: "Serviço deletado." } : { status: 404, message: "Serviço não encontrado." };
            return response.status(resultConfig.status).json({ message: resultConfig.message });
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { ServicesController }