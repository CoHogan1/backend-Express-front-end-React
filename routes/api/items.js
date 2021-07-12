const express = require('express')
const router = express.Router()
// Item model
const Item = require('../../models/Item')

// @route   GET api/items
// @desc    Get all items.
// @access  Public
router.get('/',(req,res)=>{
    console.log("get all items")
    Item.find()
    .sort({date: -1})
    .then(items => {res.json(items)})
})

// @route   POST api/items
// @desc    post an items.
// @access  Public
router.post('/',(req,res)=>{
    console.log("post an item")
    const newItem = new Item({
        name: req.body.name
    }) // date is automatically inserted.
    newItem.save()
    .then(item => res.json(item))
})


// @route   DELETE api/items
// @desc    delete an items.
// @access  Public
router.delete('/:id',(req,res)=>{
    console.log("delete an item")
    Item.findById(req.params.id)
    .then(item => {
        item.remove()
        .then(()=> res.json({msg: "successful deletion"})
    )})
    .catch(err => res.status(404).json({msg: "could not find item"}))
})




module.exports = router
