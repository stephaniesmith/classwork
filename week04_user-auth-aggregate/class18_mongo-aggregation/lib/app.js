const express = require('express');
const morgan = require('morgan');
const { resolve } = require('path');
const app = express();
const errorHandler = require('./util/error-handler');
require('./models/register-plugins');

// COMMON MIDDLEWARE
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

// ROUTES
const restaurants = require('./routes/restaurants');


app.use('/api/restaurants', restaurants);

// CATCH ALL for SPA
app.use((req, res) => {
    res.sendFile('index.html', { 
        root: resolve(__dirname + '/../public/') 
    });
});

// ERROR HANDLER
app.use(errorHandler());

module.exports = app;