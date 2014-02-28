var Mongoose = require('mongoose');

var UserSchema = new Mongoose.Schema({
  "name": String,
  "email": String,
  "password": String
});
exports.User = Mongoose.model('User', UserSchema);

var MomentsSchema = new Mongoose.Schema({
  // fields are defined here
  "location": String,
  "imgsrc": String,
  "numPhotos": Number,
  "heart": String
});
exports.Moments = Mongoose.model('Moments', MomentsSchema);

var myMomentsSchema = new Mongoose.Schema({
  // fields are defined here
  "location": String,
  "imgsrc": String,
  "numPhotos": Number,
  "heart": String
});
exports.myMoments = Mongoose.model('myMoments', myMomentsSchema);

var FavoritesSchema = new Mongoose.Schema({
  // fields are defined here
  "location": String,
  "rank": Number
  "url": String
});
exports.Favorites = Mongoose.model('Favorites', FavoritesSchema);

