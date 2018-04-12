const mongo = require('../mongodb');

// const getCollection = mongo.then(db => db.collection('pirates'));

module.exports = {
    insert(pirate) {
        return mongo.then(db => {
            return db.collection('pirates')
                .insert(pirate)
                .then(result => result.ops[0]);
        });   
    },
    // insert(pirate) {
    //     return getCollection.then(pirates => {
    //         return pirates
    //             .insert(pirate)
    //             .then(result => result.ops[0]);
    //     });   
    // },
    find() {
        return mongo.then(db => {
            return db.collection('pirates')
                .find()
                .toArray();
        });
    }
};