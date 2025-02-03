const bookController = require('../controller/bookcontrol')
const router = require('express').Router()

router.get('/api/books', bookController.getAllBooks);
router.get('/api/book/:id', bookController.getSingleBook);

module.exports=router