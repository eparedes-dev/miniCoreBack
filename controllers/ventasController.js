const connection = require('../config/db');

const getAllVentas = (req,result) => {
    connection.query("select * from Ventas", (error,results)=>{
      if(error){
        result.send(error);
        console.log(error)
    } else{
        result.json(results);
    }
    });
  }


module.exports = getAllVentas;
  