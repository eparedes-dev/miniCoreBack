const express = require('express');
const router = express.Router();
const getAllVendedores = require('../controllers/vendedoresController');
const getAllVentas = require('../controllers/ventasController');

router.get('/Vendedores',getAllVendedores);
router.get('/Ventas',getAllVentas);

module.exports = router;