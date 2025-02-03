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