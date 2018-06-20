const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    game: {},
    score: Number
});

module.exports = mongoose.model('Game', schema);