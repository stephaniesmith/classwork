const express = require('express');
const app = express();
const getWeatherLocation = require('./get-weather-location');
const api = require('./services/weather-service');

app.use(express.json());

const addWeatherLocation = getWeatherLocation(api);

app.post('/test', addWeatherLocation, (req, res) => {
    res.json(req.body);
});

app.put('/test', addWeatherLocation, (req, res) => {
    res.json(req.body);
});


module.exports = app;