import request from "supertest";
import casual from "casual";
import app from "../app";
import AppDataSource from "../infra/database/datasource";
import { generateNewJWTToken } from "./utils/generate-new-jwt-token";

describe("Test the Services routes", () => {
    let serviceId: string;
    let token: string;
    beforeAll(async function () {
        await AppDataSource.initialize();
        token = await generateNewJWTToken();
    });
    test("It should create a new Service", async () => {
        const service = {
            name: casual.company_name,
            description: casual.description,
            logo: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",
            price: "20,30",
        };
        const response = await request(app)
            .post("/services")
            .auth(token, { type: 'bearer' })
            .send(service);
        expect(response.statusCode).toBe(201);
        serviceId = response.body.id;
    });
    test("It should get all Services", async () => {
        const response = await request(app)
            .get("/services")
            .auth(token, { type: 'bearer' });
        expect(response.statusCode).toBe(200);
    });
    test("It should update a Service", async () => {
        const service = {
            id: serviceId,
            name: casual.company_name,
            description: casual.description,
            logo: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",
            price: "20,30",
        };
        const response = await request(app)
            .put("/services")
            .auth(token, { type: 'bearer' })
            .send(service);
        expect(response.statusCode).toEqual(200);
    });
    test("It shouldn't update a Service without id", async () => {
        const service = {
            id: "123sad",
            name: "Gestão",
            description: "Otimize seus processos",
            logo: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",
            price: "20,30",
        };
        const response = await request(app)
            .put("/services")
            .auth(token, { type: 'bearer' })
            .send(service);
        expect(response.statusCode).toEqual(400);
    });
    test("It should delete a Service", async () => {
        const service = {
            id: serviceId
        };
        const response = await request(app)
            .delete("/services")
            .auth(token, { type: 'bearer' })
            .send(service);
        expect(response.statusCode).toEqual(200);
    });
    test("It should try to delete a non-existent Service", async () => {
        const service = {
            id: "123456"
        };
        const response = await request(app)
            .delete("/services")
            .auth(token, { type: 'bearer' })
            .send(service);
        expect(response.statusCode).toEqual(404);
    });
});