import jwt from "jsonwebtoken";
import "dotenv/config"

export class LoginService {

    public async generateAccessToken(userId: any): Promise<string> {
        return await jwt.sign(userId, process.env.JWT_SECRET, { expiresIn: '1800s' });
    }
}