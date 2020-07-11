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

// get a single item

// create a post
//sol 1
// router.post('/', (req,res)=>{
//     const newItem = new Item({
//         name: req.body.name
//     })
//     newItem.save()
//     .then(item => res.json(item))
// })
// sol2
router.post('/', async(req,res)=>{
    const newItem = await new Item({
       name: req.body.name})
    const response = await newItem.save()
    res.status(201).send(response)

})


// delete item
 //sol1
 router.delete('/:id', (req,res)=>{
     const item = Item.findById(req.params.id)
     .then(item => item.remove().then(() => res.json({success: true})))
     .catch(err => res.status(404).json({success:false}))
 })

 //sol2
 router.delete('/:id', async(req,res,next)=>{
     const item = await Item.findByIdAndDelete(req.params.id)
     if(item){
         res.status(200).send("deleted")
     }else{
         const error = new Error()
         error.httpStatusCode = 404
         next(error)
     }
 })
 





module.exports = router;