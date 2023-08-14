import { Router, response } from "express";
import { LoginController } from "../domain/control-panel/application/controllers/LoginController";
import { UsersController } from "../domain/control-panel/application/controllers/UsersController";
import { OrganizationsController } from "../domain/control-panel/application/controllers/OrganizationsController";
import { ContactsController } from "../domain/control-panel/application/controllers/ContactsController";
import { ServicesController } from "../domain/control-panel/application/controllers/ServicesController";
import { ConfigurationsController } from "../domain/control-panel/application/controllers/ConfigurationsController";

const routes = Router();

const loginController = new LoginController();
const usersController = new UsersController();
const organizationsController = new OrganizationsController();
const contactsController = new ContactsController();
const servicesController = new ServicesController();
const configurationsController = new ConfigurationsController();

routes.get("/status", (request, response) => {return response.json({message: "already's fine!"})});

routes.post("/login", loginController.login);

routes.get("/users", usersController.index);
routes.post("/users", usersController.create);

routes.get("/organizations", organizationsController.index);
routes.post("/organizations", organizationsController.create);

routes.get("/contacts", contactsController.index);
routes.post("/contacts", contactsController.create);
routes.put("/contacts", contactsController.update);
routes.delete("/contacts", contactsController.delete);

routes.get("/services", servicesController.index);
routes.post("/services", servicesController.create);
routes.put("/services", servicesController.update);
routes.delete("/services", servicesController.delete);

routes.get("/configurations", configurationsController.index);
routes.post("/configurations", configurationsController.create);
routes.put("/configurations", configurationsController.update);
routes.delete("/configurations", configurationsController.delete);

export default routes;