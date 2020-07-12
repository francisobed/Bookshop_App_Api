const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _lodash = require('lodash');
const express = require('express');
const { User, validate } = require('../models/user');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already exist');

    user = new User(_lodash.pick(req.body, ['name', 'email', 'password']));
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_lodash.pick(user, ['_id', 'name', 'email']));
});


module.exports = router;