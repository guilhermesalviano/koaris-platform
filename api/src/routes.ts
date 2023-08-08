import { Router } from "express";
import { getUserRepository } from "./repositories/UsersRepository";
import datasource from "./database/datasource";
import { User } from "./entities/User";
import { EntityManager } from "typeorm";

const routes = Router();

routes.post("/users", async (request, response) => {
    const { name, role, email, password } = request.body;

    const userManage = new EntityManager(datasource);

    const usersRepository = getUserRepository(userManage);

    const users = usersRepository.create({
        name,
        role,
        email,
        password
    });

    await usersRepository.save(users);

    return response.json(users);
})

export { routes };