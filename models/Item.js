const mongoose = require('mongoose')
const Schema = mongoose.Schema

//
const ItemSchema = new Schema({
    name: {type: String, required: true},
    date: {type: Date, default: Date.now},
}, {timestamp: true})

module.exports = Item = mongoose.model('item', ItemSchema)
