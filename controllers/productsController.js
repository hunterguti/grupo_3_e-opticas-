const fs = require('fs');
const path = require('path');
const productos = require('../data/productos.json')


const controller = {
    index: (req, res) => {
        res.render('productos', {productos: productos})
    },
    product: (req, res) => {
        let id = req.params.idProducto
        let producto = productos.find(p => p.id == id)
        res.render('vistaProducto', {producto: producto})
    },
}

module.exports = controller