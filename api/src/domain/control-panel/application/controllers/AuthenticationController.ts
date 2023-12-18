import { Request, Response } from "express";
import { Password } from "../../enterprise/entities/value-objects/password";
import { AuthenticationService } from "../services/AuthenticationService";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";

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
        const authenticationService = new AuthenticationService();

        try {
            authenticationService.verifyPassword(data.password);

            const user = await authenticationService.checkIfUserExists(data);

            if (!bcrypt.compareSync(data.password, user.password)) throw new Error('Senha incorreta.');

            const accessToken = await authenticationService.generateAccessToken({ sub: user.id });
            const refreshToken = await authenticationService.generateRefreshToken({ sub: user.id });

            return response
                .cookie("refreshToken", refreshToken, {
                    path: "/",
                    secure: true,
                    sameSite: true,
                    httpOnly: true
                })
                .status(200)
                .json({ access_token: accessToken });
        } catch (error: any) {
            return response.status(401).json({
                message: error.message
            });
        }
    }

    async verifyJWTResfreshToken(request: Request, response: Response, next: any): Promise<Response> {
        const authenticationService = new AuthenticationService();

        try {
            const refreshToken = request.headers.cookie.split("=")[1];
            await AuthenticationService.verifyRefreshToken(refreshToken);

            const userId = Object(jwt.decode(refreshToken)).sub;
            const newRefreshToken = await authenticationService.generateRefreshToken({ sub: userId });
            const accessToken = await authenticationService.generateAccessToken({ sub: userId });

            return response
                .cookie("refreshToken", newRefreshToken, {
                    path: "/",
                    secure: true,
                    sameSite: true,
                    httpOnly: true
                })
                .status(200)
                .json({ access_token: accessToken });
        } catch (error) {
            return response.status(401).json({ message: "Login necessário." });
        }
    }

}