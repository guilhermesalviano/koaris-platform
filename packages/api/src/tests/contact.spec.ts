import request from "supertest";
import casual from "casual";
import app from "../app";
import AppDataSource from "../infra/database/datasource";
import generateNewJWTToken from "./utils/generate-new-jwt-token";

describe("Test the Contacts routes", () => {
    let contactId: string;
    let token: string;
    beforeAll(async function () {
        await AppDataSource.initialize();
        token = await generateNewJWTToken();
    });
    test("It should create a new Contact", async () => {
        const contact = {
            name: casual.name,
            email: casual.email,
            phone: casual.phone,
            source: casual.company_name + " - LP dia dos pais",
            organization_id: process.env.KOARIS_ORGANIZATION_ID
        };
        const response = await request(app)
            .post("/contacts")
            .auth(token, { type: 'bearer' })
            .send(contact);
        expect(response.statusCode).toBe(201);
        contactId = response.body.id;
    });
    test("It should get all Contact", async () => {
        const response = await request(app)
            .get("/contacts")
            .auth(token, { type: 'bearer' });
        expect(response.statusCode).toBe(200);
    });
    test("It should update a Contact", async () => {
        const contact = {
            id: process.env.KOARIS_CONTACT_ID,
            name: casual.name,
            email: "contact@outlook.com",
            phone: casual.phone,
            organization_id: process.env.KOARIS_ORGANIZATION_ID
        };
        const response = await request(app)
            .put("/contacts")
            .auth(token, { type: 'bearer' })
            .send(contact);
        expect(response.statusCode).toEqual(200);
    });
    test("It shouldn't update a Contact without id", async () => {
        const contact = {
            name: casual.name,
            email: "contact@outlook.com",
            phone: casual.phone,
            organization_id: process.env.KOARIS_ORGANIZATION_ID
        };
        const response = await request(app)
            .put("/contacts")
            .auth(token, { type: 'bearer' })
            .send(contact);
        expect(response.statusCode).toEqual(400);
    });
    test("It should delete a Contact", async () => {
        const contact = {
            id: contactId
        };
        const response = await request(app)
            .delete("/contacts")
            .auth(token, { type: 'bearer' })
            .send(contact);
        expect(response.statusCode).toEqual(200);
    });
    test("It should try to delete a non-existent Contact", async () => {
        const contact = {
            id: "123456"
        };
        const response = await request(app)
            .delete("/contacts")
            .auth(token, { type: 'bearer' })
            .send(contact);
        expect(response.statusCode).toEqual(404);
    });
    test("It should create a new Contact without email", async () => {
        const contact = {
            name: casual.name,
            email: "",
            phone: casual.phone,
            source: casual.company_name + " - LP dia dos pais",
            organization_id: process.env.KOARIS_ORGANIZATION_ID
        };
        const response = await request(app)
            .post("/contacts")
            .auth(token, { type: 'bearer' })
            .send(contact);
        expect(response.body.phone).toEqual(contact.phone);
    });
    test("It should create a new Contact without phone", async () => {
        const contact = {
            name: casual.name,
            email: casual.email,
            phone: "",
            source: casual.company_name + " - LP dia dos pais",
            organization_id: process.env.KOARIS_ORGANIZATION_ID
        };
        const response = await request(app)
            .post("/contacts")
            .auth(token, { type: 'bearer' })
            .send(contact);
        expect(response.statusCode).toEqual(201);
    });
    test("It shouldn't create a new Contact with wrong email", async () => {
        const contact = {
            name: casual.name,
            email: "guilhermesalviano@test",
            phone: casual.phone,
            source: casual.company_name + " - LP dia dos pais",
            organization_id: process.env.KOARIS_ORGANIZATION_ID
        };
        const response = await request(app)
            .post("/contacts")
            .auth(token, { type: 'bearer' })
            .send(contact);
        expect(response.statusCode).toEqual(400);
    });
    test("It shouldn't create a new Contact with same email", async () => {
        const contact = {
            name: casual.name,
            email: "contact@outlook.com",
            phone: casual.phone,
            source: casual.company_name + " - LP dia dos pais",
            organization_id: process.env.KOARIS_ORGANIZATION_ID
        };
        const response = await request(app)
            .post("/contacts")
            .auth(token, { type: 'bearer' })
            .send(contact);
        expect(response.statusCode).toEqual(400);
    });
});