const Book = require('../model/book');


exports.getAllBooks = async (req, res) =>{
    try{
        const books = await Book.find()
        res.json(books)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}
exports.getSingleBook = async (req, res) =>{
    try {
        const book = await Book.findOne({bookId: req.params.id})
        if(!book)
            return res.status(404).json({msg: 'book Not found'})
        
        res.json(book)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}
exports.addNewBook = async(req, res) =>{
    try{
        const newbook = await Book.findOne({bookId: req.body.bookId})
        if(!newbook){
            const addedBook = await Book.create(req.body)
            res.json(addedBook)
        }
        else{
            res.json({msg: 'book already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}
exports.updateBook = async (req,res) =>{
    try{
        const book = req.body
        const fetchedbook = await Book.findOne({bookId: book.bookId})
        if(fetchedbook)
        {
            await Book.updateOne({ bookId: book.bookId }, // Filter: Find the product by proId
                { $set: book }   )
            res.json(await Book.findOne({bookId: book.bookId}))
        }
        else{
            res.json({msg:'Book does not exists'})
        }
    }
    catch(err)
    {
        res.status(500).json({msg:err.message})
    }
}

exports.deleteBook = async(req, res)=>
{
    try{
        const book = await Book.findOne({bookId:req.params.id})
        if(book)
        {
            await Book.deleteOne({bookId:book.bookId})
            res.json(book)
        }
        else{
            res.json({msg:'Book doesnt exists'})
        }}
        catch(err)
        {
            res.status(500).json({msg:err.message})
        }
    }
