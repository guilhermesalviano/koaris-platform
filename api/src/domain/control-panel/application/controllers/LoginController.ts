import { Request, Response } from "express";
import { LoginService } from "../services/LoginService";
import bcrypt from "bcryptjs";

interface LoginControllerProps {
    email: string;
    password: string;
}

export class LoginController {
    
    /**
     * recieve email and password and return jwt token
     * @param request email and password
     * @param response jwt token
     */
    async login(request: Request, response: Response): Promise<Response> {
        const data: LoginControllerProps = request.body;

        try {
            // generate password hash
            data.password = await bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
            // check if has login and password in Database
            const loginService = new LoginService();
            const user = await loginService.checkIfUserExists(data);
            // compare password hash against hash in database
            if (data.password === user.password) throw new Error('Senha incompatível');
            // if true, return a refresh token
            const result = await loginService.generateRefreshToken({ sub: user.id });
            return response.status(200).json({ access_token: result });
        } catch (error: any) {
            // if false, return error 401
            return response.status(401).json({
                message: error.message
            });
        }
    }
}