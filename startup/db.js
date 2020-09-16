const winston = require('winston')
const mongoose = require('mongoose');
const config = require('config')
// const {
//   constant
// } = require('lodash');

module.exports = function () {
  mongoose.connect('mongodb://localhost/Bookshop', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => winston.info(`DB Connected!`))
}