import request from "supertest";
import { AuthenticationService } from "../domain/control-panel/application/services/AuthenticationService";
import app from "../app";
import AppDataSource from "../infra/database/datasource";

describe("Test Authentication", () => {
    beforeAll(async function () {
        await AppDataSource.initialize();
    });
    let jwt: string;
    test("It should to generate a new Authentication", async () => {
        const authentication = {
            email: process.env.KOARIS_USER_TEST,
            password: process.env.KOARIS_PASSWORD_TEST
        };
        const response = await request(app)
            .post("/login")
            .send(authentication);
        expect(response.statusCode).toEqual(200);
    });
    test("It shouldn't to generate a new Authentication without email or password", async () => {
        const response = await request(app)
            .post("/login")
            .send({
                sub: "920d55ce-4dbd-4793-88b1-8baf0f76bf98"
            });
        expect(response.statusCode).toEqual(401);
    });
    test("It should generate a new JWT", async () => {
        const authenticationService = new AuthenticationService();
        const token = await authenticationService.generateRefreshToken({ sub: "920d55ce-4dbd-4793-88b1-8baf0f76bf98" });
        jwt = token;
        expect(token).toBeDefined();
    });
    test("It should to verify a Authentication", async () => {
        const token = await AuthenticationService.verifyAccessToken(jwt);
        expect(token).toEqual(true);
    });
});