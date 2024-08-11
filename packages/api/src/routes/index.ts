import { Router } from "express";
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

/**
 * @swagger
 * tags:
 *   - name: Application
 *     description: Application status
 *   - name: Authentication
 *     description: Operations about user authentication
 *   - name: Services
 *     description: Services are the products that Koaris offers to its users.
 *   - name: Users
 *     description: Users are utilizers of the Koaris, each assigned specific permissions, shaping the system's functionality and access levels."
 *   - name: Organizations
 *     description: An Organization is the registered "CNPJ"s of a user.
 *   - name: Contacts
 *     description: As a b2b service, contacts are the Users customers.
 *   - name: Configurations
 *     description: Configuration of services by organization.
 */

/**
 * @swagger
 * /status:
 *   get:
 *     tags:
 *       - Application
 *     description: Check application status
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: application status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Everything's fine!"
 */
routes.get("/status", (request, response) => {return response.json({message: "Everything's fine!"})});

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Operations about user authentication
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email to use for login.
 *               password:
 *                 type: string
 *                 description: User's password.
 *             example:
 *               email: "exampleUser"
 *               password: "examplePassword"
 *     responses:
 *       200:
 *         description: login
 * /token/refresh:
 *   patch:
 *     tags:
 *       - Authentication
 *     description: Refresh the authentication token
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *           example: Bearer {token}
 *         required: true
 *         description: The refresh token
 *     responses:
 *       200:
 *         description: The new authentication token
 *       401:
 *         description: Unauthorized, invalid or expired token
 */
routes.post("/login", authenticationController.authenticate);
routes.patch("/token/refresh", authenticationController.verifyJWTResfreshToken);

/**
 * @swagger
 * /services:
 *   get:
 *     tags:
 *       - Services
 *     description: Retrieve a list of services
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                   name:
 *                     type: string
 *                     example: "Gestão Online"
 *                   description:
 *                     type: string
 *                     example: "Otimize seus processos"
 *                   logo:
 *                     type: string
 *                     example: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
 *                   price:
 *                     type: string
 *                     example: "20,50"
 *                   updated_at:
 *                     type: date-time
 *                     example: "2023-08-29T02:24:13.000Z"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   post:
 *     tags:
 *       - Services
 *     description: Create a new service
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Gestão Online"
 *               description:
 *                 type: string
 *                 example: "Otimize seus processos"
 *               logo:
 *                 type: string
 *                 example: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
 *               price:
 *                 type: string
 *                 example: "20,50"
 *     responses:
 *       201:
 *         description: The created service
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 name:
 *                   type: string
 *                   example: "Gestão Online"
 *                 description:
 *                   type: string
 *                   example: "Otimize seus processos"
 *                 logo:
 *                   type: string
 *                   example: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
 *                 price:
 *                   type: string
 *                   example: "20,50"
 *                 updated_at:
 *                   type: date-time
 *                   example: "2023-08-29T02:24:13.000Z"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   put:
 *     tags:
 *       - Services
 *     description: Update a service
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *               name:
 *                 type: string
 *                 example: "Gestão Online"
 *               description:
 *                 type: string
 *                 example: "Otimize seus processos"
 *               logo:
 *                 type: string
 *                 example: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
 *               price:
 *                 type: string
 *                 example: "20,50"
 *     responses:
 *       200:
 *         description: The updated service
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 name:
 *                   type: string
 *                   example: "Gestão Online"
 *                 description:
 *                   type: string
 *                   example: "Otimize seus processos"
 *                 logo:
 *                   type: string
 *                   example: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
 *                 price:
 *                   type: string
 *                   example: "20,50"
 *                 updated_at:
 *                   type: date-time
 *                   example: "2023-08-29T02:24:13.000Z"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   delete:
 *     tags:
 *       - Services
 *     description: Delete a service
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Serviço deletado."
 *       401:
 *         description: Unauthorized, invalid or expired token
 *       404:
 *         description: Service not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Serviço não encontrado."
 */
