const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()
const SECRET = "ilhok tariv"

app.use(express.json())
app.use(cors())
dotenv.config({ path: './config/config.env'})
const connect = mongoose.connect(process.env.MONGO_DB)

function generateJwt(username){
    const token = jwt.sign(username, SECRET)
    return token
}

function authenticateUser(req, res, next){
    const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

if(connect){
    console.log('Mongoose is connected successfully')
}

const PORT = process.env.PORT || 5000

//defining the schemas
const todosSchema = new mongoose.Schema({
    title: String,
    description: String
})

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const Todos = mongoose.model('Todos', todosSchema)
const User = mongoose.model('User', userSchema)

app.post('/signup', async (req, res) => {
    const { username, password } = req.body

    if(!username || !password){
        res.status(403).json({message: "Enter username and password"})
    } else{
        if(await User.findOne({username: username})){
            res.status(401).json({message: "Username already exists"})
        } else{
            const newUser = new User(req.body)
            await newUser.save()
            res.status(201).json({message: "User created successfully", token: generateJwt(username)})
        }
    }
})

app.post('/signin', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({username: username, password: password})

    if(user){
        res.status(201).json({message: "Login is done successfully", token: generateJwt(username)})
    } else{
        res.status(403).json({message: "Create a profile to login"})
    }
})

app.get('/todos', authenticateUser, async (req, res) => {
    const todos = await Todos.find({})
    res.json(todos)
})

app.get('/profile', authenticateUser, (req, res) => {
    res.json({username: req.user})
})

app.post('/todos', authenticateUser, async (req, res) => {
    const newTodo = new Todos(req.body)
    await newTodo.save()
    res.status(201).json({message: "Todo inserted successfully"})
})

app.put('/todos/:id',authenticateUser, async (req, res) => {
    const updateTodo = await Todos.findByIdAndUpdate(req.params.id, req.body)

    if(updateTodo){
        res.status(201).json({message: "Update done successfully"})
    } else{
        res.status(400).json({ message: "Todo is not found"})
    }
})

app.get('/todos/:id',authenticateUser, async (req, res) => {
    const todo = await Todos.findById(req.params.id)

    if(todo){
        res.json({ todo })
    } else{
        res.status(400).json({message: "Todo not found"})
    }
})

app.delete('/todos/:id',authenticateUser, async (req, res) => {
    const todo = await Todos.findByIdAndDelete(req.params.id)

    if(todo){
        res.status(201).json({message: "Todo have been deleted successfully"})
    } else{
        res.status(400).json({message: "Todo not found"})
    }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))