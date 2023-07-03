const express = require('express');
const router = express.Router();
const getAllVendedores = require('../controllers/vendedoresController');
const {getAllVentas,getVentasFecha} = require('../controllers/ventasController');

router.get('/Vendedores',getAllVendedores);
router.get('/Ventas',getAllVentas);
router.post('/ventas/fecha', getVentasFecha);

module.exports = router;