import request from "supertest";
import casual from "casual";
import app from "../app";
import AppDataSource from "../infra/database/datasource";
import generateNewJWTToken from "./utils/generate-new-jwt-token";

describe("Test the Configurations routes", () => {
    let configurationId: string;
    let token: string;
    beforeAll(async function () {
        await AppDataSource.initialize();
        token = await generateNewJWTToken();
    });
    test("It should create a new Configuration", async () => {
        const configuration = {
            organization_id: process.env.KOARIS_ORGANIZATION_ID,
            service_id: process.env.KOARIS_SERVICE_ID,
            logoCustom: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",
            phone: casual.phone,
            socialLinks: "https://www.instragram.com/social"
        };
        const response = await request(app)
            .post("/configurations")
            .auth(token, { type: 'bearer' })
            .send(configuration);
        expect(response.statusCode).toBe(201);
        configurationId = response.body.id;
    });
    test("It should get all Configurations", async () => {
        const response = await request(app)
            .get("/configurations")
            .auth(token, { type: 'bearer' });
        expect(response.statusCode).toBe(200);
    });
    test("It should update a Configuration", async () => {
        const configuration = {
            id: configurationId,
            organization_id: process.env.KOARIS_ORGANIZATION_ID,
            service_id: process.env.KOARIS_SERVICE_ID,
            logoCustom: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",
            phone: casual.phone,
            socialLinks: "https://www.instragram.com/social"
        };
        const response = await request(app)
            .put("/configurations")
            .auth(token, { type: 'bearer' })
            .send(configuration);
        expect(response.statusCode).toEqual(200);
    });

    test("It shouldn't update a Configuration without id", async () => {
        const configuration = {
            organization_id: process.env.KOARIS_ORGANIZATION_ID,
            service_id: process.env.KOARIS_SERVICE_ID,
            logoCustom: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",
            phone: casual.phone,
            socialLinks: "https://www.instragram.com/social"
        };
        const response = await request(app)
            .put("/configurations")
            .auth(token, { type: 'bearer' })
            .send(configuration);
        expect(response.statusCode).toEqual(400);
    });
    test("It should delete a Configuration", async () => {
        const configuration = {
            id: configurationId
        };
        const response = await request(app)
            .delete("/configurations")
            .auth(token, { type: 'bearer' })
            .send(configuration);
        expect(response.statusCode).toEqual(200);
    });
    test("It should try to delete a non-existent Configuration", async () => {
        const configuration = {
            id: "123456"
        };
        const response = await request(app)
            .delete("/configurations")
            .auth(token, { type: 'bearer' })
            .send(configuration);
        expect(response.statusCode).toEqual(404);
    });
});