'use strict';

var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//
// Metaphor builder
//
app.use(function(req, res) {
  // Hardcoded list of possible nouns
  var nouns = [
    'cat',
    'dog',
    'mouse',
    'house'
  ];

  // Returns a random integer between min (included) and max (excluded)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Capitalizes the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Randomly select two nouns and generate a sentence
  function generateMetaphor(nouns) {
    var firstNoun = '';
    var secondNoun = '';
    var metaphor = '';

    var numberOfNouns = nouns.length;
    var nounIndex1 = 0;
    var nounIndex2 = 0;

    nounIndex1 = getRandomInt(0, numberOfNouns);
    nounIndex2 = getRandomInt(0, numberOfNouns);

    firstNoun = capitalizeFirstLetter(nouns[nounIndex1]);
    secondNoun = nouns[nounIndex2];

    metaphor = firstNoun + ' is a ' + secondNoun + '.';
    console.log(metaphor);
  }

  generateMetaphor(nouns);

  // TODO: Figure out how to reference a file for the list of nouns externally
  // TODO: Prevent same noun from being selected twice
  // TODO: Figure out what to do for plural nouns for "are" instead of "is"
  // TODO: Make post to Twitter
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
