import { UsersRespository } from "../repositories/UsersRepository";
import { User } from "../../enterprise/entities/user";
import { Email } from "../../enterprise/entities/value-objects/email";
import { Role } from "../../enterprise/entities/value-objects/role";
import { ServiceGeneric } from "../../../../core/services/service.generic";

interface IUser {
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

    async index(): Promise<IUser[]> {
        const users = await this.genericRepository.find();
        return users;
    }

    async create(user: IUser): Promise<IUser> {
        if (!user.name || !user.role || !user.email || !user.password)
            throw new Error(`Alguns campos faltando.`);

        user.email = Email.emailNormalizer(user.email);

        if (!Email.emailValidator(user.email))
            throw new Error('E-mail inválido.');

        const emailAlreadyExists = await this.genericRepository.findOne({ 
            where: { 
                email: user.email,
            } 
        });

        if (emailAlreadyExists)
            throw new Error('Email already exists');

        user.role = Role.checkRole(user.role);

        const userCreated = this.genericRepository.create(user);

        await this.genericRepository.save(userCreated);

        return userCreated;
    }
}

export { UsersService }