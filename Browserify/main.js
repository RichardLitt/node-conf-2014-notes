// Lesson 1
// console.log('BEEP BOOP');

// Lesson 2
// var uniq = require('uniq');
// console.log(uniq(prompt().split(',')));

// Lesson 3
// var uniquely = require('./uniquely.js');
// var list = uniquely(prompt('this is a string'));

// console.log(list);

var parsedString = prompt('this is a string').parse();
var stringifiedString = parsedString.stringify();

console.log(parsedString, stringifiedString);

var ndjson = require('./ndjson.js');
