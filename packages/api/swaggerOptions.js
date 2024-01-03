const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Koaris API Documentation',
      version: '1.0.0',
      description: 'This is the API documentation for the Koaris Control Panel application. The API provides endpoints for managing users, products, orders, and more. It follows RESTful design principles and supports JSON data format. The API uses JWT for authentication and authorization.',
    },
    components: {
      securitySchemes: {
        bearerAuth: { // name for the scheme
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      }
    },
  },
  apis: ['./src/**/*.{ts,js}'], // path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = specs;