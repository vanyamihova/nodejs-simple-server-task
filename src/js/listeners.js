var http = require("http");

var server = http.createServer(function(req, res){
  console.log("Server is running...");
});

server.on("close", function() {
  console.log("Goodbye");
});

server.listen(8888); // starts the server

server.close(); // stops the server
