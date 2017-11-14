// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var userSchema = new Schema({
    
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    username: { type: String },
    password: { type: String },
    user_type : {type: Number}
});

// we need to create a model for using schema
var User = mongoose.model('user', userSchema);

// make this available to our employee in our Node applications
module.exports = User;