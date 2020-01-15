var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

router.get('/', productsController.index)
router.get('/:idProducto', productsController.product)

module.exports = router;