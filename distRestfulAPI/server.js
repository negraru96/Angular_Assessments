var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/AngularApp/dist' ));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

app.listen(8000, function () {
  console.log('listening to port 8000');
});
