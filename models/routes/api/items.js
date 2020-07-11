const express = require ("express");
const router = express.Router();


//item model
const Item = require('../../schema');

// @ route get request api/items
//sol1
router.get('/',  async(req,res)=>{
    const items = await Item.find(req.query)
    res.status(200).send(items)
})

// sol2
router.get('/', (req,res) =>{
    const items = Item.find()
    .sort({date:-1})
    // the database we return us the items
    .then(items => res.json(items))
})

// create a post
//sol 1
router.post('/', (req,res)=>{
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
    .then(item => res.json(item))
})
// sol2
router.post('/', async(req,res)=>{
    const newItem = await new Item(req.body.name)
    const response = await newItem.save()
    res.status(201).send(response)

})





module.exports = router;