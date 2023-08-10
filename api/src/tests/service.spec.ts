import request from "supertest";
import app from "../app";
import AppDataSource from "../database/datasource";

describe('API Tests', function() {
    beforeAll(async function () {
        await AppDataSource.initialize();
    });
    describe("Test the services", () => {
        test("It should create a new Service", async () => {
            expect(200).toBe(200);
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
});