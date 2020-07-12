// @ts-nocheck
const Joi = require('joi');
const mongoose = require('mongoose');
const { bookSchema } = require('./book');

const authorSchema = new mongoose.Schema({
  title: { type: String, require: true, trim: true },
  book: { type: bookSchema, required: true },
  availBooksInStock: { type: Number, required: true, min: 0, max: 255 }
});

const Author = mongoose.model('Author', authorSchema);

const validateAuthor = Author => {
  const Schema = {
    title: Joi.string().required(),
    bookId: Joi.objectid().required(),
    availBooksInStock: Joi.number()//books in stock
      .min(0)
      .required()
  };
  return Joi.validate(author, Schema);
};

exports.Author = Author;
exports.Validate = validateAuthor;
