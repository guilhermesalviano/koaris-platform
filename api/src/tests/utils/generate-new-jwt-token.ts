import request from "supertest";
import app from "../../app";

export async function generateNewJWTToken(): Promise<string> {
    const login = {
        email: process.env.KOARIS_USER_TEST,
        password: process.env.KOARIS_PASSWORD_TEST
    };
    const response = await request(app)
        .post("/login")
        .send(login);
    return response.body.access_token;
}