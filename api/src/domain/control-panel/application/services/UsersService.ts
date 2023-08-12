import { EntityManager, Repository } from "typeorm";
import { getUserRepository } from "../repositories/UsersRepository";
import { User } from "../../enterprise/entities/user";
import datasource from "../../../../infra/database/datasource";
import { Email } from "../../enterprise/entities/value-objects/email";
import { Role } from "../../enterprise/entities/value-objects/role";

interface IUsers {
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

    async create({ name, role, email, password }: IUsers): Promise<IUsers> {
        if (!name || !role || !email || !password) {
            throw new Error(`Alguns campos faltando.`);
        }

        if (!Email.emailValidator(email)) {
            throw new Error('E-mail inválido.');
        }

        const emailAlreadyExists = await this.usersRepository.findOne({ 
            where: { 
              email
            } 
        });

        if (emailAlreadyExists) {
            throw new Error('Email already exists');
        }

        role = Role.checkRole(role);

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