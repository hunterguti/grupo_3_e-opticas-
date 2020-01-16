const fs = require('fs');
const path = require('path');
const productos = require('../data/productos.json')


const controller = {
    products: (req, res) => {
        res.render('productos', {productos: productos})
    },
    productDetail: (req, res) => {
        let id = req.params.idProducto
        let producto = productos.find(p => p.id == id)
        res.render('vistaProducto', {
            producto: producto,
        })
    },
    createForm: (req, res) => {
        res.render('agregar-producto')
    },
    create: (req, res) => {
        
        res.send('viaje por post!')
    },
}

module.exports = controller