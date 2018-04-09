const app = require('../lib/app');
const net = require('net');
const assert = require('assert');

describe('E2E', () => {

    const PORT = 15677;

    beforeEach(done => {
        app.listen(PORT, done);
    });

    let client1 = null;
    beforeEach(done => {
        client1 = net.connect(PORT, () => {
            client1.setEncoding('utf8');
            done();
        });
    });

    let client2 = null;
    beforeEach(done => {
        client2 = net.connect(PORT, () => {
            client2.setEncoding('utf8');
            done();
        });
    });

    afterEach(() => {
        app.close();
    });

    afterEach(() => {
        client1.destroy();
        client2.destroy();
    });

    it('client message is broadcast to other clients', done => {
        const message = 'echo test';

        client2.on('data', received => {
            assert.equal(received, message);
            done();
        });

        client1.write(message);
    });


});