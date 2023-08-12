import { Router, response } from "express";
import { UsersController } from "../domain/control-panel/application/controllers/UsersController";
import { OrganizationsController } from "../domain/control-panel/application/controllers/OrganizationsController";
import { ContactsController } from "../domain/control-panel/application/controllers/ContactsController";
import { ServicesController } from "../domain/control-panel/application/controllers/ServicesController";

const routes = Router();

const usersController = new UsersController();
const organizationsController = new OrganizationsController();
const contactsController = new ContactsController();
const servicesController = new ServicesController();

routes.get("/status", (request, response) => {return response.json({message: "already's fine!"})});
routes.post("/users", usersController.create);
routes.get("/organizations", organizationsController.index);
routes.post("/organizations", organizationsController.create);

routes.get("/contacts", contactsController.index);
routes.post("/contacts", contactsController.create);
routes.put("/contacts", contactsController.update);

routes.get("/services", servicesController.index);
routes.post("/services", servicesController.create);

export default routes;