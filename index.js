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

connect()

const Schema = mongoose.Schema;

const teste = new Schema({
  id: Number,
  title: String,
});

const model = mongoose.model('DAM-24180-23885', teste);

app.post('/post/:id', (req, res) => {
  const { id } = req.params;
  const { teste } = req.body;

  if(!teste){
    res.status(418).json({ message: 'teste is required' });
  }

  res.send({
    objeto: `Recebido ${teste} no id ${id}`
  })

})

app.post('/teste/post', (req, res) => {
    const postData = new model(req.body);
    const documents = model.find({}).sort({ id: -1 }).limit(1);

    console.log("possas")
    
    // Save the data to the MongoDB collection
    postData.save((err, data) => {
    if (err) 
    {
      console.error('Error saving data to MongoDB:', err);
      res.status(500).json({ message: 'Error saving data to MongoDB' });
    } 
    else {
      console.log('Data saved to MongoDB:', data);
      res.status(200).json({ message: 'Post request received and data saved successfully', data });
    }
  })
})


