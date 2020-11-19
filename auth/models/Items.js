const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CompanySchema = mongoose.Schema({
    name: String,
    price: Number,
    qty:Number
});

module.exports = mongoose.model('Items', CompanySchema);
