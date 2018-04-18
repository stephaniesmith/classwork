
module.exports = function create(password) {

    return function(req, res, next) {
        if(req.query.access_token === password) {
            next();
        }
        else res.sendStatus(401)
    };
};