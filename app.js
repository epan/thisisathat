'use strict';

var nouns = [
  'cat',
  'dog',
  'mouse',
  'house'
];
var firstNoun = '';
var secondNoun = '';
var metaphor = '';

var numberOfNouns = nouns.length;
var lastNounIndex = nouns.length - 1;
var nounIndex1 = 0;
var nounIndex2 = 0;

console.log('The list of nouns is ' + nouns);
console.log('The first noun is ' + nouns[0]);
console.log('The last noun is ' + nouns[lastNounIndex]);
console.log('Number of nouns is ' + numberOfNouns);
console.log('Noun Index 1 is initialized as ' + nounIndex1);
console.log('Noun Index 2 is initialized as ' + nounIndex2);

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateMetaphor(nouns) {
  nounIndex1 = getRandomInt(0, numberOfNouns);
  nounIndex2 = getRandomInt(0, numberOfNouns);

  console.log('Noun Index 1 is set to ' + nounIndex1);
  console.log('Noun Index 2 is set to ' + nounIndex2);

  firstNoun = nouns[nounIndex1];
  secondNoun = nouns[nounIndex2];

  console.log('First noun is ' + firstNoun);
  console.log('Second noun is ' + secondNoun);

  metaphor = firstNoun + ' is a ' + secondNoun + '.';
  console.log(metaphor);
}

generateMetaphor(nouns);
