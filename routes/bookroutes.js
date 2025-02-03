const bookController = require('../controller/bookcontrol')
const router = require('express').Router()

router.get('/api/books', bookController.getAllBooks);
router.get('/api/book/:id', bookController.getSingleBook);
router.post('/api/book', bookController.addNewBook);
router.put('/api/book', bookController.updateBook);
router.delete('/api/book/:id', bookController.deleteBook);

module.exports=router
