const express = require("express");
const fs = require("fs");
const controllerA = require("../controlador/autosController");
const routerA = express.Router();
routerA.get("/", controllerA.index);
routerA.get("/:marca/", controllerA.id);
//routerA.get("/:marca/:dato?", controllerA.ok);

module.exports = routerA;
