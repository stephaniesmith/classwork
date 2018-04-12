/* eslint no-console: off */
const http = require('http');
const app = require('./lib/app');
const mongodb = require('./lib/mongodb');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pirates';

mongodb.connect(MONGODB_URI)
    .then(() => console.log('mongo connected', MONGODB_URI))
    .catch(err => console.log('mongo FAIL', err));

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('server running on', server.address().port);
});