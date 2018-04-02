const assert = require('assert');
const getArgs = require('../lib/get-args');
const execSync = require('child_process').execSync;

describe('greet cli', () => {
    it('extracts name from args', () => {
        const name = getArgs(['node', 'greet-cli.js', 'world']);
        assert.equal(name, 'world');
    });

    it('works end-to-end', () => {
        const result = execSync('node ./bin/greet-cli.js world');
        assert.equal(result.toString(), 'Hello world\n');
    });
});