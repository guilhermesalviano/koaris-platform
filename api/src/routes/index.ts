import { Router, response } from "express";
import { AuthenticationController } from "../domain/control-panel/application/controllers/AuthenticationController";
import { UsersController } from "../domain/control-panel/application/controllers/UsersController";
import { OrganizationsController } from "../domain/control-panel/application/controllers/OrganizationsController";
import { ContactsController } from "../domain/control-panel/application/controllers/ContactsController";
import { ServicesController } from "../domain/control-panel/application/controllers/ServicesController";
import { ConfigurationsController } from "../domain/control-panel/application/controllers/ConfigurationsController";
import { verifyJWT } from "../domain/control-panel/application/controllers/middlewares/verify-jwt";

const routes = Router();

const authenticationController = new AuthenticationController();
const usersController = new UsersController();
const organizationsController = new OrganizationsController();
const contactsController = new ContactsController();
const servicesController = new ServicesController();
const configurationsController = new ConfigurationsController();

routes.get("/status", (request, response) => {return response.json({message: "already's fine!"})});

routes.post("/login", authenticationController.authenticate);
routes.patch("/token/refresh", authenticationController.verifyJWTResfreshToken);

// need authorization with bearer token
routes.get("/users", verifyJWT, usersController.index);
routes.post("/users", verifyJWT, usersController.create);

routes.get("/organizations", verifyJWT, organizationsController.index);
routes.post("/organizations", verifyJWT, organizationsController.create);

routes.get("/contacts", verifyJWT, contactsController.index);
routes.post("/contacts", verifyJWT, contactsController.create);
routes.put("/contacts", verifyJWT, contactsController.update);
routes.delete("/contacts", verifyJWT, contactsController.delete);

routes.get("/services", verifyJWT, servicesController.index);
routes.post("/services", verifyJWT, servicesController.create);
routes.put("/services", verifyJWT, servicesController.update);
routes.delete("/services", verifyJWT, servicesController.delete);

routes.get("/configurations", verifyJWT, configurationsController.index);
routes.post("/configurations", verifyJWT, configurationsController.create);
routes.put("/configurations", verifyJWT, configurationsController.update);
routes.delete("/configurations", verifyJWT, configurationsController.delete);

export default routes;