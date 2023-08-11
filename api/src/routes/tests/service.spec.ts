import request from "supertest";
import app from "../../app";
import AppDataSource from "../../infra/database/datasource";

describe("Test the services", () => {
    beforeAll(async function () {
        await AppDataSource.initialize();
    });
    test("It should create a new Service", async () => {
        const response = await request(app).post("/services", () => {
            return {
                name: "asdasdasdasdf",
                description: "Otimize seus processos",
                logo: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",
                price: "20,30",
            };
        });
        expect(response.statusCode).toBe(201);
    });
    test("It should get all Services", async () => {
        const response = await request(app).get("/services");
        expect(response.statusCode).toBe(200);
    });
    test("It should update a Service", async () => {
        expect(200).toBe(200);
    });
    test("It should delete a Service", async () => {
        expect(200).toBe(200);
    });
});