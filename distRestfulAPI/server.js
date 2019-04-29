var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/AngularApp/dist' ));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/RestfulAPI');

var TaskSchema = new mongoose.Schema({
  _id: { type: mongoose.SchemaTypes.ObjectId, required: true },
  title: {type: String, default: "" },
  description: {type: String, default: "" },
  completed: {type: Boolean, default: false },
}, { timestamps: true });
mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');

app.get('/tasks', function(req,res){
    Task.find({}, function(err, tasks){
      console.log(req.body);
      if(err){
        console.log('Returned error', err);
          res.json({message: 'Error finding task', err: err});
      }
      else {
        res.json({message: 'Success', tasks: tasks});
      }
    });
  });

app.get('/tasks/:id', function(req, res){
  console.log(req.params.id);
  var id = req.params.id;
  Task.findOne({_id: id}, function(err, task) {
    if(err){
      console.log('Returned error', err);
      res.json({message: 'Error displaying task', err: err});
    }
    else {
      res.json({message: 'Success', task: task});
    }
});
});

app.post('/tasks', function (req, res) {
  Task.create({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    },
  function (err, tasks) {
    if (err) {
      console.log('something went wrong');
      res.json({message: 'Error', err: err});
    } else {
      console.log('Success');
      res.json({message: 'Success', tasks: tasks});
    }
  });
});

app.put('/tasks/:id', function(req, res){
  var id = req.params.id;
  Task.findById(id, function(err, task) {
    if (err) {
      console.log('something went wrong');
    } else {
      if(req.body.description) {
        task.description = req.body.description;
      }
      if (req.params.completed) {
        task.completed = req.body.completed;
      }
      task.save(function(err) {
        if (err) {
          console.log('Returned error', err);
          res.json({ message: 'Error', error: err});
        } else {
          console.log('successfully edited task');
          res.json(task);
        }
      });
    }
  });
});

app.delete('/tasks/:id', function(req, res){
  var id = req.params.id;
  Task.remove({_id: id}, function(err) {
    if (err){
      console.log('Could not delete', err);
      res.json({message: 'Error deleting', err: err});
    }
    else {
      console.log('Success deleted task');
      res.json({message: 'Success'});
    }
  });
});

app.listen(8000, function () {
  console.log('listening to port 8000');
});
