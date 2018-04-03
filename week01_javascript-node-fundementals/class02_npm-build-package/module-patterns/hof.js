
module.exports = function (tableName) {

    return function(name) {
        tableName[name];
    }
}