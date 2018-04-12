module.exports = res => obj => {
    res.json = res.end(JSON.stringify(obj));
};