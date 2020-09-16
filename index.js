const winston = require('winston');
const express = require('express');
const app = express();
const  morgan = require('morgan')

app.use(morgan('dev'));
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);

const port = process.env.PORT || 3300;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;