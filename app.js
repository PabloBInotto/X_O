var path = require('path');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var mongoose = require("mongoose");

// Start mongoDB
mongoose.connect("mongodb://127.0.0.1:27017", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
// Create mongo schema
var db = mongoose.connection;
var schema = mongoose.Schema({
  player: String,
  result: Array,
});

var Model = mongoose.model("model", schema, "myCollection");

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");
});

var port = 3000;
// socket.io communication
io.on('connection', (socket) => {

    socket.on('new_play', (msg) => {
      console.log('message: ' + + msg.best + ': ' + msg.played);

      // SAve data to DB
      var dados = new Model({ player: msg.best, result:  msg.played });
      dados.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Os dados foram salvos!");
      });

    });

    socket.on('Change_Level', (msg) => {
       console.log('message: ' + msg);
    });

    socket.on('Not_Winner', (msg) => {
      console.log('message: ' + msg);
    });

  });

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

app.get("/", function(req, res){
    res.render('index.html');
  });


app.get('/play', function(req, res){
    res.render('play.html');
});

server.listen(port, () => {
    console.log('listening on *:' + port);
});