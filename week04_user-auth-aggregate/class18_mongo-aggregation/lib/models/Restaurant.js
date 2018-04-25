const mongoose = require('mongoose');
const { Schema } = mongoose;
const { cleanest } = require('./restaurant-aggregations');

const schema = new Schema({
    // would have defined props here...
});

schema.statics = {
    topTenCleanestInBorough(options) {
        return this.aggregate(cleanest(options));
    }
};

module.exports = mongoose.model('Restaurant', schema);


