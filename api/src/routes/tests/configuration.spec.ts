import request from "supertest";
import casual from "casual";
import app from "../../app";
import AppDataSource from "../../infra/database/datasource";

describe("Test the Configurations routes", () => {
    let configurationId: string;
    beforeAll(async function () {
        await AppDataSource.initialize();
    });
    test("It should create a new Configuration", async () => {
        const configuration = {
            organization_id: "f223bf64-0b18-4f9c-96d2-a54e7767fc46",
            service_id: "5dfea2d0-d7cc-4eab-8ece-0ef2b2d9ac73",
            logoCustom: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",
            phone: casual.phone,
            socialLinks: "https://www.instragram.com/social"
        };
        const response = await request(app)
            .post("/configurations")
            .send(configuration);
        expect(response.statusCode).toBe(201);
        configurationId = response.body.id;
    });
    test("It should get all Configurations", async () => {
        const response = await request(app).get("/configurations");
        expect(response.statusCode).toBe(200);
    });
    test("It should update a Configuration", async () => {
        console.log(configurationId)
        const configuration = {
            id: configurationId,
            organization_id: "1813624b-495b-4c6f-a5f6-151fd07294ad",
            service_id: "62ebb76c-65f8-4122-8e7a-8846ed6fa95c",
            logoCustom: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",
            phone: casual.phone,
            socialLinks: "https://www.instragram.com/social"
        };
        const response = await request(app)
            .put("/configurations")
            .send(configuration);
        expect(response.statusCode).toEqual(200);
    });

    test("It shouldn't update a Configuration without id", async () => {
        const configuration = {
            organization_id: "1813624b-495b-4c6f-a5f6-151fd07294ad",
            service_id: "62ebb76c-65f8-4122-8e7a-8846ed6fa95c",
            logoCustom: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",
            phone: casual.phone,
            socialLinks: "https://www.instragram.com/social"
        };
        const response = await request(app)
            .put("/configurations")
            .send(configuration);
        expect(response.statusCode).toEqual(400);
    });
    test("It should delete a Configuration", async () => {
        const configuration = {
            id: configurationId
        };
        const response = await request(app)
            .delete("/configurations")
            .send(configuration);
        expect(response.statusCode).toEqual(200);
    });
    test("It should try to delete a non-existent Configuration", async () => {
        const configuration = {
            id: "123456"
        };
        const response = await request(app)
            .delete("/configurations")
            .send(configuration);
        expect(response.statusCode).toEqual(404);
    });
});