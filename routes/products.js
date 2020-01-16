var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

router.get('/', productsController.products) //Pagina de todos los productos

router.get('/create', productsController.createForm) //Pagina de formulario de creacion de producto
router.post('/create', productsController.create) //Guardado de producto

router.get('/:idProducto?', productsController.productDetail) //Pagina de cada producto 


module.exports = router;