var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {

  var page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<!DOCTYPE html>" +
  "<html>" +
  " <head>" +
  "   <meta charset='utf-8' />" +
  "   <title>My Node.js page!</title>" +
  " </head>" +
  " <body>" +
  "   <p>");

  if(page == "/") {
    res.write("You are at the reception desk. How can I help you?");
  } else if (page == "/basement") {
    res.write("You are in the wine cellar. These bottles are mine!");
  } else if (page == "/floor/1/bedroom") {
    res.write("Hey, this is a private area!");
  }

  if("firstname" in params && "lastname" in params) {
    res.write("   </p><p>" +
    "     Your name is " + params["firstname"] + " " + params["lastname"]);
  } else {
    res.write("   </p><p>" +
    "     You do have a first name and a last name, don't you?");
  }

  res.write("   </p>" +
  " </body>" +
  "</html>");
  res.end();
});

server.listen(8888);
