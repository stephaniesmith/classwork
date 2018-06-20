const router = require('express').Router();
const Game = require('../models/game');

module.exports = router
    .get('/', (req, res, next) => {
        Game.find()
            .select('name').lean()
            .then(games => res.json(games))
            .catch(next);
    });