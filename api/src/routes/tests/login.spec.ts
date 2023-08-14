import request from "supertest";
import { LoginService } from "../../domain/control-panel/application/services/LoginService";
import app from "../../app";
import AppDataSource from "../../infra/database/datasource";

describe("Test Login", () => {
    beforeAll(async function () {
        await AppDataSource.initialize();
    });
    let jwt: string;
    test("It should to generate a new Login", async () => {
        const login = {
            email: "guilherme.salviano1@hotmail.com",
            password: "1234"
        };
        const response = await request(app)
            .post("/login")
            .send(login);
        expect(response.statusCode).toEqual(200);
    });
    test("It shouldn't to generate a new Login without email or password", async () => {
        const response = await request(app)
            .post("/login")
            .send({
                sub: "920d55ce-4dbd-4793-88b1-8baf0f76bf98"
            });
        expect(response.statusCode).toEqual(401);
    });
    test("It should generate a new JWT", async () => {
        const loginService = new LoginService();
        const token = await loginService.generateRefreshToken({ sub: "920d55ce-4dbd-4793-88b1-8baf0f76bf98" });
        jwt = token;
        expect(token).toBeDefined();
    });
    test("It should to verify a Login", async () => {
        const loginService = new LoginService();
        const token = await loginService.verifyAccessToken(jwt);
        expect(token).toBeDefined();
    });
});