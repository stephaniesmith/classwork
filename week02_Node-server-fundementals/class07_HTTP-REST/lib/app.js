const defaultGreeting = require('./default-greeting');
const cats = require('./cats');

module.exports = (req, res) => {
    if(req.url.startsWith('/')) {
        res.end(defaultGreeting());
    }
    else if(req.url.startsWith('/cats')) {
        res.setHeader('Content-Type', 'application/json');
        const catKey = req.url.slice(1).split('/')[1];
        const cat = cats(catKey);
        res.end(JSON.stringify(cat));
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`Sorry, cannot <strong>${req.method} ${req.url}</strong>`);
    }
};
