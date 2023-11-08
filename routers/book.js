const router = require('express').Router({mergeParams: true});

const {addBook, getBook, modifyBook, deleteBook} = require('../middleware')

router.post('/add', addBook);
router.get('/get', getBook);
router.get('/get/:id', getBook);
router.post('/modify/:id', modifyBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;
