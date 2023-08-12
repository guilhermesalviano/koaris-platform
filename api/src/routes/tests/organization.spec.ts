import request from "supertest";
import casual from "casual";
import { generate as cpfGenerate } from "gerador-validador-cpf";
import app from "../../app";
import AppDataSource from "../../infra/database/datasource";

describe("Test the organizations routes", () => {
    beforeAll(async function () {
        await AppDataSource.initialize();
    });
    test("It should create a new Organization", async () => {
        const organization = {
            name: casual.company_name,
            description: casual.description,
            logo: "https://w7.pngwing.com/pngs/874/15/png-transparent-graphic-designer-logo-bd-logo-web-design-user-interface-design-text.png",
            identification: cpfGenerate().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
            user_id: "af453ac6-e3d4-44f4-9c98-8ad49f0cf0be",
        };
        const response = await request(app)
            .post("/organizations")
            .send(organization);
        expect(response.statusCode).toBe(201);
    });
    test("It should get all Organizations", async () => {
        const response = await request(app).get("/organizations");
        expect(response.statusCode).toBe(200);
    });
    test("It should update a Organization", async () => {
        expect(200).toBe(200);
    });
    test("It should delete a Organization", async () => {
        expect(200).toBe(200);
    });
});