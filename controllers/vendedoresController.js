const connection = require('../config/db');

const getAllVendedores = (req,res) =>{
    connection.query("select * from Vendedores", (error,results) => {
        if(error){
            res.send(error);
            console.log(error);
        }
        else{
            res.json(results);
        }
    });
}

module.exports = getAllVendedores;