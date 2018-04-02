const assert = require('assert');
const greet = require('../lib/greet');

describe('greeting', () => {

    it('says hello to argument passed in', () => {
        const greeting = greet('world');
        assert.equal(greeting, 'Hello world');
    });

    it('default to stranger when no name given', () => {
        const greeting = greet();
        assert.equal(greeting, 'Hello stranger');
    });
    
});