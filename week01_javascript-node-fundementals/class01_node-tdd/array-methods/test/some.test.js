const assert = require('assert');
const some = require('../lib/some');

describe('some', () => {

    const isEven = x => x % 2 === 0;
    it('returns false if no elements match', () => {
        const arr = [1, 3, 5, 7];
        const hasEven = some(arr, isEven);
        assert.equal(hasEven, false);
    });

    it('returns true if at least one element matches', () => {
        const arr = [1, 3, 4, 7];
        const hasEven = some(arr, isEven);
        assert.equal(hasEven, true);
    });

    it('some short-circuits when one element is true', () => {
        const arr = [3, 2, 5, 6];
        const called = [];
        some(arr, x => {
            called.push(x);
            return isEven(x);
        });
        assert.deepEqual(called, [2, 3]);

    });
});