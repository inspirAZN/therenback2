var models = require('../models.js');

exports.view = function(req, res){
  models.Favorites
  	.find()
  	.sort('rank')
  	.exec(renderFavorites);

  function renderFavorites(err, favorites){
  	res.render('favorites', {'favorites': favorites});
  }
};
