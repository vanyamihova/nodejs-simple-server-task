var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("You are in the reception");
});

app.get("/basement", function(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("You are in wine cellar.");
});

app.get("/floor/:floornum/bedroom", function(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("You are in the bedroom on floor #" + req.params.floornum);
  // res.end("Hey, this is a private area!");
});

app.use(function(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.status(404).send("Page connot be found");
});

app.listen(8888);