routes.get("/services", verifyJWT, servicesController.index);
routes.post("/services", verifyJWT, servicesController.create);
routes.put("/services", verifyJWT, servicesController.update);
routes.delete("/services", verifyJWT, servicesController.delete);

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     description: Retrieve a list of users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                   name:
 *                     type: string
 *                     example: "guilherme"
 *                   role:
 *                     type: string
 *                     example: "administrator"
 *                   email:
 *                     type: string
 *                     example: "sampleemail@example.com"
 *                   password:
 *                     type: string
 *                     example: "password-hash"
 *                   updated_at:
 *                     type: date-time
 *                     example: "2023-08-29T02:17:22.000Z"
 *                   created_at:
 *                     type: date-time
 *                     example: "2023-08-29T02:17:22.000Z"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   post:
 *     tags:
 *       - Users
 *     description: Create a new user
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "guilherme"
 *               role:
 *                 type: string
 *                 example: "administrator"
 *               email:
 *                 type: string
 *                 example: "sampleemail@example.com"
 *               password:
 *                 type: string
 *                 example: "asduihafs21##@!"
 *     responses:
 *       201:
 *         description: The created contact
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 name:
 *                   type: string
 *                   example: "guilherme"
 *                 role:
 *                   type: string
 *                   example: "administrator"
 *                 email:
 *                   type: string
 *                   example: "sampleemail@example.com"
 *                 password:
 *                   type: string
 *                   example: "password-hash"
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-08-29T02:17:22.000Z"
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-08-29T02:17:22.000Z"
 *       401:
 *         description: Unauthorized, invalid or expired token
 */
routes.get("/users", verifyJWT, usersController.index);
routes.post("/users", usersController.create);

/**
 * @swagger
 * /organizations:
 *   get:
 *     tags:
 *       - Organizations
 *     description: Retrieve a list of organizations
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                   name:
 *                     type: string
 *                     example: "company name"
 *                   description:
 *                     type: string
 *                     example: "Uma empresa focada no desenvolvimento e automatização dos processos de marketing digital."
 *                   logo:
 *                     type: string
 *                     example: "https://urllogo.com.br"
 *                   identification:
 *                     type: string
 *                     example: "123.456.789-12"
 *                   user_id:
 *                     type: string
 *                     example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                   updated_at:
 *                     type: date
 *                     example: "2023-08-29T02:17:22.000Z"
 *                   created_at:
 *                     type: date
 *                     example: "2023-08-29T02:17:22.000Z"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   post:
 *     tags:
 *       - Organizations
 *     description: Create a new organization
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "company name"
 *               description:
 *                 type: string
 *                 example: "Uma empresa focada no desenvolvimento e automatização dos processos de marketing digital."
 *               logo:
 *                 type: string
 *                 example: "https://urllogo.com.br"
 *               identification:
 *                 type: string
 *                 example: "123.456.789-12"
 *               user_id:
 *                 type: string
 *                 example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *     responses:
 *       201:
 *         description: The created organization
 *       401:
 *         description: Unauthorized, invalid or expired token
 */
routes.get("/organizations", verifyJWT, organizationsController.index);
routes.post("/organizations", verifyJWT, organizationsController.create);

/**
 * @swagger
 * /contacts:
 *   get:
 *     tags:
 *       - Contacts
 *     description: Retrieve a list of contacts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                   name:
 *                     type: string
 *                     example: "company name"
 *                   email:
 *                     type: string
 *                     example: "sampleemail@example.com"
 *                   phone:
 *                     type: string
 *                     example: "11123456789"
 *                   source:
 *                     type: string
 *                     example: "Formulario - LP Principal"
 *                   organization_id:
 *                     type: string
 *                     example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   post:
 *     tags:
 *       - Contacts
 *     description: Create a new contact
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "company name"
 *               email:
 *                 type: string
 *                 example: "sampleemail@example.com"
 *               phone:
 *                 type: string
 *                 example: "11123456789"
 *               source:
 *                 type: string
 *                 example: "Formulario - LP Principal"
 *               organization_id:
 *                 type: string
 *                 example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *     responses:
 *       201:
 *         description: The created contact
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 name:
 *                   type: string
 *                   example: "company name"
 *                 email:
 *                   type: string
 *                   example: "sampleemail@example.com"
 *                 phone:
 *                   type: string
 *                   example: "11123456789"
 *                 source:
 *                   type: string
 *                   example: "Formulario - LP Principal"
 *                 organization_id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   put:
 *     tags:
 *       - Contacts
 *     description: Update a contact
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *               name:
 *                 type: string
 *                 example: "company name"
 *               email:
 *                 type: string
 *                 example: "sampleemail@example.com"
 *               phone:
 *                 type: string
 *                 example: "11123456789"
 *               source:
 *                 type: string
 *                 example: "Formulario - LP Principal"
 *               organization_id:
 *                 type: string
 *                 example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *     responses:
 *       200:
 *         description: The updated contact
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 name:
 *                   type: string
 *                   example: "company name"
 *                 email:
 *                   type: string
 *                   example: "sampleemail@example.com"
 *                 phone:
 *                   type: string
 *                   example: "11123456789"
 *                 source:
 *                   type: string
 *                   example: "Formulario - LP Principal"
 *                 organization_id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   delete:
 *     tags:
 *       - Contacts
 *     description: Delete a contact
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Contato deletado."
 *       401:
 *         description: Unauthorized, invalid or expired token
 *       404:
 *         description: Contact not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Contato não encontrado."
 */
