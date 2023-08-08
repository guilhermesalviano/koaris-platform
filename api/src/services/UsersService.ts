import { EntityManager, FindOneOptions } from "typeorm";
import datasource from "../database/datasource";
import { getUserRepository } from "../repositories/UsersRepository";

interface IUsersCreate {
    name: string;
    role: string;
    email: string;
    password: string;
}

class UsersService {
    async create({ name, role, email, password }: IUsersCreate) {
        const userManager = new EntityManager(datasource);

        const usersRepository = getUserRepository(userManager);

        const emailAlreadyExists = await usersRepository.findOne({ 
            where: { 
              email
            } 
        });

        if (emailAlreadyExists) {
            throw new Error('Email already exists');
        }

        const users = usersRepository.create({
            name,
            role,
            email,
            password
        });

        await usersRepository.save(users);

        return users;
    }
}

export { UsersService }