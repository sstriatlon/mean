var express  = require('express');
var app      = express(); 					
var mongoose = require('mongoose'); 				
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port =process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/FinalMean');

//Middleware
app.use(express.static(__dirname + '/angular'));
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method-Override'));

require('./app/routes.js')(app);

app.listen(port);
console.log("APP por el puerto" + port);