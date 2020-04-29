var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({extended: true}) );


app.use( '/public', express.static( __dirname + '/public') );

app.use('/wx', require('./routers/wx'));

app.listen(8888);