routes.get("/contacts", verifyJWT, contactsController.index);
routes.post("/contacts", verifyJWT, contactsController.create);
routes.put("/contacts", verifyJWT, contactsController.update);
routes.delete("/contacts", verifyJWT, contactsController.delete);

/**
 * @swagger
 * /configurations:
 *   get:
 *     tags:
 *       - Configurations
 *     description: Retrieve a list of configurations
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of configurations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   organization_id:
 *                     type: string
 *                     example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                   service_id:
 *                     type: string
 *                     example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                   logoCustom:
 *                     type: string
 *                     example: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
 *                   phone:
 *                     type: string
 *                     example: "11123456789"
 *                   socialLinks:
 *                     type: string
 *                     example: "https://www.instragram.com/social"
 *                   updated_at:
 *                     type: date-time
 *                     example: "2023-08-29T02:17:22.000Z"
 *                   created_at:
 *                     type: date-time
 *                     example: "2023-08-29T02:17:22.000Z"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   post:
 *     tags:
 *       - Configurations
 *     description: Create a new configuration
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organization_id:
 *                 type: string
 *                 example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *               service_id:
 *                 type: string
 *                 example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *               logoCustom:
 *                 type: string
 *                 example: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
 *               phone:
 *                 type: string
 *                 example: "11123456789"
 *               socialLinks:
 *                 type: string
 *                 example: "https://www.instragram.com/social"
 *     responses:
 *       201:
 *         description: The created configuration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 organization_id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 service_id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 logoCustom:
 *                   type: string
 *                   example: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
 *                 phone:
 *                   type: string
 *                   example: "11123456789"
 *                 socialLinks:
 *                   type: date-time
 *                   example: "https://www.instragram.com/social"
 *                 updated_at:
 *                   type: date-time
 *                   example: "2023-08-29T02:17:22.000Z"
 *                 created_at:
 *                   type: date-time
 *                   example: "2023-08-29T02:17:22.000Z"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   put:
 *     tags:
 *       - Configurations
 *     description: Update a configuration
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *               organization_id:
 *                 type: string
 *                 example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *               service_id:
 *                 type: string
 *                 example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *               logoCustom:
 *                 type: string
 *                 example: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
 *               phone:
 *                 type: string
 *                 example: "11123456789"
 *               socialLinks:
 *                 type: string
 *                 example: "https://www.instragram.com/social"
 *               updated_at:
 *                 type: date-time
 *                 example: "2023-08-29T02:17:22.000Z"
 *               created_at:
 *                 type: date-time
 *                 example: "2023-08-29T02:17:22.000Z"
 *     responses:
 *       200:
 *         description: The updated configuration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 organization_id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 service_id:
 *                   type: string
 *                   example: "xxxxx-xxxxx-xxxx-xxxxx-xxxxxxx"
 *                 logoCustom:
 *                   type: string
 *                   example: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
 *                 phone:
 *                   type: string
 *                   example: "11123456789"
 *                 socialLinks:
 *                   type: date-time
 *                   example: "https://www.instragram.com/social"
 *       401:
 *         description: Unauthorized, invalid or expired token
 *   delete:
 *     tags:
 *       - Configurations
 *     description: Delete a configuration
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Configuração deletada."
 *       401:
 *         description: Unauthorized, invalid or expired token
 *       404:
 *         description: Configuration not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Configuração não encontrado."
 */
routes.get("/configurations", verifyJWT, configurationsController.index);
routes.post("/configurations", verifyJWT, configurationsController.create);
routes.put("/configurations", verifyJWT, configurationsController.update);
routes.delete("/configurations", verifyJWT, configurationsController.delete);

export default routes;