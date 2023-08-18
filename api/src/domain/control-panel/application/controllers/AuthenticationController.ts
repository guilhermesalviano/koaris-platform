import { Request, Response } from "express";
import { Password } from "../../enterprise/entities/value-objects/password";
import { AuthenticationService } from "../services/AuthenticationService";
import bcrypt from "bcryptjs";

interface AuthenticationControllerProps {
    email: string;
    password: string;
}

export class AuthenticationController {

    /**
     * recieve email and password and return jwt token
     * @param request email and password
     * @param response jwt token
     */
    async authenticate(request: Request, response: Response): Promise<Response> {
        const data: AuthenticationControllerProps = request.body;

        try {
            this?.verifyPassword(data.password);

            const authenticationService = new AuthenticationService();
            const user = await authenticationService.checkIfUserExists(data);

            if (!bcrypt.compareSync(data.password, user.password)) throw new Error('Senha incorreta.');

            const result = await authenticationService.generateAccessToken({ sub: user.id });

            return response.status(200).json({ access_token: result });
        } catch (error: any) {
            return response.status(401).json({
                message: error.message
            });
        }
    }

    verifyPassword(passwordRecieved: string): void {
        if (!Password.checkPassword(passwordRecieved))
            throw new Error('Senha inválida.');
        if (!passwordRecieved) throw new Error('Insira uma senha.');
    }

}