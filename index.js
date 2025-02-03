const express = require('express')
const app = express();
const mongoose = require('mongoose')
const BookRouter = require('./routes/bookroutes')

app.use(express.json())
app.use("", BookRouter)

app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb://localhost:27017/bookstore')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))
// app.get('/',(req,res)=>{
//     console.log("server reacted...")
// })