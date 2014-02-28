var models = require('../models.js');

exports.view = function(req, res){
  models.myMoments
    .find()
    .exec(renderMyMoments);

  function renderMyMoments(err, mymoments){
    res.render('mymoments', {'mymoments': mymoments });
  }
};