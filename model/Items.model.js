const mongoose = require('mongoose')
const data = require('../model/Type.model')

const Schema = new mongoose.Schema({
    v1typeId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : data.products_type,
        default: null
    },
    v2image: {
        type: String,
        default: null
    },
    v2Items: {
        type: String,
        default: null
    },
    v2size: {
        type: String,
        default: null
    },
    v2sprice: {
        type: String,
        default: null
    },
    v2qty: {
        type: String,
        default: null
    }
})

let Product_Items = mongoose.model("Product_Items", Schema)

module.exports = { Product_Items }