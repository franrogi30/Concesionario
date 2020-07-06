const express = require("express");
const fs = require("fs");
let concesionarias = JSON.parse(
  fs.readFileSync("./data/concesionarias.json", "utf-8")
);

const controllerS = {
  index: function (req, res) {
    res.set({ "content-type": "text/plain;charset=utf-8" });
    res.write("Concesionarios DH, simpre cerca suyo ");
    concesionarias.forEach(function (sucursales) {
      res.write("\n");
      res.write(sucursales.sucursal);
      res.write("\n");
      res.write(sucursales.direccion);
      res.write("\n");
      res.write(sucursales.telefono);
      res.write("\n");
    });
    res.end();
  },
  id: (req, res) => {
    let id = req.params.sucursal;
    concesionarias.forEach((element) => {
      if (element.sucursal == id) {
        res.set({ "content-type": "text/plain;charset=utf-8" });
        res.write(
          "Esta Sucursal cuenta con un total de " +
            element.autos.length +
            " vehiculos.\n\nEstos son los datos de la sucursal\n\nSucursal: " +
            element.sucursal +
            "\nTeléfono: " +
            element.telefono +
            "\nDirección: " +
            element.direccion +
            "\n\n" +
            "Vehiculos: \n"
        );
        res.write("y esta es la lista de autos")
        element.autos.forEach((producto) =>
          res.write(
            `
            ${producto.marca}
            ${producto.modelo}
            ${producto.anio}
            ${producto.color}

            `
          )
        );

        res.end();
      }
    });
  },
};
module.exports = controllerS;
