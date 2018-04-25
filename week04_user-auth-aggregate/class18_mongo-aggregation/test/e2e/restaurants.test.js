const { assert } = require('chai');
const request = require('./request');
const { getDatabaseName } = require('./db');
const { execSync } = require('child_process');
const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);
const readFileSync = fs.readFileSync;

describe('Restaurants API', () => {

    before(() => {
        execSync(`mongoimport -d ${getDatabaseName()} -c restaurants --drop test/restaurants.json --jsonArray`);
    });

    it('gets cleanest', () => {
        return request.get('/api/restaurants/cleanest')
            .then(({ body }) => {
                const json = JSON.stringify(body, true, 2);
                // return writeFile('test/cleanest.json', json);
                const expected = readFileSync('test/cleanest.json', 'utf8');
                assert.equal(json, expected);
            });
    });
});