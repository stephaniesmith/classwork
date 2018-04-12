const notFound = require('./not-found');
const pirate = require('../models/pirate');

const get = (req, res) => {
    const id = req.paths[1];
    id ? getOne(id, req, res) : getAll(req, res);
};

const getOne = (id, req, res) => {
    pirate.selectOne(id)
        .then(one => {
            res.send(one);
        });
};

const getAll = (req, res) => {
    pirate.find().then(pirates => {
        res.send(pirates);
    });
};

const post = (req, res) => {
    pirate.insert(req.body).then(saved => {
        res.send(saved);
    });
};

const put = (req, res) => {
    pirate.update(req.body).then(updated => {
        res.send(updated);
    });
};

const del = (req, res) => {
    pirate.delete(req.paths[1])
        .then(() => res.send({ removed: true }));
};

const methods = { get, post, put, delete: del };


module.exports = (req, res) => {
    const method = methods[req.method.toLowerCase()] || notFound;
    method(req, res);
};