import { EntityManager, FindOneOptions, Repository } from "typeorm";
import datasource from "../../infra/database/datasource";
import { getUserRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";

interface IUsersCreate {
    name: string;
    role: string;
    email: string;
    password: string;
}

class UsersService {
    private userManager: EntityManager;
    private usersRepository: Repository<User>;

    constructor() {
        this.userManager = new EntityManager(datasource);
        this.usersRepository = getUserRepository(this.userManager);
    }

    async create({ name, role, email, password }: IUsersCreate) {
        const emailAlreadyExists = await this.usersRepository.findOne({ 
            where: { 
              email
            } 
        });

        if (emailAlreadyExists) {
            throw new Error('Email already exists');
        }

        const users = this.usersRepository.create({
            name,
            role,
            email,
            password
        });

        await this.usersRepository.save(users);

        return users;
    }
}

export { UsersService }