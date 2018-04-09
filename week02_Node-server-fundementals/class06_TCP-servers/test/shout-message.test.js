const shout = require('../lib/shout-message');
const assert = require('assert');

describe('shouting message', () => {

    it('does not shout on normal message', () => {
        assert.equal(shout('hello'), 'hello');
    });

    it('shouts back when message starts with !', () => {
        assert.equal(shout('!hello'), 'HELLO');
    });
});