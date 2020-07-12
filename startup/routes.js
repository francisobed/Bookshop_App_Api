const express = require('express');
const orders = require('../routes/orders');
const customers = require('../routes/customers');
const authors = require('../routes/authors');
const books = require('../routes/books')
const users = require('../routes/users');
const auth = require('../routes/auth')
const error = require('../middleware/error');


module.exports = function (app) {
    app.use(express.json());
    app.use('/api/orders', orders);
    app.use('/api/customers', customers);
    app.use('/api/authors', authors);
    app.use('/api/books', books);
    app.use('/api/users', users);
    app.use('/api/auth', auth)
    app.use(error);
}