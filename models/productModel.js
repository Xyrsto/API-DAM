const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name:{
            type: String,
            required: [true, "Introduza um nome válido"]
        },
        description:{
            type: String,
            required: [true, "Introduza uma descrição"]
        },
        color:{
            type: String,
            required: [true, "Introduza uma cor"]
        },
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product