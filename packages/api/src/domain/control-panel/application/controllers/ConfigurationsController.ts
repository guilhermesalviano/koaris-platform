import { Request, Response } from "express";

import { ConfigurationsService } from "../services/ConfigurationsService";

interface ConfigurationsControllerProps {
    id?: string;
    organization_id: string;
    service_id: string;
    logoCustom?: string;
    phone: string;
    socialLinks?: string;
}

class ConfigurationsController {

    async index(request: Request, response: Response): Promise<Response> {
        try {
            const configurationsService = new ConfigurationsService();
            const configurations = await configurationsService.index();
            return response.json(configurations);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async create(request: Request, response: Response): Promise<Response> {
        const data: ConfigurationsControllerProps = request.body;

        try {
            const configurationsService = new ConfigurationsService();
            const result = await configurationsService.create(data);
            return response.status(201).json(result);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        const data: ConfigurationsControllerProps = request.body;

        try {
            const configurationsService = new ConfigurationsService();
            const result = await configurationsService.update(data);
            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const data: ConfigurationsControllerProps = request.body;

        try {
            const configurationsService = new ConfigurationsService();
            const result = await configurationsService.delete(data);
            const resultConfig = (result)? { status: 200, message: "Configuração deletada." } : { status: 404, message: "Configuração não encontrada." };
            return response.status(resultConfig.status).json({ message: resultConfig.message });
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { ConfigurationsController }