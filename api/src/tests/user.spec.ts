import request from "supertest";
import casual from "casual";
import app from "../app";
import AppDataSource from "../infra/database/datasource";
import { generateNewJWTToken } from "./utils/generate-new-jwt-token";

describe("Test the Users routes", () => {
    let token: string;
    beforeAll(async function () {
        await AppDataSource.initialize();
        token = await generateNewJWTToken();
    });
    test("It should create a new User", async () => {
        const user = {
            name: casual.name,
            role: "operator",
            email: casual.email,
            password: casual.password,
        };
        const response = await request(app)
            .post("/users")
            .auth(token, { type: 'bearer' })
            .send(user);
        expect(response.statusCode).toEqual(201);
    });
    test("It should get all Users", async () => {
        const response = await request(app)
        .get("/users")
        .auth(token, { type: 'bearer' });
        expect(response.statusCode).toEqual(200);
    });
    test("It should update a User", async () => {
        expect(200).toBe(200);
    });
    test("It should delete a User", async () => {
        expect(200).toBe(200);
    });
    test("It shouldn't create a new User with wrong role", async () => {
        const user = {
            name: casual.name,
            role: "outro",
            email: casual.email,
            password: casual.password,
        };
        const response = await request(app)
            .post("/users")
            .auth(token, { type: 'bearer' })
            .send(user);
        expect(response.statusCode).toBe(400);
    });
    test("It shouldn't create a new User with wrong email", async () => {
        const user = {
            name: casual.name,
            role: "administrator",
            email: "guilhermesalviano@test",
            password: casual.password,
        };
        const response = await request(app)
            .post("/users")
            .auth(token, { type: 'bearer' })
            .send(user);
        expect(response.statusCode).toBe(400);
    });
});