'use strict';

var nouns = [
  'cat',
  'dog',
  'mouse',
  'house'
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
