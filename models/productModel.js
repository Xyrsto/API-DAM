const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Introduza um nome válido"]
        },
        description:{
            type: String,
            required: [true, "Introduza uma descrição"]
        },
        price:{
            type: String,
            required: [true, "Introduza um preço"]
        },
        pictureSrc:{
            type: String,
            required: [true, "Introduza uma imagem"]
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product