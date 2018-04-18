
//eslint-disable-next-line
// module.exports = function createLogger(log = console.log) {

    return function logger(req, res, next) {
        log(`${req.method} ${req.url}`);
        next();
    };
};
    
// module.exports = (log = console.log) => (req, res, next) => {
//     log(`${req.method} ${req.url}`);
//     next();
// };