//utilização do express para criar e configurar o servidor
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const uri = 'mongodb+srv://admin:admin@cluster0.ujeva17.mongodb.net/?retryWrites=true&w=majority'

app.get('/teste', function (req, res) {
  res.send('Hello World')
})


//conexão com a base de dados
async function connect(){
  try{
    await mongoose.connect(uri)
    console.log('Conectado à base de dados')
  }
  catch{
    console.error()
  }
}

//executa a função connect para conectar à base de dados
connect()

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})

