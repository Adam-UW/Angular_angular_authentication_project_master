"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var cors = require('cors');

var config = require('./DB');

var userRoute = require('./routes/UserRoute');

var PORT = process.env.PORT || 5000;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(config.DB).then(function () {
  console.log('Database is connected');
}, function (err) {
  console.log('Can not connect to the database' + err);
});
var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
var corsOptions = {
  origin: ['http://localhost:4200', 'http://localhost:4300'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

};
app.use(cors(corsOptions));
app.use('/api/users', userRoute);

require('./routes/companyRoute.js')(app);

require('./routes/Items.js')(app);

app.listen(PORT, function () {
  console.log("Server is running on PORT ".concat(PORT));
});