const parseUrl = require('./utils/parse-url');
const bodyParser = require('./utils/body-parser');
const notFound = require('./utils/not-found');
const responseJSON = require('./utils/response-json');
const crews = require('./routes/crews');

const routes = {
    crews
};

module.exports = (req, res) => {
    req.requested = parseUrl(req.url);
    responseJSON(res);
    bodyParser(req)
        .then(() => {
            const route = routes[req.requested.route] || notFound;
            route(req, res);
        });
};