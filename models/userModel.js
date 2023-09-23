const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Introduza um nome válido"]
        },
        email:{
            type: String,
            required: [true, "Introduza um email válido"]
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User