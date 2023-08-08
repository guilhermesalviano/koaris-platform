import { Router } from "express";
import { UsersController } from "./controllers/UsersController";
import { OrganizationsController } from "./controllers/OrganizationsController";
import { ContactsController } from "./controllers/ContactsController";
import { ServicesController } from "./controllers/ServicesController";


const routes = Router();

const usersController = new UsersController();
const organizationsController = new OrganizationsController();
const contactsController = new ContactsController();
const servicesController = new ServicesController();

routes.post("/users", usersController.create);
routes.post("/organizations", organizationsController.create);
routes.post("/contacts", contactsController.create);
routes.post("/services", servicesController.create);

export { routes };