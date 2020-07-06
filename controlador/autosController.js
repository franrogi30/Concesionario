const fs = require("fs"); //requiero fylesistem
let concesionarias = JSON.parse(
  fs.readFileSync("./data/concesionarias.json", "utf-8")
);
const controllerA = {
  index: (req, res)=> {
    res.set({ "content-type": "text/plain;charset=utf-8" });
    let cantidad = 0;
    concesionarias.forEach((element) => {
      cantidad += element.autos.length;
    });
    res.write("Estos son nuestros  " + cantidad + " Vehiculos \n");
    concesionarias.forEach(function (elemento) {
      elemento.autos.forEach(function (auto) {
        res.write(
          `
          Marca : 
          ------
            ${auto.marca.toUpperCase()}
            
            Modelo:  
            ${auto.modelo} 
            
            Año:
            ${auto.anio} 
            
            Color: 
            ${auto.color} 
            *****
            `
        );
      });
    });
    res.end();
  },
  id: (req, res) => {
    res.set({ "content-type": "text/plain;charset=utf-8" });
    let idMarca = req.params.marca;
   
    res.write(
      "Total de unidades " + idMarca.toUpperCase() + " disponible: " + /*cantidad +*/ "\n\n"
    );
    concesionarias.forEach((sucursal)=> {
      sucursal.autos.forEach((autos) => {
        if (autos.marca == idMarca) {
          res.write(
            "MARCA: " +
              autos.marca +
              "\n" +
              "MODELO: " +
              autos.modelo +
              "\n" +
              "AÑO: " +
              autos.anio +
              "\n" +
              "COLOR " +
              autos.color +
              "\n"
          );
          res.write("-----" + "\n");
        }
      });
    });
    res.end();
  },
};

module.exports = controllerA;
