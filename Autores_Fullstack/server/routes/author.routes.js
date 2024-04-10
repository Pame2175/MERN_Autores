const express = require("express");
const AuthorController = require("../controllers/author.controller");
const AuthorRouter = express.Router();

// Rutas para la gestión de autores
AuthorRouter.post("/", AuthorController.createNewAuthor);
AuthorRouter.get("/", AuthorController.getAllAuthors);
AuthorRouter.get("/:id", AuthorController.getOneAuthorById);
AuthorRouter.put("/:id", AuthorController.updateOneAuthorById);
AuthorRouter.delete("/:id", AuthorController.deleteOneAuthorById);

module.exports = AuthorRouter;
