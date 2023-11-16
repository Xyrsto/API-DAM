//utilização do express para criar e configurar o servidor
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const bcrypt = require('bcrypt')  
const Color = require('./models/colorModel')
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

//teste adicionar cor
app.post('/addColor', async(req, res) =>{
  try{
    const color = await Color.create(req.body)
    console.log('Color created:', color); // Log user object for debugging
    res.status(200).json(color)
  }
  catch(err){
    console.log(err.message)
    res.status(500).json({msg: err.message})
  }
})

app.post('/addUser', async (req, res) => {
  try {
    const user = req.body;

    const existingUsername = await User.findOne({ username: user.username });
    if (existingUsername) {
      return res.status(400).json({ msg: 'Username is already taken' });
    }

    const existingEmail = await User.findOne({ email: user.email });
    if (existingEmail) {
      return res.status(400).json({ msg: 'Email is already in use' });
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

    const createdUser = await User.create(user);
    res.status(200).json(createdUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: err.message });
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      console.log('Retrieved User:', user.username);
      console.log(password); 
      console.log(user.password); 

      if (passwordMatch) {
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Internal server error' });
  }
});

app.post("/getId", async(req, res) => {
  try {
    const userId = await User.findOne({username: req.body.username}).distinct("_id")
    res.status(200).json({id: userId+""})
  } catch (err) {
    console.log(err.message);
    res.status(500).json({msg: err.message})
  }
})

app.get('/getColor', async(req, res) => {
  try{
    const colorCode = await Color.find();
    res.send(colorCode);
  }
  catch(err){
    console.log(err.message);
    res.status(500).json({msg: err.message})
  }
})







