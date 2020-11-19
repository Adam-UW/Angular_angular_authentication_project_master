"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CompanySchema = mongoose.Schema({
  name: String,
  price: Number,
  qty: Number
});
module.exports = mongoose.model('Items', CompanySchema);