
module.exports = (req, res) => {
    if(req.url === '/') {
        res.write('hello');
        res.write(' ');
        res.end('world');
    }
    else if(req.url.startsWith('/cat')) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ 
            name: 'garfield',
            type: 'orange tabby'
        }));
    }
    else {
        res.end('hello');
        // res.statusCode = 404;
        // res.setHeader('Content-Type', 'text/html');
        // res.end(`Sorry, cannot <strong>${req.method} ${req.url}</strong>`);
    }
};
