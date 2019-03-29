const http = require('http');
const port=process.env.PORT || 5000
const fs = require('fs');
var express = require('express');
var app = express();
app.get('/', function(req, res, next) {
     res.set('Content-Type', 'application/json');
     res.status(200).send("Hello world");
});
app.get('/apple-app-site-association', function(req, res, next) {
	var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
     res.set('Content-Type', 'application/json');
     res.status(200).send(aasa);
});
// Express creates a server for you and starts it
var server = app.listen(port);