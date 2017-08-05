
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

var passport = require("./config/passport");

var twilio = require('twilio');
var client = twilio('AC1a4c410b5f8ec1f1e3d35b29c58f7119', 'e1d1eb3bab340be569abc8864a1c9731');


var PORT = process.env.PORT || 8080;
var db = require("./models");



var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
