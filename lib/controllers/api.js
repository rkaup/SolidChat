'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Thing = mongoose.model('Thing');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.createUser = function(req, res) {
  var u = new User();
  u.username = req.body.params.username;
  if (!u.username) {
    res.json({"error": "no username given"});
    return;
  }
  // TODO take in password, hash it properly and so on

  u.save(function(e) {
    if (e) {
      if (e.code === 11000) { // duplicate key error
        res.json({"error": "username taken"});
      } else {
        //res.json(e);
        res.json({"error": "something bad happened"});
      }
    } else {
      res.json("ok");
    }
  });
};

exports.userExists = function(req, res) {
  var username = req.query.username;
  if (username) {
    User.findOne({'username': username}, function(e, u) {
      if (e) { // TODO what could cause this?
        res.json({'error': 'something bad happened'});
        return;
      }
      res.json(u && true || false);
    });
  } else {
    res.json({'error': 'no username given'});
  }
};

