const assert = require('assert');
const CoolStringifier = require('../lib/cool-stringifier');

describe('Cool Stringifier', () => {

    let cool; 
    beforeEach(() => {
        cool = new CoolStringifier('This is so cool');
    });

    it('reverses word order', () => {
        assert.equal(cool.reverseWordOrder(), 'cool so is This');
    });
    
    it('reverse each word', () => {
        assert.equal(cool.reverseWords(), 'sihT si os looc');
    });
});