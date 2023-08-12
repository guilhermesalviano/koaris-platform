import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

interface UsersControllerProps {
    name: string;
    role: string;
    email: string;
    password: string;
}
class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        const data: UsersControllerProps = request.body;

        try {
            const usersService = new UsersService();
            const users = await usersService.create(data);
            return response.status(201).json(users);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            });
        }
    }
}

export { UsersController }