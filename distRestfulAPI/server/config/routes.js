var mongoose = require('mongoose');
var session = require('express-session');
var User = mongoose.model('User');
var users = require('../controller/tasks.js');

module.exports = function (app) {

app.get('/tasks', function(req,res){
 tasks.tasks(req, res);
});

app.get('/tasks/:id', function(req, res){
  tasks.tasksid(req, res);
});

app.post('/tasks', function (req, res) {
 tasks.postTask(req, res);
});

app.put('/tasks/:id', function(req, res){
  tasks.postTaskid(req, res);
});

app.delete('/tasks/:id', function(req, res){
  tasks.deleteTaskid(req, res);
});
};
