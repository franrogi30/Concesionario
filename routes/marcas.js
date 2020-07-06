const express = require("express");
const controllerM = require("../controlador/marcasController");

const routerM = express.Router();

routerM.get("/", controllerM.index);
routerM.get("/:marca", controllerM.id);
module.exports = routerM;
