const MongoClient = require('mongodb').MongoClient;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pirates';

const promise = MongoClient.connect(MONGODB_URI);

const dbPromise = promise.then(client => {
    dbPromise.client = client;
    return client.db();
});

module.exports = dbPromise;

// module.exports = MongoClient.connect(MONGODB_URI)
//     .then(client => {
//         return {
//             client,
//             db: client.db()
//         };
//     });