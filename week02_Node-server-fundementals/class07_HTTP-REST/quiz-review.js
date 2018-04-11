/*

Write a tested (mocha unit test) library function (a function exported from a module) that 
takes an array of numbers (you can assume valid input) and returns a new array that contains 
the square of the input numbers filtered to only contain those squares greater than 20.

Input	Output
[1, 4, 5, 7]	[25, 49]

*/

/* big-squares.test.js */

const assert = require('assert');

it('returns big square over 20', () => {
    assert.deepEqual(bigSquares([1, 4, 5, 7]), [25, 49]);
});


/* big-squares.js */

// module.exports = 
const bigSquares = numbers => numbers.map(x => x * x).filter(x => x > 20);

