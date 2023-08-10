import request from "supertest";
import app from "../app";
import AppDataSource from "../database/datasource";

describe('API Tests', function() {
  beforeEach(async function () {
    await AppDataSource.initialize();
  });
  describe("Test the services", () => {
    test("It should response the GET method in services", async () => {
      const response = await request(app).get("/services");
      expect(response.statusCode).toBe(200);
    });
  });
});