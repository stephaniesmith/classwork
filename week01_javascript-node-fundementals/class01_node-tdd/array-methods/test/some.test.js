const assert = require('assert');
const some = require('../lib/some');

describe('some', () => {
    it('returns false if no elements match', () => {
        const arr = [1, 3, 5, 7];
        const hasEven = some(arr, x => x % 2 === 0);
        assert.equal(hasEven, false);
    });
});