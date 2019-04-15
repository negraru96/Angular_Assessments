var express = require('express');
var app = express();
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./../AngularApp/dist")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/my_pokemon');
require('./models/Pokemon.js');

require('./config/routes')(app);

app.listen(8000, function () {
  console.log('listening to port 8000');
});
