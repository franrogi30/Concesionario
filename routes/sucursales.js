const express = require("express");
const fs = require("fs");
const controllerS = require("../controlador/sucursalesController");
const routerS = express.Router();

routerS.get("/", controllerS.index);
routerS.get("/:sucursal", controllerS.id );

module.exports = routerS;
