//utilização do express para criar e configurar o servidor
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const uri = 'mongodb+srv://admin:admin@cluster0.ujeva17.mongodb.net/?retryWrites=true&w=majority'

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(express.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
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

const teste = new mongoose.Schema({
  id: Number,
  title: String,
});

app.post('/teste', async(req, res) => {
  try{
    connect()
    const model = mongoose.model('DAM-24180-23885', teste)
    const documents = await model.find({}).sort({ id: -1 }).limit(1);
    
    // Insert a new document
    const newObj = new model({
      id: documents.length + 1,
      title: "teste"
    });

    await newObj.save();

    res.log('sucesso')
    res.json({message: 'sucesso'})
  }
  catch(err){
    console.error(err)
    res.status(500).json({error: 'erro'})
  }
})


