const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: [true, "Introduza um nome válido"]
        },
        email:{
            type: String,
            required: [true, "Introduza um email válido"]
        },
        password:{
            type: String,
            required: [true, "Introduza uma password válida"]
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User