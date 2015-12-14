'use strict';

var express = require('express');
var app = express();

var generateMetaphor = function (req, res, next) {
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
  
  next();
};

app.use(generateMetaphor);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
