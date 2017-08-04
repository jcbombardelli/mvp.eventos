var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
//var router = express.Router();

app.set('pathClientDist', path.join(__dirname, '../../client/dist'));
app.use(express.static(app.get('pathClientDist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('../router/router')(app);


// var mail = require('./mail');
// mail.sendMail();

module.exports = app;