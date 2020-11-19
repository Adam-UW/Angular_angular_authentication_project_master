
const Item = require('../models/Items');


exports.findAll = (req, res) => {
  Item.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.addCompany = (req, res) => {
  Item.create(req.body, (err, data) => {
      if (err) { throw err; }
      res.send(data);
  })
};
