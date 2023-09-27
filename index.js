//utilização do express para criar e configurar o servidor
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const Product = require('./models/productModel')
const cors = require('cors')
const app = express()

const uri = 'mongodb+srv://admin:admin@cluster0.ujeva17.mongodb.net/DAM-API?retryWrites=true&w=majority'

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`)
})

mongoose.connect(uri).then(() =>{
  console.log('Database is connected')
}).catch((err) =>{
  console.log(err)
})

const productRouter = require('./routes/product')
app.use('/addProduct', productRouter)

//teste adicionar user
app.post('/addUser', async(req, res) =>{
  try{
    const user = await User.create(req.body)
    console.log('User created:', user); // Log user object for debugging
    res.status(200).json(user)
  }
  catch(err){
    console.log(err.message)
    res.status(500).json({msg: err.message})
  }
})






