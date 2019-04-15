var mongoose = require('mongoose');
var Pokemon = mongoose.model('Pokemon');

module.exports = {
  showAll: function(req, res){
    Pokemon.find({}, function(err, data){
      if(err){
        console.log('Returned error', err);
        res.json({ message: 'Error', err: err});
      }
      else {
        console.log(data);
        res.json({ message: 'Success', data: data});
      }
    });
  },

 showOne: function(req, res){
  Pokemon.findOne({ _id: req.params.id}, function(err, data){
    if(err){
      console.log('Returned error', err);
      res.json({message: 'Error displaying Pokemon', err: err});
    }
    else {
      console.log(data);
      res.json({ message: 'Success', data:data});
    }
  });
},

 create: function(req, res){
  console.log('Post Data', req.body);
  var newPoke = new Pokemon({
    title: req.body.title,
    description: req.body.description,
  });
  newPoke.save(function (err) {
    if (err) {
      console.log('error');
      res.json({ message: 'Error', err: err});
    } else {
      console.log('Successfully saved data');
      res.json({message: 'Success', data: data});
    }
  });
},

 update: function(req, res){
   console.log(req.params.id);
   Pokemon.update({ _id: request.params.id, title: req.params.title, description: req.params.description, completed: req.params.completed}, function(err, result){
     if(err){
       console.log(err);
       res.json({ message: 'Error', err: err});
     } else {
       console.log('Successfully updated');
       res.json({});
     }
   });
 },

 destroy: function(req, res){
   Pokemon.remove({_id: req.params.id}, function(err, data){
     if(err){
       console.log('Cold not delete');
       res.json({ message: 'Error', err: err});
     } else {
       console.log('Successfully removed');
       res.json({ message: 'Success', data: data});
     }
   });
 },

};
