import { ServiceGeneric } from "../../../../core/services/service.generic";
import { UsersRespository } from "../repositories/UsersRepository";
import { User } from "../../enterprise/entities/user";
import jwt from "jsonwebtoken";
import "dotenv/config"

interface IUser {
    id?: string;
    name: string;
    role: string;
    email: string;
    password: string;
}

export class LoginService extends ServiceGeneric<User> {
    constructor() {
        super(UsersRespository)
    }

    static async verifyAccessToken(token: string): Promise<any> {
        return await jwt.verify(token.replace("Bearer", "").trim(), process.env.JWT_SECRET, (error: any) => {
            if (error) throw new Error(`${error}`);
        });
    }

    public async generateRefreshToken(userId: { sub: string }): Promise<string> {
        return await jwt.sign(userId, process.env.JWT_SECRET, { expiresIn: '1800s' });
    }

    public async checkIfUserExists({ email, password }: { email: string; password: string }): Promise<IUser> {
        if (!email || !password) throw new Error('Alguns campos faltando.');
        const user = await this.genericRepository.findOne({ where: { email, password } });
        if (!user) throw new Error('Usuário não encontrado.');
        return user;
    }
}