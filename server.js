const express = require ("express")
const mongoose = require("mongoose")
const bodyParser = require ('body-parser')

const items = require('./models/routes/api/items')



const server = express()

server.use (bodyParser.json())

// connect to database
mongoose.connect("mongodb://localhost:27017/mern_shopping",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// use routes
server.use ('/api/items', items)
const port = process.env.PORT || 5000
server.listen(port, () =>{
    console.log(`server started on port ${port}`)
})