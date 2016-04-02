var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

game.on("gameover", function(message) {
  console.log(message);
});

game.emit("gameover", "You win!");


game.on("newplayer", function(name, age) {
  console.log("My name is: " + name);
  console.log("My age is: " + age);
})

game.emit("newplayer", "Mario", 35);
