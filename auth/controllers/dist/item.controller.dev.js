"use strict";

var Item = require('../models/Items');

exports.findAll = function (req, res) {
  Item.find().then(function (products) {
    res.send(products);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message
    });
  });
};

exports.addCompany = function (req, res) {
  Item.create(req.body, function (err, data) {
    if (err) {
      throw err;
    }

    res.send(data);
  });
};