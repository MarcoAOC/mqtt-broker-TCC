require("dotenv").config();

var httpServ = require('http').createServer();
const mosca = require('mosca');
var mqttServ = new mosca.Server({});



mqttServ.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
mqttServ.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});
mqttServ.attachHttpServer(httpServ);

httpServ.listen(process.env.PORT || 8080);
