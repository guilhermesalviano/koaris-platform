import { Router } from "express";
import { UsersController } from "./controllers/UsersController";
import { OrganizationsController } from "./controllers/OrganizationsController";


const routes = Router();

const usersController = new UsersController();
const organizationsController = new OrganizationsController();

routes.post("/users", usersController.create);
routes.post("/organizations", organizationsController.create);

export { routes };