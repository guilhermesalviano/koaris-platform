import { Request, Response } from "express";
import { EntityManager } from "typeorm";
import datasource from "../database/datasource";
import { getUserRepository } from "../repositories/UsersRepository";

class UsersController {
    async create(request: Request, response: Response) {
        const { name, role, email, password } = request.body;

        const userManager = new EntityManager(datasource);

        const usersRepository = getUserRepository(userManager);

        const users = usersRepository.create({
            name,
            role,
            email,
            password
        });

        await usersRepository.save(users);

        return response.json(users);
    }
}

export { UsersController }