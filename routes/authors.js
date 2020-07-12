const auth = require('../middleware/auth')
const express = require('express');
const mongoose = require('mongoose');
const { Author, Validate } = require('../models/author');
const { Book } = require('../models/book');

const router = express.Router();

router.get('/', async (req, res) => {
  const authors = await Author.find().sort('name');
  res.send(authors);
});

router.post('/', auth, async (req, res) => {
  const { error } = Validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const book = await Book.findById(req.body.bookId);
  if (!book) return res.status(400).send('Invalid book')
  const author = new Author({
        title: req.body.title,
        book: {
          _id: book._id,
          name: book.name
        },
    availBooksInStock: req.body.availBooksInStock
        // dailyRentalrate: req.body.dailyRentalrate
      });
      await author.save();

});

module.exports = router;
                                                                                                                                                                      