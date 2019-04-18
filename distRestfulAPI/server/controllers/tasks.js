// var mongoose = require('mongoose');
// var Task = mongoose.model('Task');
//
// module.exports = {
//   tasks: function(req,res){
//     Task.find({}, function(err, task_list){
//       if(err){
//         console.log('Returned error', err);
//         res.json({message: 'Error', err: err});
//       }
//       else {
//         res.json(task_list);
//       }
//     });
//   },
//
//   tasksid: function(req, res){
//     Task.findOne({_id: req.params.id}, function(err, task_detail){
//       if(err){
//         console.log('Returned error', err);
//         res.json({message: 'Error displaying task', err: err});
//       }
//       else {
//         res.json(task_detail);
//       }
//   });
// },
//
//   postTask: function(req, res) {
//     console.log('POST DATA', req.body);
//     var newTask = new Task({
//         title: req.body.title,
//         description: req.body.description,
//       });
//     newTask.save(function (err) {
//       if (err) {
//         console.log('something went wrong');
//         res.json({message: 'Error', err: err});
//       } else {
//         console.log('message: Success, task: task');
//         res.json({});
//       }
//     });
//   },
//
//   postTaskid: function(req, res){
//     Task.updateOne({_id:req.params.id}, {title: req.params.title, description: req.params.description, completed: req.params.completed}, function(err, result){
//       if(err){
//         console.log(err);
//         res.json({message: 'Error'});
//       } else {
//         console.log('Task updated');
//         res.json({});
//       }
//     });
//   },
//
//   deleteTaskid: function(req, res){
//     Name.deleteOne({_id: req.params.id}, function(err, result){
//       if(err){
//         console.log('Could not delete', err);
//         res.json({message: 'Error deleting', err: err});
//       }
//       else {
//         console.log('Success deleting' + 'req.params.id');
//         res.json({});
//       }
//     });
// }
// };
