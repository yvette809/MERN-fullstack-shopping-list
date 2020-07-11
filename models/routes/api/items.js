const express = require ("express");
const router = express.Router();


//item model
const item = require('../../schema');

// @ route get request api/items
//sol1
router.get('/',  async(req,res)=>{
    const items = await item.find(req.query)
})

// sol2
router.get('/', (req,res) =>{
    const items = item.find()
    .sort({date:-1})
    // the database we return us the items
    .then(items => res.json(items))
})







module.exports = router;