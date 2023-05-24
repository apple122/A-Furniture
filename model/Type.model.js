const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    
    pro_type: {
        type: String,
        default: null
    },
    pro_status: {
        type: String,
        default: true
    },
    pro_curdate: {
        type: String,
        default: null
    }
})

let products_type = mongoose.model("products_type", Schema)

module.exports = { products_type }