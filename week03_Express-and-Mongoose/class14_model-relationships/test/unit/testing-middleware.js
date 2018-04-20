const { assert } = require('chai');
const getWeatherLocation = require('../../lib/get-weather-location');

it('puts details about weather on request.body based on zip', done => {

    const weather = {};
    const location = {};
    const api = zip => {
        api.zip = zip;
        return Promise.resolve({ weather, location });
    };

    const middleware = getWeatherLocation(api);
    const zip = 12345;
    const req = { body: { zip } };

    const next = () => {
        // 2. did the response of the api get added to req.body?
        assert.equal(req.body.weather, weather);
        assert.equal(req.body.location, location);
    
        // 3. did next get called?
        done();
    };

    middleware(req, null, next);

    // 1. did the zip get passed to the api?
    assert.equal(api.zip, zip);
});

it('calls next with error on fail', done => {
    const error = {};
    const api = () => {
        return Promise.reject(error);
    };
    const middleware = getWeatherLocation(api);

    const next = err => {
        assert.equal(err, error);
        done();
    };

    const req = { body: {} };

    middleware(req, null, next);
});