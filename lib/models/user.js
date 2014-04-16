'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
});

mongoose.model('User', UserSchema);

