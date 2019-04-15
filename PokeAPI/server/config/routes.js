var mongoose = require('mongoose');
var Pokemon = mongoose.model('Pokemon');
var pokemon = require('../controllers/pokemon.js');

module.exports = function (app) {

app.get('/pokemon', function (req, res) {
  pokemon.showAll(req, res);
});

app.get('https://https://pokeapi.co/api/v2/pokemon/1/', function (req, res) {
  pokemon.showOne(req, res);
});

app.post('/pokemon', function (req, res) {
  pokemon.create(req, res);
});

app.put('/pokemon/:id', function (req, res) {
  pokemon.update(req, res);
});

app.delete('/pokemon/:id', function (req, res) {
  pokemon.destroy(req, res);
});

};
