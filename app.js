'use strict';

var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Set ports in Heroku and locally
app.set('port', (process.env.PORT || 5000));

// Metaphor generator middelware
var randomMetaphor = function (req, res, next) {
  // Hardcoded list of possible nouns
  var nouns = [
    'cat',
    'dog',
    'mouse',
    'house'
  ];
  var metaphor = '';

  // Returns a random integer between min (included) and max (excluded)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Capitalizes the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Randomly select two nouns and generate a sentence
  function constructMetaphor(nouns) {
    var firstNoun = '';
    var secondNoun = '';

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

  return constructMetaphor(nouns);

  next();

  // TODO: Figure out how to reference a file for the list of nouns externally
  // TODO: Prevent same noun from being selected twice
  // TODO: Figure out what to do for plural nouns for "are" instead of "is"
  // TODO: Figure out how to deal with "is an" instead of "is a" // TODO: Make post to Twitter }; // Posts a tweet var postTweet = function (tweetText) { client.post('statuses/update', {status: tweetText},  function(error, tweet, response) { if(error) { throw error; } console.log(tweet);  // Tweet body. }); }; // Load the middleware
app.use(postTweet(randomMetaphor()));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
