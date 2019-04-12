var mongoose = require ('Mongoose');

var TaskSchema = new mongoose.Schema({
  title: {type: String, required: true, minlength: 3, maxlength: 64 },
  description: {type: String, required: true, minlength: 3, maxlength: 300 },
  completed: {type: Boolean, required: true},
}, { timestamps: true });
mongoose.model('Task', TaskSchema);
