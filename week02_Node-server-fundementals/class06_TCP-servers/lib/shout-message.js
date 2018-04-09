
module.exports = message => {
    return message.startsWith('!') 
        ? message.slice(1).toUpperCase() : 
        message;
};