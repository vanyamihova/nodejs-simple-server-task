// The calling order for the middleware is extremely important!
// It can have a big impact on the functioning of the app

var express = require('express');
var morgan = require('morgan'); // Loads  the pieces of middleware for logging
var favicon = require('serve-favicon'); // Loads the pice of middleware for the favicon

var app = express();

// Loads the piece of middleware for logging
app.use(morgan("combined"));

// Specifies that the /public folder includes static files (basic piece of middleware loaded)
app.use(express.static(__dirname + "/public"));

// Activates the favicon specified
app.use(favicon(__dirname + "/public/favicon.ico"));

// Finally answers
app.use(function(req, res) {
  res.send("Hello World");
});

// Start the server
app.listen(8888);
