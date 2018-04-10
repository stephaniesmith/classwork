const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('http app', () => {

    it('says hello world on GET /', () => {
        // Pass app to chai.request, which will start (call .listen())
        // and auto-close server after request
        return chai.request(app)
            // method and path
            .get('/')
            .then(response => {
                assert.equal(response.text, 'hello world');
            });
    });

    it('returns cat object on GET /cat', () => {
        return chai.request(app)
            .get('/cat')
            .then(response => {
                assert.deepEqual(response.body, { 
                    name: 'garfield',
                    type: 'orange tabby' 
                });
            });
    });

    it('return 404 on bad path', () => {
        return chai.request(app)
            .get('/bad')
            .then(
                // success handler
                () => {
                    throw new Error('unexpected successful response');
                },
                // failure handler
                response => {
                    assert.equal(response.status, 404);
                    // assert.equal(response.text, 'Sorry...')
                }
            );
            
    });
});