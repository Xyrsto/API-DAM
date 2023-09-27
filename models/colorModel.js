const mongoose = require('mongoose')

const colorSchema = mongoose.Schema(
    {
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

const Color = mongoose.model('Product', colorSchema)

module.exports = Color