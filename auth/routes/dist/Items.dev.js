"use strict";

module.exports = function (app) {
  var items = require('../controllers/item.controller');

  app.get('/api/items', items.findAll);
  app.post('/api/items', items.addCompany);
};