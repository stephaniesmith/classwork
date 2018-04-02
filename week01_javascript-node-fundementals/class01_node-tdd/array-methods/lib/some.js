
module.exports = function some(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        const result = callback(arr[i]);
        if(result) return true;
    }
    return false;
}