const Joi = require('joi');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Book = mongoose.model('Book', bookSchema);

function validateGenre(book) {
  const schema = {
    name: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(book, schema);
}

exports.bookSchema = bookSchema;
exports.Book = Book;
exports.validate = validateGenre;