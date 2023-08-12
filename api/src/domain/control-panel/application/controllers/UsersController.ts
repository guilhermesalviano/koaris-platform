import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";
import { Role } from "../../enterprise/entities/value-objects/role";
import { Email } from "../../enterprise/entities/value-objects/email";

interface UsersControllerProps {
    name: string;
    role: string;
    email: string;
    password: string;
}
class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, role, email, password }: UsersControllerProps = request.body;

        if (!name || !role || !email || !password) {
            throw new Error(`Some field missing.`);
        }

        if (!Email.valideEmail(email)) {
            throw new Error('Invalid email');
        }

        try {
            const data = { 
                name,
                role: Role.checkRole(role),
                email,
                password 
            };

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