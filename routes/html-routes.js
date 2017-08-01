// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var express = require("express");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");


module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("members");
    }
    res.render("login");
  });


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.render("members");
  });

  app.get("/carSignup", isAuthenticated, function(req, res) {
    res.render("carSignup");
  });

  app.get("/post", isAuthenticated, function(req,res) {
    res.render("post");
  });

  app.get("/search", isAuthenticated, function(req,res){
    db.Post.findAll({

    }).then(function(data){
      //console.log(data);
      res.render("search", { posts: data });
    });
  });

  app.get("/accountInfo", isAuthenticated, function(req,res){
    db.User.findAll({
      limit: 1
    }).then(function(data){
      res.render("accountInfo", { users: data });
    });

  });

  // app.get("/confirmation", isAuthenticated, function(req,res){
  //   db.User.findAll({
  //
  //   }).then(function(data){
  //     res.render("confirmation", {users: data});
  //   });
  //
  // });



};
