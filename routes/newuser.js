var models = require('../models');

exports.view = function(req, res) { 
  res.render('newuser');
}

exports.addUser = function(req, res) {
  var form_data = req.body;


  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
  var addUser = new models.User({
    "name": String,
    "email": String,
    "password": String
  });
  addUser.save(afterSaving);

  function afterSaving(err) {
    if(err) {
      console.log(err);
      res.send(500);
    }
    res.redirect('/newuser');
    res.send();
  }

}

