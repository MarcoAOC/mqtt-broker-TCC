require("dotenv").config();

var httpServ = require('http').createServer();
const mosca = require('mosca');
var mqttServ = new mosca.Server({});

var authenticate = function (client, username, password, callback) {
    var authorized = (username === process.env.CLIENT_ID && password.toString() === process.env.CLIENT_SECRET );
    if (authorized) client.user = username;
    callback(null, authorized);
}
function setup() {
    mqttServ.authenticate = authenticate;
}

mqttServ.on('ready', setup)
mqttServ.attachHttpServer(httpServ);

httpServ.listen(process.env.PORT || 8080);
