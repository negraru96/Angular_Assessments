var mongoose = require('mongoose');

var PokemonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  completed: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });
mongoose.model('Pokemon', PokemonSchema);
