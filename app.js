var express = require('express');
// var path = require('path');
var logger = require('morgan');

var v1Router = require('./routes/v1Router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1', v1Router);

module.exports = app;
