const auth = require('../middleware/auth')
const joi = require('joi')
const {Book, validate} = require('../models/book'); 
const {Author} = require('../models/author'); 
const {Customer} = require('../models/customer'); 
const mongoose = require('mongoose');
const Fawn = require('fawn');
const express = require('express');
const router = express.Router();

Fawn.init(mongoose);

router.get('/', async (req, res) => {
  const books = await Book.find().sort('-dateOut');
  res.send(books);
});

router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findById(req.body.customerId);
  if (!customer) return res.status(400).send('Invalid customer.');

  const author = await Author.findById(req.body.authorId);
  if (!movie) return res.status(400).send('Invalid Author.');

  if (author.availInStock === 0) return res.status(400).send('Author not in stock.');

  let book = new Book({ 
    customer: {
      _id: customer._id,
      name: customer.name, 
      phone: customer.phone
    },
    author: {
      _id: author._id,
      title: author.title,
    }
  });
  try {
      new Fawn.Task()
        .save('author', author)
        .update(
          'authors',
          { _id: author.id }
        )
        .run();

      res.send(rental);
  }
  catch (ex) {
    res.status(500).send('Something failed')
  }

});

router.get('/:id', async (req, res) => {
  const author = await Author.findById(req.params.id);

  if (!author) return res.status(404).send('The author with the given ID was not found.');

  res.send(author);
});

module.exports = router; 