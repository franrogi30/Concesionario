const express = require("express");
const routerS = require("./routes/sucursales");
const routerA = require("./routes/autos");
const routerM = require("./routes/marcas");
const routerH = require("./routes/home");
const app = express();

app.listen(3030, () => console.log("Server running in 3030 port"));

app.use("/", routerH);
app.use("/marcas", routerM);
app.use("/sucursales", routerS);
app.use("/autos", routerA);
app.get("*", (req, res) => {
  res.status(404).send("404 not found. <br> ¡Houston, poseemos problemas!");
});
