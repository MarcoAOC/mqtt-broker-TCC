require("dotenv").config();

var httpServ = require('http').createServer();
const mosca = require('mosca');
var mqttServ = new mosca.Server({});


mqttServ.on('ready', setup)
mqttServ.attachHttpServer(httpServ);

httpServ.listen(process.env.PORT || 8080);
