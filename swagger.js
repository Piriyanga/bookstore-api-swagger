const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book Store API",
      version: "1.0.0",
      description: "A simple API to manage books, built for learning Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // Files containing Swagger comments
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;