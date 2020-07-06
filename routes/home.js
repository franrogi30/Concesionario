const express = require("express");
const controllerM = require("../controlador/homeControler")

const routerH = express.Router();

routerH.get("/", controllerM.index);

module.exports = routerH;
