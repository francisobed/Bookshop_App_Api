const Joi = require('joi');
const mongoose = require('mongoose');

const Order = mongoose.model('Order', new mongoose.Schema({
  customer: { 
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      },
      phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      }      
    })
  },
  book: {
    type: new mongoose.Schema({
      title: {
        type: String,
        required: true,
        trim: true, 
        minlength: 5,
        maxlength: 255
      },
      dailyOrderRate: { 
        type: Number, 
        required: true,
        min: 0,
        max: 255
      }   
    }),
    required: true
  },
  dateOrdered: { 
    type: Date, 
    required: true,
    default: Date.now
  }
}));

function validateRental(rental) {
  const schema = {
    // @ts-ignore
    customerId: Joi.objectid().required(),
    // @ts-ignore
    bookId: Joi.objectid().required(),
  };

  return Joi.validate(rental, schema);
}

exports.Order = Order; 
exports.validate = validateRental;