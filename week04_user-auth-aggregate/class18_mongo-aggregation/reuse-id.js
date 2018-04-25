/* eslint no-console: off */
const connect = require('./lib/util/connect');

connect('mongodb://localhost:27017/one-to-one');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = mongoose.model('Account', new Schema({
    email: String
}));

const User = mongoose.model('User', new Schema({
    name: String
}));

const account = new Account({ email: 'me@me.com' });
account.save()
    .then(account => {
        console.log(account);
        return new User({
            _id: account._id,
            name: 'person'
        }).save();
    })
    .then(user => {
        console.log(user);
    })
    .catch(console.log)
    .then(() => mongoose.connection.close());