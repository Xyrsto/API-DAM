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
        owner:{
            type: String,
            required: [true, "Login necessário"]
        }
    },
    {
        timestamps: true
    }
)

const Color = mongoose.model('Product', colorSchema)

module.exports = Color