const defaultGreeting = require('../lib/default-greeting');
const { assert } = require('chai');

describe('says hello world', () => {
    it('says hello world', () => {
        assert.equal(defaultGreeting(), 'hello world');
    });

    it('says custom salutation', () => {
        assert.equal(defaultGreeting('yo'), 'yo world');
    });
});