import { Request, Response } from "express";
import { AuthenticationService } from "../../services/AuthenticationService";

export async function verifyJWT(request: Request, response: Response, next: any): Promise<Response> {
    try {
        const result = await AuthenticationService.verifyAccessToken(request.headers.authorization);
        if (result) return next();
        return response.status(500).json({ message: "Erro desconhecido."});
    } catch (error) {
        return response.status(401).json({ message: "Acesso não autorizado."});
    }
}