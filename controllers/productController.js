const Product = require('../models/Product')

const addProduct = async (req, res) => {
    let product = new Product(req.body)
    let result = await product.save()
    res.send(result)
}

module.exports = {addProduct}