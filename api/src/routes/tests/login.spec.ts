import request from "supertest";
import { LoginService } from "../../domain/control-panel/application/services/LoginService";
import app from "../../app";

describe("Test Login", () => {
    test("It should generate a new jwt", async () => {
        const loginService = new LoginService();
        const token = await loginService.generateAccessToken({ sub: "af453ac6-e3d4-44f4-9c98-8ad49f0cf0be" });
        expect(token).toBeDefined();
    });
    test("It should to generate a new login", async () => {
        const response = await request(app).post("/login").send({
            email: "guilherme.salviano12@outlook.com",
            password: "1234"
        });
    });
});