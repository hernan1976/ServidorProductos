const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/',
    productoController.consultarProducto
);

module.exports = router;