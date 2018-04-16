const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json('hello');
});

app.get('/penguins', (req, res) => {
    console.log(req.query);
    res.json([
        { name: 'bernard', type: 'emperor' },
        { name: 'bernice', type: 'chinstrap' },
    ]);
});

app.get('/penguins/:foo/:id', (req, res) => {
    console.log(req.params);
    res.json({ name: 'bernard', type: 'emperor' });
});

app.post('/penguins', (req, res) => {
    res.json({
        name: 'your saved penguin name',
        type: 'saved type'
    });
});

app.listen(3000);