const express = require ("express")
const mongoose = require("mongoose")
const bodyParser = require ('body-parser')


const server = express()

server.use (bodyParser.json())
mongoose.connect("mongodb://localhost:27017/mern_shopping",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})