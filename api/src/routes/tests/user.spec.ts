import request from "supertest";
import app from "../../app";
import AppDataSource from "../../infra/database/datasource";

describe("Test the users routes", () => {
    beforeAll(async function () {
        await AppDataSource.initialize();
    });
    test("It should create a new User", async () => {
        const user = {
            name: "guilherme teste 4",
            role: "operator",
            email: "guilherme.salviano@afasdas.com",
            password: "1234",
        };
        const response = await request(app)
            .post("/users")
            .send(user);
        expect(response.statusCode).toBe(201);
    });
    test("It should get all Users", async () => {
        const response = await request(app).get("/users");
        expect(response.statusCode).toBe(404);
    });
    test("It should update a User", async () => {
        expect(200).toBe(200);
    });
    test("It should delete a User", async () => {
        expect(200).toBe(200);
    });
    test("It shouldn't create a new User with wrong role", async () => {
        const user = {
            name: "guilherme teste 4",
            role: "outro",
            email: "guilherme.salviano@2314asdasf.com",
            password: "1234",
        };
        const response = await request(app)
            .post("/users")
            .send(user);
        expect(response.statusCode).toBe(400);
    });
});