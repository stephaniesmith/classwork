const assert = require('assert');
const Clients = require('../lib/Clients');

describe('Clients', () => {

    it('gets added clients', () => {
        const clients = new Clients();
        const c1 = {};
        const c2 = {};
        const c3 = {};
        clients.add(c1);
        clients.add(c2);
        clients.add(c3);

        const others = clients.others(c1);
        assert.deepEqual(others, [c2, c3]);

    });
});