import { Router, response } from "express";
import { UsersController } from "./controllers/UsersController";
import { OrganizationsController } from "./controllers/OrganizationsController";
import { ContactsController } from "./controllers/ContactsController";
import { ServicesController } from "./controllers/ServicesController";

const routes = Router();

const usersController = new UsersController();
const organizationsController = new OrganizationsController();
const contactsController = new ContactsController();
const servicesController = new ServicesController();

routes.get("/status", (request, response) => {return response.json({message: "already's fine!"})});
routes.post("/users", usersController.create);
routes.post("/organizations", organizationsController.create);
routes.post("/contacts", contactsController.create);
routes.get("/services", servicesController.index);
routes.post("/services", servicesController.create);

export default routes;