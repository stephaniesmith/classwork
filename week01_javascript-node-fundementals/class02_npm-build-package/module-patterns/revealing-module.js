
module.exports = function(config) {


    return {
        name: config.name,
        sayHello() {
            return `${config.greeting} ${this.name}`;
        }
    };
};