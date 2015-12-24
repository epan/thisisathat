'use strict';

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

constructMetaphor(nouns);
