const mongoose = require ("mongoose")
const Schema = mongoose.Schema



// create Schema
const ItemSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const item = mongoose.model("item", ItemSchema)

module.exports = item