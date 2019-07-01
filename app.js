var express = require('express');
// var path = require('path');
var logger = require('morgan');

var v1Router = require('./routes/v1Router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,x-token");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});

app.options('*', function(req, res, next) {
  res.send('')
});

app.use('/v1', v1Router);

module.exports = app;
