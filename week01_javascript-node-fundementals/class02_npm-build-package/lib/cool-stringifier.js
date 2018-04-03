
module.exports = class CoolStringifier {
    constructor(sentence) {
        this.sentence = sentence;
    }

    reverseWordOrder() {
        return this.sentence
            .split(' ')
            .reverse()
            .join(' ');
    }

    reverseWords() {
        return this.sentence
            .split(' ')
            .map(word => word.split('').reverse().join(''))
            .join(' ');
    }
};