const { assert } = require('chai');
const EventEmitter = require('events');
const bodyParser = require('../lib/body-parser');

describe('body parser', () => {
    it('read body', () => {
        const req = new EventEmitter();
        const cat = { name: 'duchess' };

        const promise = bodyParser(req)
            .then(body => {
                console.log('BODY!!!', body);
                console.log(' CAT!!!', cat);

                assert.deepEqual(body, cat);
            });

        req.emit('data', JSON.stringify(cat));
        req.emit('end');

        return promise;
    });
});