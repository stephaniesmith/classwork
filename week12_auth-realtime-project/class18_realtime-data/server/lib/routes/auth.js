const Router = require('express').Router;
const router = Router();
const User = require('../models/user');
const ensureAuth = require('../auth/ensure-auth')();
const tokenService = require('../auth/token-service');
const bodyParser = require('body-parser').json();

function hasEmailAndPassword(req, res, next) {
    const user = req.body;
    if(!user || !user.username || !user.password) {
        return next({
            code: 400,
            error: 'username and password must be supplied'
        });
    }
    next();
}

router
    .get('/verify', ensureAuth, (req, res) => {
        res.send({ valid: true });
    })  
    
    .post('/signup', bodyParser, hasEmailAndPassword, ({ body }, res, next) => {
        const { username, password } = body;
        delete body.password;

        User.exists({ username })
            .then(exists => {
                if (exists) { throw { code: 400, error: 'email in use' }; }
                const user = new User({ username });
                user.generateHash(password);
                return user.save();
            })
            .then(user => Promise.all([user, tokenService.sign(user)]))
            .then(([{ _id, username }, token]) => res.send({ 
                token, _id, username
            }))
            .catch(next);
    })
    
    .post('/signin', bodyParser, hasEmailAndPassword, ({ body }, res, next) => {
        const { username, password } = body;
        delete body.password;

        User.findOne({ username })
            .then(user => {
                if (!user || !user.comparePassword(password)) {
                    throw { code: 401, error: 'Invalid Login' };
                }
                return user;
            })
            .then(user => Promise.all([user, tokenService.sign(user)]))
            .then(([{ _id, username }, token]) => res.send({ 
                token, _id, username
            }))
            .catch(next);
    });

module.exports = router;