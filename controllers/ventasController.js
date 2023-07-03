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

  const getVentasFecha = (req, res) => {
    const { fechaInicio, fechaFin } = req.body;
  
    connection.query(
      `
      SELECT Ventas.id, Ventas.fecha, Vendedores.nombre AS nombre_vendedor, Ventas.producto, Ventas.monto
      FROM Ventas
      JOIN Vendedores ON Ventas.vendedorId = Vendedores.id
      WHERE Ventas.fecha BETWEEN ? AND ?;
      `,
      [fechaInicio, fechaFin],
      (error, results) => {
        if (error) {
          res.status(500).json({ error: 'Error al obtener las ventas por rango de fechas' });
        } else {
          // Calcular el monto total
          const montoTotal = results.reduce((total, venta) => total + parseFloat(venta.monto), 0);
  
          res.json({ ventas: results, montoTotal });
        }
      }
    );
  };

module.exports = {getAllVentas,getVentasFecha};
  