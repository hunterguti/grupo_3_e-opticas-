const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    products: (req, res) => {
        res.render('productos', {productos: products})
    },
    productDetail: (req, res) => {
        let id = req.params.idProducto
        let producto = products.find(p => p.id == id)
        res.render('vistaProducto', {
            producto: producto,
        })
    },
    createForm: (req, res) => {
        res.render('agregar-producto')
    },
    create: (req, res) => {

        let producto = {
            id : products.length + 1,
            name : req.body.name,
            description : req.body.description,
            category : req.body.category,
            color : req.body.colors,
            price : req.body.price
        }
        products.push(producto)

        fs.writeFileSync(productsFilePath, JSON.stringify(products))

        res.redirect('/products')
    },
    edit: (req, res) => {
        let id = req.params.idProducto
        let producto = products.find(p => p.id == id)

        res.render('editProduct', {producto: producto})
    },
    update: (req,res) => {
        let arrayIndex

		let product = products.find(function (p, index) {
			if (p.id == req.params.id) {
                arrayIndex = index
                console.log(arrayIndex)
				return true
			}

			return false
        })
        console.log(product);
        

		let editado = {
			...product,
			...req.body
		}
        console.log(editado);
        
		products[arrayIndex] = editado

		fs.writeFileSync(productsFilePath, JSON.stringify(products))

		res.redirect('/products')
    }
}

module.exports = controller