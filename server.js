const express = require('express')
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
const PORT = process.env.PORT || 3001
// routes
const items = require('./routes/api/items')

//db
const mongoURI = 'mongodb://127.0.0.1:27017/' + 'shopping'
const db = mongoose.connection

const app = express()

// body parser middle ware
app.use(bodyParser.json())

// connect to mongodb
mongoose.connect(mongoURI , { // start connection to db
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=>{
    console.log("Mongo connectoin established.")
})
// connection error handeling.
db.on('error', (err)=> console.log(err.message + ' Mongo is not running'))
db.on('connected', ()=> console.log('Mongo connected: ' + mongoURI))
db.on('disconnected', ()=> console.log('Mongo Disconnected'))


// use routes.
app.use('/api/items', items)

app.get('/',(req, res)=>{
    console.log('/ route')
    res.send('http://localhost:3001/api/items + whatever +')
})

app.listen(PORT, (req,res)=>{
    console.log("Server running on", PORT)
})
