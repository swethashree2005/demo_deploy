const mongoose = require('mongoose')

const bookSchema=
{
bookId:{type:Number,required:true},
name:{type:String,required:true}
}
module.exports=mongoose.model("Book",bookSchema)