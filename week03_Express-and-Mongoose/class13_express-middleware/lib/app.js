const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('first app use');
    next();
});

app.get('/icecream', (req, res) => {
    res.send('yum');
});

app.use((req, res) => {
    res.send('hello');
});

app.listen(3000);