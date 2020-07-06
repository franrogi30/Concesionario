const express = require("express");
const fs = require("fs");
let concesionarias = JSON.parse(
  fs.readFileSync("./data/concesionarias.json", "utf-8")
);
const controllerH = {
  index: (req, res) => {
    let cantidad = 0;
        concesionarias.forEach(element => {
            cantidad += element.autos.length})
    res.write(`Bienvenidos a Concesionarios DH
      
      Aqui podra encontrar los mejores autos aun excelente precio y sin necesidad de recorrer demasiado
      
      Siempre una surcursal cerca suyo 
      
      Tenemos ${cantidad}  para Usted 
              
       ` )
     
    concesionarias.forEach((concesionaria) => {
      res.write("\n\n");
      res.write(concesionaria.sucursal);
      
    }),
      res.end();
  },
};

module.exports = controllerH;
