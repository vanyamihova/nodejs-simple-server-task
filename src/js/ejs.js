var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("You are in the reception");
});

app.get("/basement", function(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("You are in wine cellar. These bottles are mine!");
});

app.get("/floor/:floornum/bedroom", function(req, res){
  res.setHeader("Content-Type", "text/plain");
  res.render("bedroom.ejs", {floor: req.params.floornum});
});

app.get("/count/:number", function(req, res) {
  var names = ["Robert", "Jack", "David", "Ben", "John", "Albert", "Ronald"];
  res.render("countNumber.ejs", {counter:req.params.number, names: names});
});

app.use(function(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.status(404).end("Page can not be found");
});

app.listen(8888);
