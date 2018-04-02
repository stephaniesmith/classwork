
module.exports = function some(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const result = callback(element);
        if(result === true) return true;
    }
    return false;
}