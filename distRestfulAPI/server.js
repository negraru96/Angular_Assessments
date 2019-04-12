var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/RestfulAPI', { useNewUrlParser: true });
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(express.static( __dirname + '/AngularApp/dist' ));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var Task = mongoose.model('Task');

app.get('/tasks', function(req,res){
  Task.find({}, function(err, task_list){
    if(err){
      console.log('Returned error', err);
      res.json({message: 'Error', err: err});
    }
    else {
      res.json(task_list);
    }
  });
});

app.get('/tasks/:id', function(req, res){
  Task.findOne({_id: req.params.id}, function(err, task_detail){
    if(err){
      console.log('Returned error', err);
      res.json({message: 'Error displaying task', err: err});
    }
    else {
      res.json(task_detail);
    }
});
});

app.post('/tasks', function (req, res) {
  console.log('POST DATA', req.body);
  var newTask = new Task({
      title: req.body.title,
      description: req.body.description,
    });
  newTask.save(function (err) {
    if (err) {
      console.log('something went wrong');
      res.json({message: 'Error', err: err});
    } else {
      console.log('message: Success, task: task');
      res.json({});
    }
  });
});

app.put('/tasks/:id', function(req, res){
  Task.updateOne({_id:req.params.id}, {title: req.params.title, description: req.params.description, completed: req.params.completed}, function(err, result){
    if(err){
      console.log(err);
      res.json({message: 'Error'});
    } else {
      console.log('Task updated');
      res.json({});
    }
  });
});

app.delete('/tasks/:id', function(req, res){
  Name.deleteOne({_id: req.params.id}, function(err, result){
    if(err){
      console.log('Could not delete', err);
      res.json({message: 'Error deleting', err: err});
    }
    else {
      console.log('Success deleting' + 'req.params.id');
      res.json({});
    }
  });
});

app.listen(8000, function () {
  console.log('listening to port 8000');
});
