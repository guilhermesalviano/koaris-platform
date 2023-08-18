import { ServiceGeneric } from "../../../../core/services/service.generic";
import { UsersRespository } from "../repositories/UsersRepository";
import { User } from "../../enterprise/entities/user";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import { Email } from "../../enterprise/entities/value-objects/email";
import { Password } from "../../enterprise/entities/value-objects/password";

interface IUser {
    id?: string;
    name: string;
    role: string;
    email: string;
    password: string;
}

export class AuthenticationService extends ServiceGeneric<User> {
    constructor() {
        super(UsersRespository)
    }

    public async generateAccessToken(userId: { sub: string }): Promise<string> {
        return await jwt.sign(userId, process.env.JWT_SECRET, { expiresIn: '480m' });
    }

    public async generateRefreshToken(userId: { sub: string }): Promise<string> {
        return await jwt.sign(userId, process.env.JWT_SECRET, { expiresIn: '7d' });
    }

    public verifyPassword(passwordRecieved: string): void {
        if (!Password.checkPassword(passwordRecieved))
            throw new Error('Senha inválida.');
        if (!passwordRecieved) throw new Error('Insira uma senha.');
    }

    public async checkIfUserExists({ email, password }: { email: string; password: string }): Promise<IUser> {
        if (!email || !password) throw new Error('Alguns campos faltando.');
        email = Email.emailNormalizer(email);
        const user = await this.genericRepository.findOne({ where: { email } });
        if (!user) throw new Error('Usuário não encontrado.');
        return user;
    }

    static async verifyAccessToken(token: string): Promise<boolean> {
        await jwt.verify(token.replace("Bearer", "").trim(), process.env.JWT_SECRET, (error: any) => {
            if (error) throw new Error(`${error}`);
        });
        return true;
    }

    static async verifyRefreshToken(refreshToken: string): Promise<boolean> {
        await jwt.verify(refreshToken, process.env.JWT_SECRET, (error: TokenExpiredError) => {
            if (error) {
                if (error.message === 'jwt expired') throw new Error('Login necessário.');
                else throw new Error('Refresh token inválido.');
            }
        });
        return true;
    }

}