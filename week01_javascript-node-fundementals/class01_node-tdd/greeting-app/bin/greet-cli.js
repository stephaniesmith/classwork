/* eslint no-console: off*/
const getArgs = require('../lib/get-args');
const greet = require('../lib/greet');

const name = getArgs(process.argv);
const greeting = greet(name);

console.log(greeting);