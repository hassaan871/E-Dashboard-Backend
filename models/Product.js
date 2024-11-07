const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }
},{timestamps: true})

const Product = mongoose.model("products", ProductSchema)

module.exports = Product