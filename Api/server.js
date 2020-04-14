var app = require('./app');
const client = require("./twitter/twitterClient");
var port = process.env.PORT || 3060;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
const socket = require('socket.io');
const io = socket(server)
io.on('connection',(socket)=>{
    socket.on('getTweets', (name)=>{
      client.stream('statuses/filter', {track:name}, (stream)=>{
        stream.on('data', function(event) {
            console.log(event && event.text);
            io.emit('getTweets', event )
          });
       })
      // io.emit('getTweets','hi');
    })
    console.log('new user connected..', socket.id);
});