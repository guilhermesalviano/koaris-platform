import { Request, Response } from "express";
import { LoginService } from "../services/LoginService";

interface LoginControllerProps {
    email: string;
    password: string;
}

export class LoginController {
    
    async login(request: Request, response: Response): Promise<Response> {
        const data: LoginControllerProps = request.body;

        try {
            // decrypt password
            // check if has login and password in Database
            const loginService = new LoginService();
            const user = await loginService.checkIfUserExists(data);
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