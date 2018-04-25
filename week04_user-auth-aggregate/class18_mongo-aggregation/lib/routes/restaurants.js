const router = require('express').Router();
const { respond } = require('./route-helpers');
const Restaurant = require('../models/Restaurant');

module.exports = router

    .get('/cleanest', respond(
        ({ query }) => {
            return Restaurant.topTenCleanestInBorough(query);
        }
    ));