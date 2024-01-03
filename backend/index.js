const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
dotenv.config({ path: './config/config.env'})
const connect = mongoose.connect(process.env.MONGO_DB)

if(connect){
    console.log('Mongoose is connected successfully')
}

const PORT = process.env.PORT || 5000

//defining the schemas
const todosSchema = new mongoose.Schema({
    title: String,
    description: String
})

const Todos = mongoose.model('Todos', todosSchema)

app.get('/todos', async (req, res) => {
    const todos = await Todos.find({})
    res.json(todos)
})

app.post('/todos', async (req, res) => {
    const newTodo = new Todos(req.body)
    await newTodo.save()
    res.status(201).json({message: "Todo inserted successfully"})
})

app.put('/todos/:id', async (req, res) => {
    const updateTodo = await Todos.findByIdAndUpdate(req.params.id, req.body)

    if(updateTodo){
        res.status(201).json({message: "Update done successfully"})
    } else{
        res.status(400).json({ message: "Todo is not found"})
    }
})

app.get('/todos/:id', async (req, res) => {
    const todo = await Todos.findById(req.params.id)

    if(todo){
        res.json({ todo })
    } else{
        res.status(400).json({message: "Todo not found"})
    }
})

app.delete('/todos/:id', async (req, res) => {
    const todo = await Todos.findByIdAndDelete(req.params.id)

    if(todo){
        res.status(201).json({message: "Todo have been deleted successfully"})
    } else{
        res.status(400).json({message: "Todo not found"})
    }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))