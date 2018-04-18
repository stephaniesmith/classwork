const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
    console.log('first app use');
    next();
});

const noFlavor = (req, res, next) => {
    if(!req.query.flavor) {
        res.send('add a flavor! /icecream?flavor=chocolate');
    }
    else next();
};

const onlyChocolate = (req, res, next) => {
    if(req.query.flavor !== 'chocolate') {
        res.send('really? try chocolate :)');
    }
    else next();
};

app.get('/icecream', noFlavor, onlyChocolate, (req, res) => {
    res.send('yum');
});

app.use('/melt', (req, res) => {
    res.send('sorry ;(');
});

app.use('/api', (req, res) => {
    res.json({ error: 'request not found ' });
});

app.use((req, res) => {
    res.sendFile(require('path').resolve(__dirname, '../public/404.html'));
});

app.listen(3000);