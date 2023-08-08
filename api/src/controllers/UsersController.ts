import { Request, Response } from "express";
import { UsersServices } from "../services/UsersService";


class UsersController {
    async create(request: Request, response: Response) {
        const { name, role, email, password } = request.body;

        const usersService = new UsersServices();
        
        try {
            const users = await usersService.create({ name, role, email, password });
            return response.json(users);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { UsersController }