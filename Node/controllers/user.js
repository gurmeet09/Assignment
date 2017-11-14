// Import required module
var User = require('../models/user')

var mongoose = require('mongoose')

exports.getAllUsers = function (req, res) {
  console.log('getall')
  User.find({}, function (error, response) {
    if (error) {
      return res.json(req, res, error)
    }
    // sending the reponse to the browser
    res.json(response)
  })
}

// Post users
exports.postUser = function (req, res) {
  console.log('post')
  var user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    user_type:req.body.user_type,
    created_at: new Date(),
    updated_at: new Date()
  })

  user.save(function (err, response) {
    if (err) {
      return res.json(err)
    }

    else
    res.json({"status": true, body: response})
  })
}
exports.usercheck = function (req, res) {
    console.log(req.body)
    var username = req.body.username
    User.findOne({
      username: username
    }, function (err, user) {
        if (err) {
          res.json(err);
        }
        if (user) {
          res.json({
            "status": true,
            "respData": {
              "data": user
            }
          });
        }
        else {
          res.json({
            "status": false,
            "respData": {
              "data": "user does not exist"
            }
          });
        }
      });
    }
