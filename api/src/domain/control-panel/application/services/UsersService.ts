import { UsersRespository } from "../repositories/UsersRepository";
import { User } from "../../enterprise/entities/user";
import { Email } from "../../enterprise/entities/value-objects/email";
import { Role } from "../../enterprise/entities/value-objects/role";
import { ServiceGeneric } from "../../../../core/services/service.generic";

interface IUsers {
    id?: string;
    name: string;
    role: string;
    email: string;
    password: string;
}

class UsersService extends ServiceGeneric<User> {
    constructor() {
        super(UsersRespository)
    }

    async create({ name, role, email, password }: IUsers): Promise<IUsers> {
        if (!name || !role || !email || !password) {
            throw new Error(`Alguns campos faltando.`);
        }

        if (!Email.emailValidator(email)) {
            throw new Error('E-mail inválido.');
        }

        email = Email.emailNormalizer(email);

        const emailAlreadyExists = await this.genericRepository.findOne({ 
            where: { 
              email
            } 
        });

        if (emailAlreadyExists) {
            throw new Error('Email already exists');
        }

        role = Role.checkRole(role);

        const users = this.genericRepository.create({
            name,
            role,
            email,
            password
        });

        await this.genericRepository.save(users);

        return users;
    }
}

export { UsersService }