'use strict';

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Hardcoded list of possible nouns
var NOUNS = [
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
function capitalizeFirstLetter(word) {
  if (word.length > 1) {
    return word.charAt(0).toUpperCase() + word.slice(1);    
  } else {
    return word.toUpperCase();
  }
}

// Randomly select two nouns and generate a sentence
function constructMetaphor(nouns) {
  var metaphor = '';
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
  return metaphor;
}

constructMetaphor(NOUNS);

  // TODO: Figure out how to reference a file for the list of nouns externally
  // TODO: Prevent same noun from being selected twice
  // TODO: Figure out what to do for plural nouns for "are" instead of "is"
  // TODO: Figure out how to deal with "is an" instead of "is a"
  // TODO: Make post to Twitter
