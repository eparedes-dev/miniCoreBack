const connection = require('../config/db');

const getAllVentas = (req,result) => {
    connection.query(`
    SELECT Ventas.id, Ventas.fecha, Vendedores.nombre AS nombre_vendedor, Ventas.producto, Ventas.monto
    FROM Ventas
    JOIN Vendedores ON Ventas.vendedorId = Vendedores.id;
    `, (error,results)=>{
      if(error){
        result.send(error);
        console.log(error)
    } else{
        result.json(results);
    }
    });
  }


module.exports = getAllVentas;
  