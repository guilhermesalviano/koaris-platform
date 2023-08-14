import { Request, Response } from "express";
import { LoginService } from "../../domain/control-panel/application/services/LoginService";

export async function verifyJWT(request: Request, response: Response, next: any): Promise<Response> {
    try {
        await LoginService.verifyAccessToken(request.headers.authorization);
        return next();
    } catch (error) {
        return response.status(401).json({ message: "Acesso não autorizado."})
    }
}