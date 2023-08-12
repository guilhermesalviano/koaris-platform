import request from "supertest";
import casual from "casual";
import app from "../../app";
import AppDataSource from "../../infra/database/datasource";

describe("Test the contacts routes", () => {
    let contactId: string;
    beforeAll(async function () {
        await AppDataSource.initialize();
    });
    test("It should create a new Contact", async () => {
        const contact = {
            name: casual.name,
            email: casual.email,
            phone: casual.phone,
            source: casual.company_name + " - LP dia dos pais",
            organization_id: "8f614c88-3b40-4994-92dc-8c1ec54affdc"
        };
        const response = await request(app)
            .post("/contacts")
            .send(contact);
        expect(response.statusCode).toBe(201);
        contactId = response.body.id;
    });
    test("It should get all Contact", async () => {
        const response = await request(app).get("/contacts");
        expect(response.statusCode).toBe(200);
    });
    test("It should update a Contact", async () => {
        const contact = {
            id: "314887c9-cc4c-44db-808f-e360774fd8fb",
            name: casual.name,
            email: "contact@outlook.com",
            phone: casual.phone,
            organization_id: "8f614c88-3b40-4994-92dc-8c1ec54affdc"
        };
        const response = await request(app)
            .put("/contacts")
            .send(contact);
        expect(response.statusCode).toEqual(200);
    });
    test("It shouldn't update a Contact without id", async () => {
        const contact = {
            name: casual.name,
            email: "contact@outlook.com",
            phone: casual.phone,
            organization_id: "8f614c88-3b40-4994-92dc-8c1ec54affdc"
        };
        const response = await request(app)
            .put("/contacts")
            .send(contact);
        expect(response.statusCode).toEqual(400);
    });
    test("It should delete a Contact", async () => {
        const contact = {
            id: contactId
        };
        const response = await request(app)
            .delete("/contacts")
            .send(contact);
        expect(response.statusCode).toEqual(200);
    });
    test("It should create a new Contact without email", async () => {
        const contact = {
            name: casual.name,
            email: "",
            phone: casual.phone,
            source: casual.company_name + " - LP dia dos pais",
            organization_id: "8f614c88-3b40-4994-92dc-8c1ec54affdc"
        };
        const response = await request(app)
            .post("/contacts")
            .send(contact);
        expect(response.body.phone).toEqual(contact.phone);
    });
    test("It should create a new Contact without phone", async () => {
        const contact = {
            name: casual.name,
            email: casual.email,
            phone: "",
            source: casual.company_name + " - LP dia dos pais",
            organization_id: "8f614c88-3b40-4994-92dc-8c1ec54affdc"
        };
        const response = await request(app)
            .post("/contacts")
            .send(contact);
        expect(response.statusCode).toEqual(201);
    });
    test("It shouldn't create a new Contact with wrong email", async () => {
        const contact = {
            name: casual.name,
            email: "guilhermesalviano@test",
            phone: casual.phone,
            source: casual.company_name + " - LP dia dos pais",
            organization_id: "8f614c88-3b40-4994-92dc-8c1ec54affdc"
        };
        const response = await request(app)
            .post("/contacts")
            .send(contact);
        expect(response.statusCode).toEqual(400);
    });
    test("It shouldn't create a new Contact with same email", async () => {
        const contact = {
            name: casual.name,
            email: "contact@outlook.com",
            phone: casual.phone,
            source: casual.company_name + " - LP dia dos pais",
            organization_id: "8f614c88-3b40-4994-92dc-8c1ec54affdc"
        };
        const response = await request(app)
            .post("/contacts")
            .send(contact);
        expect(response.statusCode).toEqual(400);
    });
});