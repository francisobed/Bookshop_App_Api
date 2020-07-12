const winston = require('winston')
const mongoose = require('mongoose');
const { constant } = require('lodash');
// const config = require('config')

module.exports = function(){
    mongoose.connect('mongodb://localhost/Bookshop', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => winston.info('Connected to MongoDB...'))
}