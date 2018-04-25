const express = require('express');
const morgan = require('morgan');
const { resolve } = require('path');
const app = express();
const errorHandler = require('./util/error-handler');
const createEnsureAuth = require('./util/ensure-auth');
require('./models/register-plugins');

// COMMON MIDDLEWARE
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

// ROUTES
const auth = require('./routes/auth');

const ensureAuth = createEnsureAuth();

app.use('/api/auth', auth);

// CATCH ALL for SPA
app.use((req, res) => {
    res.sendFile('index.html', { 
        root: resolve(__dirname + '/../public/') 
    });
});

// ERROR HANDLER
app.use(errorHandler());

module.exports = app;