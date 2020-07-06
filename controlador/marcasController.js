const express = require("express");
const fs = require("fs");
let concesionarias = JSON.parse(
  fs.readFileSync("./data/concesionarias.json", "utf-8"));
const controllerM = {
 
  index: (req, res) => {
    let marcas=[]
    concesionarias.forEach(sucursal => {
        sucursal.autos.forEach(auto => {
            if(!marcas.includes(auto.marca)){
                marcas.push(auto.marca)
            }
        })        
    })
    
    res.write("Estas son nuestras marcas:")
    res.write("\n")
    marcas.forEach(marca=>{
      res.write("\n *MARCA* \n" + "." +marca.toUpperCase() + "\n")
    })
    
     res.end()
  },
  id:(req, res) => {
    res.set({'content-type':'text/plain;charset=utf-8'})
  let idMarcas = req.params.marca
  {res.write('PAGINA de *' + idMarcas.toUpperCase() + "* \n")
  res.write("---------------------")
  concesionarias.forEach(function(sucursal){
      sucursal.autos.forEach(function(auto){
          if(auto.marca == idMarcas){
              res.write('\n' + '\n' + auto.modelo + '\n' + auto.anio + '\n') 
          } 
      })
  })} 

  res.end()
   }
  }
module.exports = controllerM

//donde meterlo
//res.write("\n La Marca : " + idMarcas.toUpperCase() + " no se encuentra en nuestra base de datos")