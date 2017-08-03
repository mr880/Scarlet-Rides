
var express = require("express");
var db = require("../models");
var passport = require("../config/passport");
var router = express.Router();
var twilio = require('twilio');
var client = twilio('AC1a4c410b5f8ec1f1e3d35b29c58f7119', 'e1d1eb3bab340be569abc8864a1c9731');

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      first: req.body.first,
      last: req.body.last,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password,
      ruid: req.body.ruid,
      phone: req.body.phone
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.status(422).json(err.errors[0].message);
    });
  });

  app.post("/api/post", function(req, res) {

    db.Post.create({
      UserId: req.user.id,
      from: req.body.from,
      to: req.body.to,
      notes: req.body.notes,
      time: req.body.time,
      email: req.user.email,
      first: req.user.first,
      last: req.user.last,
      carSeats: req.user.carSeats,
      phone: req.user.phone
    }).then(function() {
      res.redirect("/api/user-data");
    }).catch(function(err) {
      res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });



  // Route for getting some data about our user to be used client side
  app.get("/api/user-data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      //console.log(req.user);

      db.User.findOne({
        where: {
          id: req.user.id
        },
        include:[db.Post]
      }).then(function(data){

        res.render("search", data );
      });
    }
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id,
        ruid: req.user.ruid
      });
    }
  });

  app.put("/search:id", function(req, res) {

    console.log(req);
    db.Post.update({
      carSeats: req.body.carSeats
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(function(data) {
      res.json("Success");
    });
  });

  app.get("/confirmation", function(req, res) {

    console.log(req);
    db.Post.findAll({
      confirm: req.body.confirm
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(function(data) {
      res.json("Success");
    });

  });

  app.put("/confirmation/:id", function(req, res) {

    console.log(req);
    db.Post.update({
      confirm: req.body.confirm
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(function(data) {
      res.json("Success");
    });

  });

  app.put("/signup/:id", function(req, res) {

    db.User.update({
      carYear: req.body.carYear,
      carModel: req.body.carModel,
      carColor: req.body.carColor,
      carSeats: req.body.carSeats
    }, {
      where: {
        id: req.user.id
      }
    }).then(function(data) {
        res.json("Success");
    });
  });

  app.get("/getPostInfo/:id", function(req, res){

    console.log(req);

    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]

    }).then(function(data){
      res.render("confirmation", data);
    });
  });

  app.put("/signup/", function(req, res) {
    console.log("YESTERDAYS PEOPLE");
    db.Post.update({

      carSeats: req.body.carSeats
    }, {
      where: {
        UserId: req.user.id
      }
    }).then(function(data) {
        res.json("Success");
    });
  });



  app.get("/confirmation_2", function(req, res){
    console.log("phoneeee");
    console.log(req);

    client.messages.create({
      to: '+1' + req.user.phone,
      from: '+12013544393',
      body: 'You have a rider, ' + req.user.first + ' ' + req.user.last + ' for your ride created on ' + req.user.createdAt
    }, function(err, data){
      if(err){
        console.log(err);
      }
      console.log(data);


    }).then(function(data){
      res.render("confirmation", data);
    });
  });

};
