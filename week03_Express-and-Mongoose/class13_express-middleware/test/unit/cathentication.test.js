const { assert } = require('chai');
const cathentication = require('../../lib/util/cathentication');

describe('cathentication', () => {

    it('calls next when query access_token is password', () => {

        const middleware = cathentication('meow');

        const req = {
            query: {
                access_token: 'meow'
            }
        };

        let called = false;
        const next = () => { called = true; };

        middleware(req, null, next);

        assert.isTrue(called);
    });

    it('return 401 if bad password', () => {
        const middleware = cathentication('meow');
        
        const req = {
            query: {
                access_token: 'woof'
            }
        };
        const res = {
            sendStatus(code) {
                this.code = code;
            }
        };
        const next = () => assert.fail('should not call next');

        middleware(req, res, next);

        assert.equal(res.code, 401);
    });
});
