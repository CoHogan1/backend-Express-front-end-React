const express = require('express')
const router = express.Router()
// Item model
const Item = require('../../models.Item')

// @route GET api/items
// @desc Get all items.
// @access Public

router.get('/',(req,res)=>{
    console.log("get all items")
    Item.find()
    .sort({date: -1})
    .then(items => {res.json(items)})
})

module.exports = router
