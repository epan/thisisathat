'use strict';

var Twitter = require('twitter');
var Articles = require('articles');
var NOUNS = require('./assets/nouns');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Capitalizes the first letter of a string
function capitalizeFirstLetter(word) {
  if (word.length > 1) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } else {
    return word.toUpperCase();
  }
}

// Randomly select two nouns from an array and generate a sentence
function constructMetaphor(nouns) {
  var metaphor = '';
  var numberOfNouns = nouns.length;
  var firstNoun = nouns[getRandomInt(0, numberOfNouns)];
  var secondNoun = nouns[getRandomInt(0, numberOfNouns)];

  metaphor = capitalizeFirstLetter(firstNoun) + ' is ' + Articles.articlize(secondNoun) + '.';
  console.log(metaphor);
  return metaphor;
}

// Post to twitter
client.post('statuses/update', {status: constructMetaphor(NOUNS)}, function callback(error, tweet, response) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(tweet);
  console.log(response);
});
